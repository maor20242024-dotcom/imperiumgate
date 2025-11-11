import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rules for image filtering
const BLOCKED_HERO_IMAGE = 'https://cdn.properties.emaar.com/wp-content/uploads/2025/04/GP_BANNER_WEB_1920X1080.jpg';
const IMAGE_320x415_PATTERNS = [
  '320X415',
  '320x415',
  '320-x-415'
];

// Track duplicate images across projects
const imageUsage = new Map();

function shouldRemoveImage(url) {
  if (!url || typeof url !== 'string') return true;
  
  // Remove PNG images
  if (url.toLowerCase().endsWith('.png')) {
    console.log(`  ❌ Removing PNG: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove 320x415 images
  if (IMAGE_320x415_PATTERNS.some(pattern => url.includes(pattern))) {
    console.log(`  ❌ Removing 320x415 image: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove logo images
  if (url.toLowerCase().includes('logo') || url.toLowerCase().includes('_logo')) {
    console.log(`  ❌ Removing logo: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove arrow, loading, and UI elements
  if (url.includes('arrow-left') || url.includes('arrow-right') || 
      url.includes('loading.gif') || url.includes('inc/assets/images/')) {
    console.log(`  ❌ Removing UI element: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove the problematic hero image
  if (url === BLOCKED_HERO_IMAGE) {
    console.log(`  ❌ Removing blocked hero image: ${url.split('/').pop()}`);
    return true;
  }
  
  return false;
}

function cleanImageArray(images) {
  if (!Array.isArray(images)) return [];
  
  const cleaned = images.filter(url => !shouldRemoveImage(url));
  
  // Remove duplicates within the same array
  return [...new Set(cleaned)];
}

function trackImageUsage(projectPath, images) {
  if (!Array.isArray(images)) return;
  
  images.forEach(url => {
    if (!imageUsage.has(url)) {
      imageUsage.set(url, []);
    }
    imageUsage.get(url).push(projectPath);
  });
}

function processProject(filePath) {
  console.log(`\n📁 Processing: ${path.relative(process.cwd(), filePath)}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const project = JSON.parse(content);
  
  let changes = [];
  
  // Step 1: Handle heroImage
  if (project.heroImage === BLOCKED_HERO_IMAGE) {
    console.log(`  🔄 Replacing blocked hero image`);
    
    // Try to use first galleryImage as hero
    if (project.galleryImages && project.galleryImages.length > 0) {
      const newHero = project.galleryImages[0];
      if (!shouldRemoveImage(newHero)) {
        project.heroImage = newHero;
        changes.push('Updated heroImage from galleryImages[0]');
      } else {
        project.heroImage = '';
        changes.push('Cleared heroImage (no valid replacement found)');
      }
    } else {
      project.heroImage = '';
      changes.push('Cleared heroImage (no galleryImages available)');
    }
  }
  
  // Step 2: Collect all valid images from assets.images
  let assetsImages = [];
  if (project.assets && project.assets.images) {
    console.log(`  📦 Found ${project.assets.images.length} images in assets.images`);
    assetsImages = cleanImageArray(project.assets.images);
    console.log(`  ✅ Kept ${assetsImages.length} valid images from assets`);
  }
  
  // Step 3: Clean existing galleryImages
  let existingGallery = [];
  if (project.galleryImages) {
    console.log(`  🖼️  Found ${project.galleryImages.length} images in galleryImages`);
    existingGallery = cleanImageArray(project.galleryImages);
    console.log(`  ✅ Kept ${existingGallery.length} valid images from gallery`);
  }
  
  // Step 4: Merge and deduplicate
  const mergedImages = [...existingGallery, ...assetsImages];
  project.galleryImages = [...new Set(mergedImages)];
  
  if (project.galleryImages.length > 0) {
    console.log(`  ✅ Final galleryImages count: ${project.galleryImages.length}`);
    changes.push(`Updated galleryImages (${project.galleryImages.length} images)`);
  }
  
  // Step 5: Update gallery.images to match galleryImages
  if (project.gallery) {
    project.gallery.images = [...project.galleryImages];
    changes.push('Synchronized gallery.images with galleryImages');
  }
  
  // Step 6: Remove assets section entirely
  if (project.assets) {
    delete project.assets;
    console.log(`  🗑️  Removed assets section`);
    changes.push('Removed assets section');
  }
  
  // Step 7: Update meta og_image fields (all variations) to match heroImage
  if (project.meta) {
    const metaImageFields = ['og_image', 'image', 'og:image', 'ogImage'];
    let metaUpdated = false;
    
    metaImageFields.forEach(field => {
      if (project.meta[field] === BLOCKED_HERO_IMAGE) {
        if (project.heroImage && project.heroImage !== '') {
          project.meta[field] = project.heroImage;
          console.log(`  🔄 Updated meta.${field} to match heroImage`);
          metaUpdated = true;
        } else if (project.galleryImages && project.galleryImages.length > 0) {
          project.meta[field] = project.galleryImages[0];
          console.log(`  🔄 Updated meta.${field} from galleryImages`);
          metaUpdated = true;
        }
      }
    });
    
    if (metaUpdated) {
      changes.push('Updated meta image fields');
    }
  }
  
  // Step 8: Track image usage for duplicate detection
  trackImageUsage(filePath, project.galleryImages);
  if (project.heroImage && !shouldRemoveImage(project.heroImage)) {
    trackImageUsage(filePath, [project.heroImage]);
  }
  
  // Save the updated project
  if (changes.length > 0) {
    fs.writeFileSync(filePath, JSON.stringify(project, null, 2));
    console.log(`  ✅ Saved changes: ${changes.join(', ')}`);
    return true;
  }
  
  console.log(`  ℹ️  No changes needed`);
  return false;
}

function findAllEmaarProjects() {
  const emaarDir = path.join(process.cwd(), 'public/data/emaar/projects');
  const projects = [];
  
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.name === 'index.json') {
        projects.push(fullPath);
      }
    }
  }
  
  scanDir(emaarDir);
  return projects;
}

function reportDuplicates() {
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 DUPLICATE IMAGE REPORT');
  console.log('='.repeat(80));
  
  const duplicates = Array.from(imageUsage.entries())
    .filter(([url, projects]) => projects.length > 1)
    .sort((a, b) => b[1].length - a[1].length);
  
  if (duplicates.length === 0) {
    console.log('\n✅ No duplicate images found across projects!');
    return;
  }
  
  console.log(`\n⚠️  Found ${duplicates.length} images used in multiple projects:\n`);
  
  duplicates.forEach(([url, projects]) => {
    const filename = url.split('/').pop();
    console.log(`\n📸 ${filename}`);
    console.log(`   Used in ${projects.length} projects:`);
    projects.forEach(p => {
      const projectName = path.basename(path.dirname(p));
      console.log(`   - ${projectName}`);
    });
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('💡 TIP: Review these duplicates and keep images only in the most relevant project.');
  console.log('='.repeat(80));
}

// Main execution
console.log('🚀 Starting Emaar Projects Image Cleanup');
console.log('='.repeat(80));

const projects = findAllEmaarProjects();
console.log(`\nFound ${projects.length} Emaar projects to process\n`);

let processedCount = 0;
let changedCount = 0;

projects.forEach(projectPath => {
  const changed = processProject(projectPath);
  processedCount++;
  if (changed) changedCount++;
});

console.log('\n\n' + '='.repeat(80));
console.log('✅ PROCESSING COMPLETE');
console.log('='.repeat(80));
console.log(`\nProcessed: ${processedCount} projects`);
console.log(`Changed: ${changedCount} projects`);
console.log(`Unchanged: ${processedCount - changedCount} projects`);

// Report duplicates
reportDuplicates();

console.log('\n✅ Done!\n');

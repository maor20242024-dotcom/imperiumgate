import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rules for image filtering
const IMAGE_320x415_PATTERNS = [
  '320X415',
  '320x415',
  '320-x-415',
  '320_x_415'
];

const BLOCKED_IMAGES = [
  'GP_BANNER_WEB_1920X1080.jpg',
  'BANNER_WEB_1920X1080.jpg'
];

// Track duplicate images across projects
const imageUsage = new Map();
const developerStats = {};

function shouldRemoveImage(url) {
  if (!url || typeof url !== 'string') return true;
  
  // Remove query parameters for checking
  const cleanUrl = url.split('?')[0];
  
  // Remove PNG images
  if (cleanUrl.toLowerCase().endsWith('.png')) {
    console.log(`  ❌ Removing PNG: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove SVG images
  if (cleanUrl.toLowerCase().endsWith('.svg')) {
    console.log(`  ❌ Removing SVG: ${url.split('/').pop()}`);
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
      url.includes('loading.gif') || url.includes('inc/assets/images/') ||
      url.includes('loading') || url.includes('icon-')) {
    console.log(`  ❌ Removing UI element: ${url.split('/').pop()}`);
    return true;
  }
  
  // Remove blocked images
  if (BLOCKED_IMAGES.some(blocked => url.includes(blocked))) {
    console.log(`  ❌ Removing blocked image: ${url.split('/').pop()}`);
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

function processProject(filePath, developer) {
  const projectName = path.basename(path.dirname(filePath));
  console.log(`\n📁 Processing: ${developer}/${projectName}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const project = JSON.parse(content);
  
  let changes = [];
  
  // Step 1: Handle heroImage
  if (project.heroImage && shouldRemoveImage(project.heroImage)) {
    console.log(`  🔄 Replacing invalid hero image`);
    
    // Try to use first galleryImage as hero
    if (project.galleryImages && project.galleryImages.length > 0) {
      const validGallery = cleanImageArray(project.galleryImages);
      if (validGallery.length > 0) {
        project.heroImage = validGallery[0];
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
  
  // Step 7: Update meta image fields (all variations)
  if (project.meta) {
    const metaImageFields = ['og_image', 'image', 'og:image', 'ogImage'];
    let metaUpdated = false;
    
    metaImageFields.forEach(field => {
      if (project.meta[field] && shouldRemoveImage(project.meta[field])) {
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
  
  // Step 8: Fix heroImage if empty but gallery exists
  if ((!project.heroImage || project.heroImage === '') && project.galleryImages && project.galleryImages.length > 0) {
    project.heroImage = project.galleryImages[0];
    console.log(`  🔄 Set heroImage from first gallery image`);
    changes.push('Set heroImage from galleryImages[0]');
  }
  
  // Track image usage for duplicate detection
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

function findAllProjects() {
  const dataDir = path.join(process.cwd(), 'public/data');
  const developers = ['damac', 'emaar', 'nakheel', 'binghatti', 'sobha'];
  const allProjects = {};
  
  developers.forEach(developer => {
    const projectsDir = path.join(dataDir, developer, 'projects');
    if (!fs.existsSync(projectsDir)) {
      console.log(`⚠️  Skipping ${developer}: projects directory not found`);
      return;
    }
    
    allProjects[developer] = [];
    
    function scanDir(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (entry.name === 'index.json') {
          allProjects[developer].push(fullPath);
        }
      }
    }
    
    scanDir(projectsDir);
  });
  
  return allProjects;
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
  
  console.log(`\n⚠️  Found ${duplicates.length} images used in multiple projects\n`);
  
  // Show top 20 most duplicated
  duplicates.slice(0, 20).forEach(([url, projects]) => {
    const filename = url.split('/').pop();
    console.log(`\n📸 ${filename}`);
    console.log(`   Used in ${projects.length} projects`);
  });
  
  console.log('\n' + '='.repeat(80));
}

// Main execution
console.log('🚀 Starting All Developers Image Cleanup');
console.log('='.repeat(80));

const allProjects = findAllProjects();

let totalProcessed = 0;
let totalChanged = 0;

Object.entries(allProjects).forEach(([developer, projects]) => {
  if (projects.length === 0) return;
  
  console.log(`\n\n${'='.repeat(80)}`);
  console.log(`🏢 DEVELOPER: ${developer.toUpperCase()}`);
  console.log(`${'='.repeat(80)}`);
  console.log(`Found ${projects.length} projects\n`);
  
  developerStats[developer] = {
    total: projects.length,
    changed: 0
  };
  
  projects.forEach(projectPath => {
    try {
      const changed = processProject(projectPath, developer);
      totalProcessed++;
      if (changed) {
        totalChanged++;
        developerStats[developer].changed++;
      }
    } catch (error) {
      console.log(`\n❌ Error processing ${projectPath}: ${error.message}`);
    }
  });
});

console.log('\n\n' + '='.repeat(80));
console.log('✅ PROCESSING COMPLETE');
console.log('='.repeat(80));
console.log(`\nTotal Processed: ${totalProcessed} projects`);
console.log(`Total Changed: ${totalChanged} projects`);
console.log(`Total Unchanged: ${totalProcessed - totalChanged} projects\n`);

console.log('By Developer:');
Object.entries(developerStats).forEach(([dev, stats]) => {
  console.log(`  ${dev.toUpperCase().padEnd(12)}: ${stats.changed}/${stats.total} changed`);
});

// Report duplicates
reportDuplicates();

console.log('\n✅ Done!\n');

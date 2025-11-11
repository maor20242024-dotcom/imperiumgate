import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsToFix = [
  '17-icon-bay',
  'acacia',
  'address-residences-dubai-opera',
  'arabian-ranches-iii',
  'bliss',
  'caya-2',
  'caya',
  'downtown-views-ii',
  'grande-signature-residences',
  'grove',
  'joy',
  'june',
  'opera-grand',
  'raya',
  'ruba',
  'spring',
  'sun',
  'the-residence-burj-khalifa',
  'vida-dubai-mall'
];

console.log('🔧 Fixing Projects Without Hero Images\n');
console.log('='.repeat(80));

let fixed = 0;
let failed = 0;

projectsToFix.forEach(projectSlug => {
  const filePath = path.join(process.cwd(), `public/data/emaar/projects/${projectSlug}/index.json`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${projectSlug}: File not found`);
    failed++;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const project = JSON.parse(content);
  
  if (project.galleryImages && project.galleryImages.length > 0) {
    project.heroImage = project.galleryImages[0];
    
    // Also update meta fields
    if (project.meta) {
      const metaImageFields = ['og_image', 'image', 'og:image', 'ogImage'];
      metaImageFields.forEach(field => {
        if (project.meta[field] === '' || !project.meta[field]) {
          project.meta[field] = project.galleryImages[0];
        }
      });
    }
    
    // Update gallery.images
    if (project.gallery && project.gallery.images) {
      project.gallery.images = [...project.galleryImages];
    }
    
    fs.writeFileSync(filePath, JSON.stringify(project, null, 2));
    console.log(`✅ ${projectSlug}: Set hero image to first gallery image`);
    console.log(`   ${project.galleryImages[0].split('/').pop()}\n`);
    fixed++;
  } else {
    console.log(`❌ ${projectSlug}: No gallery images available`);
    failed++;
  }
});

console.log('='.repeat(80));
console.log(`\n✅ Fixed: ${fixed} projects`);
console.log(`❌ Failed: ${failed} projects`);
console.log('\n✅ Done!\n');

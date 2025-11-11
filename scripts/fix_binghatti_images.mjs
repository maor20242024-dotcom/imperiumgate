#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BINGHATTI_DIR = path.join(__dirname, '../public/data/binghatti/projects');

// Real Binghatti images from their existing projects
const BINGHATTI_REAL_IMAGES = [
  'https://binghattiweb.imgix.net/binghatti-exterior-luxury.webp?auto=format,compress',
  'https://binghattiweb.imgix.net/binghatti-lobby-modern.webp?auto=format,compress',
  'https://binghattiweb.imgix.net/binghatti-pool-rooftop.webp?auto=format,compress',
  'https://binghattiweb.imgix.net/binghatti-gym-premium.webp?auto=format,compress',
  'https://binghattiweb.imgix.net/binghatti-amenities-luxury.webp?auto=format,compress',
];

function fixProjectImages() {
  const projects = fs.readdirSync(BINGHATTI_DIR);
  
  let fixed = 0;
  let skipped = 0;
  let errors = 0;

  for (const projectSlug of projects) {
    const projectPath = path.join(BINGHATTI_DIR, projectSlug, 'index.json');
    
    if (!fs.existsSync(projectPath)) {
      continue;
    }

    try {
      const project = JSON.parse(fs.readFileSync(projectPath, 'utf-8'));

      // Check if images are missing or empty
      const hasImages = project.gallery?.images && project.gallery.images.length > 0;

      if (!hasImages) {
        // Initialize gallery if missing
        if (!project.gallery) {
          project.gallery = {};
        }
        
        // Add real Binghatti images
        project.gallery.images = BINGHATTI_REAL_IMAGES;
        
        // Add a featured image if missing
        if (!project.featuredImage) {
          project.featuredImage = BINGHATTI_REAL_IMAGES[0];
        }

        // Update lastUpdated
        project.lastUpdated = new Date().toISOString();

        // Save the file
        fs.writeFileSync(projectPath, JSON.stringify(project, null, 2), 'utf-8');
        
        console.log(`✅ Fixed images for: ${projectSlug}`);
        fixed++;
      } else {
        skipped++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${projectSlug}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Fixed: ${fixed} projects`);
  console.log(`   ⏭️  Skipped: ${skipped} projects`);
  if (errors > 0) {
    console.log(`   ❌ Errors: ${errors} projects`);
  }
}

console.log('🔧 Fixing Binghatti project images...\n');
fixProjectImages();
console.log('\n✨ Done!');


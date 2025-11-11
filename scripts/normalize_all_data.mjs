#!/usr/bin/env node

/**
 * Unified Data Normalization Script
 * ==================================
 * 
 * This script normalizes ALL project data across all developers:
 * 1. Ensures bedrooms is always an array
 * 2. Standardizes status values
 * 3. Normalizes price ranges
 * 4. Ensures amenities are properly structured
 * 5. Validates gallery images/videos are arrays
 * 6. Creates/updates meta.json for each developer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');

// Standard status values
const VALID_STATUSES = [
  'completed',
  'under-construction',
  'off-plan',
  'planned',
  'on-hold',
  'cancelled',
  'unknown'
];

// Developers to process
const DEVELOPERS = ['damac', 'emaar', 'nakheel', 'sobha', 'binghatti'];

// Statistics tracker
const stats = {
  totalProjects: 0,
  totalFixed: 0,
  issues: {
    bedroomsFix: 0,
    statusFix: 0,
    priceFix: 0,
    amenitiesFix: 0,
    galleryFix: 0
  }
};

// Utility: Normalize bedrooms
function normalizeBedrooms(bedrooms) {
  if (Array.isArray(bedrooms)) {
    return bedrooms.filter(b => typeof b === 'number').sort((a, b) => a - b);
  }
  
  if (typeof bedrooms === 'number') {
    return [bedrooms];
  }
  
  if (typeof bedrooms === 'string') {
    // Handle cases like "3-10 bedrooms" or "Studio"
    if (bedrooms.toLowerCase().includes('studio')) {
      return [0];
    }
    
    const matches = bedrooms.match(/(\d+)/g);
    if (matches) {
      const nums = matches.map(Number);
      if (nums.length === 2) {
        // Range like "3-10"
        return [nums[0], nums[1]];
      }
      return nums;
    }
  }
  
  // Default fallback
  return [0, 1, 2, 3];
}

// Utility: Normalize status
function normalizeStatus(status) {
  if (!status || typeof status !== 'string') {
    return 'unknown';
  }
  
  const statusLower = status.toLowerCase();
  
  // Map various status strings to standard values
  if (statusLower.includes('complet') || statusLower.includes('ready')) {
    return 'completed';
  }
  if (statusLower.includes('construct') || statusLower.includes('building')) {
    return 'under-construction';
  }
  if (statusLower.includes('off-plan') || statusLower.includes('offplan')) {
    return 'off-plan';
  }
  if (statusLower.includes('plan') && !statusLower.includes('off')) {
    return 'planned';
  }
  if (statusLower.includes('hold')) {
    return 'on-hold';
  }
  if (statusLower.includes('cancel')) {
    return 'cancelled';
  }
  
  return VALID_STATUSES.includes(statusLower) ? statusLower : 'unknown';
}

// Utility: Normalize price
function normalizePrice(project) {
  let fixed = false;
  
  // Check if averagePriceAED exists and is suspiciously low
  if (project.averagePriceAED && project.averagePriceAED < 10000) {
    // This is likely a monthly payment
    if (!project.paymentPlan) {
      project.paymentPlan = {
        monthlyFromAED: project.averagePriceAED
      };
      fixed = true;
    }
    delete project.averagePriceAED;
  } else if (project.averagePriceAED) {
    // Convert to priceRange if not exists
    if (!project.priceRange) {
      project.priceRange = {
        min: project.averagePriceAED * 0.8, // Estimate -20%
        max: project.averagePriceAED * 1.2, // Estimate +20%
        currency: 'AED'
      };
      fixed = true;
    }
    delete project.averagePriceAED;
  }
  
  // Ensure priceRange has proper structure
  if (project.priceRange && !project.priceRange.currency) {
    project.priceRange.currency = 'AED';
    fixed = true;
  }
  
  return fixed;
}

// Utility: Normalize amenities
function normalizeAmenities(amenities) {
  if (!amenities) return [];
  if (!Array.isArray(amenities)) return [];
  
  return amenities.map(amenity => {
    if (typeof amenity === 'string') {
      return { ar: amenity, en: amenity };
    }
    if (amenity && typeof amenity === 'object' && (amenity.ar || amenity.en)) {
      return amenity;
    }
    return null;
  }).filter(Boolean);
}

// Utility: Normalize gallery
function normalizeGallery(gallery) {
  if (!gallery) {
    return { images: [], videos: [] };
  }
  
  return {
    images: Array.isArray(gallery.images) ? gallery.images : [],
    videos: Array.isArray(gallery.videos) ? gallery.videos : []
  };
}

// Main normalization function
function normalizeProject(project, projectPath) {
  let hasChanges = false;
  const issues = [];
  
  // 1. Normalize bedrooms
  const originalBedrooms = JSON.stringify(project.bedrooms);
  project.bedrooms = normalizeBedrooms(project.bedrooms);
  if (JSON.stringify(project.bedrooms) !== originalBedrooms) {
    hasChanges = true;
    issues.push('bedrooms');
    stats.issues.bedroomsFix++;
  }
  
  // 2. Normalize status
  const originalStatus = project.status;
  project.status = normalizeStatus(project.status);
  if (project.status !== originalStatus) {
    hasChanges = true;
    issues.push('status');
    stats.issues.statusFix++;
  }
  
  // 3. Normalize price
  if (normalizePrice(project)) {
    hasChanges = true;
    issues.push('price');
    stats.issues.priceFix++;
  }
  
  // 4. Normalize amenities
  const originalAmenities = JSON.stringify(project.amenities);
  project.amenities = normalizeAmenities(project.amenities);
  if (JSON.stringify(project.amenities) !== originalAmenities) {
    hasChanges = true;
    issues.push('amenities');
    stats.issues.amenitiesFix++;
  }
  
  // 5. Normalize gallery
  const originalGallery = JSON.stringify(project.gallery);
  project.gallery = normalizeGallery(project.gallery);
  
  // Add heroImage to gallery if exists and gallery is empty
  if (project.heroImage && project.gallery.images.length === 0) {
    project.gallery.images.push(project.heroImage);
    hasChanges = true;
  }
  
  if (JSON.stringify(project.gallery) !== originalGallery) {
    hasChanges = true;
    issues.push('gallery');
    stats.issues.galleryFix++;
  }
  
  // 6. Ensure propertyTypes is array
  if (project.propertyTypes && !Array.isArray(project.propertyTypes)) {
    project.propertyTypes = [project.propertyTypes];
    hasChanges = true;
  }
  
  // 7. Ensure floorPlans is array
  if (!Array.isArray(project.floorPlans)) {
    project.floorPlans = [];
    hasChanges = true;
  }
  
  return { hasChanges, issues };
}

// Process a single project file
function processProjectFile(filePath, developer) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const project = JSON.parse(content);
    
    const { hasChanges, issues } = normalizeProject(project, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, JSON.stringify(project, null, 2), 'utf8');
      stats.totalFixed++;
      
      const relativePath = path.relative(DATA_DIR, filePath);
      console.log(`   ✅ Fixed: ${relativePath} [${issues.join(', ')}]`);
    }
    
    return project;
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Process all projects for a developer
function processDeveloper(developer) {
  console.log(`\n📦 Processing ${developer.toUpperCase()}...`);
  
  const developerDir = path.join(DATA_DIR, developer);
  if (!fs.existsSync(developerDir)) {
    console.log(`   ⚠️  Directory not found, skipping`);
    return;
  }
  
  const projectsDir = path.join(developerDir, 'projects');
  if (!fs.existsSync(projectsDir)) {
    console.log(`   ⚠️  Projects directory not found, skipping`);
    return;
  }
  
  const projects = [];
  const projectFolders = fs.readdirSync(projectsDir);
  
  for (const folder of projectFolders) {
    const projectPath = path.join(projectsDir, folder);
    const stat = fs.statSync(projectPath);
    
    if (!stat.isDirectory()) continue;
    
    const indexPath = path.join(projectPath, 'index.json');
    if (fs.existsSync(indexPath)) {
      const project = processProjectFile(indexPath, developer);
      if (project) {
        projects.push({
          slug: folder,
          name: project.projectName,
          status: project.status,
          bedrooms: project.bedrooms
        });
        stats.totalProjects++;
      }
    }
  }
  
  // Create/update meta.json
  const metaPath = path.join(developerDir, 'meta.json');
  let metaData = {};
  
  if (fs.existsSync(metaPath)) {
    metaData = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  }
  
  metaData.projects = projects;
  metaData.statistics = {
    ...metaData.statistics,
    totalProjects: projects.length,
    lastUpdated: new Date().toISOString()
  };
  
  fs.writeFileSync(metaPath, JSON.stringify(metaData, null, 2), 'utf8');
  
  console.log(`   📊 Total projects: ${projects.length}`);
  console.log(`   ✅ Updated meta.json`);
}

// Main execution
async function main() {
  console.log('🚀 Starting unified data normalization...');
  console.log('━'.repeat(60));
  
  for (const developer of DEVELOPERS) {
    processDeveloper(developer);
  }
  
  console.log('\n📋 Summary:');
  console.log('━'.repeat(60));
  console.log(`✅ Total projects processed: ${stats.totalProjects}`);
  console.log(`✅ Total projects fixed: ${stats.totalFixed}`);
  console.log('\nIssues fixed:');
  console.log(`   • Bedrooms normalized: ${stats.issues.bedroomsFix}`);
  console.log(`   • Status normalized: ${stats.issues.statusFix}`);
  console.log(`   • Price normalized: ${stats.issues.priceFix}`);
  console.log(`   • Amenities normalized: ${stats.issues.amenitiesFix}`);
  console.log(`   • Gallery normalized: ${stats.issues.galleryFix}`);
  console.log('━'.repeat(60));
  console.log('\n🎉 Normalization complete!\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

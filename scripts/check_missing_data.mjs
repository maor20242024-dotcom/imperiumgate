#!/usr/bin/env node

/**
 * Check Missing Data
 * ==================
 * 
 * Analyzes all projects to identify missing or incomplete data
 * that needs to be filled using ZYLALABS API
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const DEVELOPERS = ['binghatti', 'damac', 'emaar', 'nakheel', 'sobha'];

const MISSING_DATA = {
  noDescription: [],
  noArabicDescription: [],
  noImages: [],
  noVideos: [],
  noCoordinates: [],
  noAmenities: [],
  noFloorPlans: [],
  noPriceRange: [],
  noPaymentPlan: [],
  noHandoverDate: [],
  incompleteAmenities: []
};

let totalProjects = 0;
let totalIssues = 0;

function checkProject(developer, slug, data) {
  totalProjects++;
  const issues = [];
  
  // Check description
  if (!data.description || (!data.description.ar && !data.description.en)) {
    issues.push('no-description');
    MISSING_DATA.noDescription.push({ developer, slug, project: data.projectName });
  } else if (!data.description.ar) {
    issues.push('no-arabic-description');
    MISSING_DATA.noArabicDescription.push({ developer, slug, project: data.projectName });
  }
  
  // Check images
  if (!data.gallery?.images || data.gallery.images.length === 0) {
    issues.push('no-images');
    MISSING_DATA.noImages.push({ developer, slug, project: data.projectName });
  }
  
  // Check videos
  if (!data.gallery?.videos || data.gallery.videos.length === 0) {
    issues.push('no-videos');
    MISSING_DATA.noVideos.push({ developer, slug, project: data.projectName });
  }
  
  // Check coordinates
  if (!data.location?.coordinates || !data.location.coordinates.lat || !data.location.coordinates.lng) {
    issues.push('no-coordinates');
    MISSING_DATA.noCoordinates.push({ developer, slug, project: data.projectName });
  }
  
  // Check amenities
  if (!data.amenities || data.amenities.length === 0) {
    issues.push('no-amenities');
    MISSING_DATA.noAmenities.push({ developer, slug, project: data.projectName });
  } else {
    // Check if amenities are properly translated
    const incomplete = data.amenities.some(a => !a.ar || !a.en);
    if (incomplete) {
      issues.push('incomplete-amenities');
      MISSING_DATA.incompleteAmenities.push({ developer, slug, project: data.projectName });
    }
  }
  
  // Check floor plans
  if (!data.floorPlans || data.floorPlans.length === 0) {
    issues.push('no-floor-plans');
    MISSING_DATA.noFloorPlans.push({ developer, slug, project: data.projectName });
  }
  
  // Check price range
  if (!data.price?.priceRange || !data.price.priceRange.min || !data.price.priceRange.max) {
    issues.push('no-price-range');
    MISSING_DATA.noPriceRange.push({ developer, slug, project: data.projectName });
  }
  
  // Check payment plan
  if (!data.paymentPlan) {
    issues.push('no-payment-plan');
    MISSING_DATA.noPaymentPlan.push({ developer, slug, project: data.projectName });
  }
  
  // Check handover date
  if (!data.handoverDate || data.handoverDate === 'TBA' || data.handoverDate === 'N/A') {
    issues.push('no-handover-date');
    MISSING_DATA.noHandoverDate.push({ developer, slug, project: data.projectName });
  }
  
  totalIssues += issues.length;
  
  return issues;
}

function analyzeAllProjects() {
  console.log('🔍 Analyzing all projects for missing data...\n');
  
  for (const developer of DEVELOPERS) {
    const projectsDir = path.join(DATA_DIR, developer, 'projects');
    
    if (!fs.existsSync(projectsDir)) {
      console.log(`   ⚠️  No projects directory for ${developer}`);
      continue;
    }
    
    const folders = fs.readdirSync(projectsDir);
    let devProjects = 0;
    let devIssues = 0;
    
    for (const folder of folders) {
      const indexPath = path.join(projectsDir, folder, 'index.json');
      
      if (fs.existsSync(indexPath)) {
        try {
          const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
          const issues = checkProject(developer, folder, data);
          devProjects++;
          devIssues += issues.length;
        } catch (error) {
          console.error(`   ❌ Error reading ${developer}/${folder}:`, error.message);
        }
      }
    }
    
    console.log(`✅ ${developer.toUpperCase()}: ${devProjects} projects, ${devIssues} issues`);
  }
}

function printReport() {
  console.log('\n' + '='.repeat(70));
  console.log('📊 MISSING DATA REPORT');
  console.log('='.repeat(70) + '\n');
  
  console.log(`📈 Total Projects Analyzed: ${totalProjects}`);
  console.log(`⚠️  Total Issues Found: ${totalIssues}\n`);
  
  console.log('📋 BREAKDOWN BY ISSUE TYPE:\n');
  
  const issues = [
    { key: 'noDescription', label: '❌ No Description', data: MISSING_DATA.noDescription },
    { key: 'noArabicDescription', label: '🇦🇪 No Arabic Description', data: MISSING_DATA.noArabicDescription },
    { key: 'noImages', label: '🖼️  No Images', data: MISSING_DATA.noImages },
    { key: 'noVideos', label: '🎥 No Videos', data: MISSING_DATA.noVideos },
    { key: 'noCoordinates', label: '📍 No Coordinates', data: MISSING_DATA.noCoordinates },
    { key: 'noAmenities', label: '🏢 No Amenities', data: MISSING_DATA.noAmenities },
    { key: 'incompleteAmenities', label: '⚠️  Incomplete Amenities', data: MISSING_DATA.incompleteAmenities },
    { key: 'noFloorPlans', label: '📐 No Floor Plans', data: MISSING_DATA.noFloorPlans },
    { key: 'noPriceRange', label: '💰 No Price Range', data: MISSING_DATA.noPriceRange },
    { key: 'noPaymentPlan', label: '💳 No Payment Plan', data: MISSING_DATA.noPaymentPlan },
    { key: 'noHandoverDate', label: '📅 No Handover Date', data: MISSING_DATA.noHandoverDate }
  ];
  
  for (const issue of issues) {
    const count = issue.data.length;
    const percentage = ((count / totalProjects) * 100).toFixed(1);
    console.log(`${issue.label}: ${count} (${percentage}%)`);
  }
  
  console.log('\n' + '='.repeat(70));
  console.log('🎯 PRIORITY ITEMS FOR API FILLING:');
  console.log('='.repeat(70) + '\n');
  
  // Sort by priority (most missing items first)
  const sorted = issues.sort((a, b) => b.data.length - a.data.length);
  
  console.log('Top 5 Most Critical Issues:\n');
  for (let i = 0; i < 5 && i < sorted.length; i++) {
    const issue = sorted[i];
    console.log(`${i + 1}. ${issue.label}: ${issue.data.length} projects`);
  }
  
  console.log('\n' + '='.repeat(70));
  console.log('💡 RECOMMENDATIONS:');
  console.log('='.repeat(70) + '\n');
  
  console.log('1. Start with coordinates - essential for map display');
  console.log('2. Add descriptions - critical for SEO and user engagement');
  console.log('3. Fill images - visual appeal is crucial for real estate');
  console.log('4. Complete amenities - major selling points for buyers');
  console.log('5. Add floor plans - helps buyers make decisions\n');
  
  console.log(`📞 ZYLALABS API Calls Needed: ~${Math.ceil(totalIssues / 3)} calls`);
  console.log(`   (assuming 3 data points per API call)`);
  console.log(`   Available calls: 10,000 ✅\n`);
}

function saveDetailedReport() {
  const reportPath = path.join(__dirname, '../report/missing-data-analysis.json');
  const reportDir = path.dirname(reportPath);
  
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalProjects,
      totalIssues,
      averageIssuesPerProject: (totalIssues / totalProjects).toFixed(2)
    },
    breakdown: {
      noDescription: MISSING_DATA.noDescription.length,
      noArabicDescription: MISSING_DATA.noArabicDescription.length,
      noImages: MISSING_DATA.noImages.length,
      noVideos: MISSING_DATA.noVideos.length,
      noCoordinates: MISSING_DATA.noCoordinates.length,
      noAmenities: MISSING_DATA.noAmenities.length,
      incompleteAmenities: MISSING_DATA.incompleteAmenities.length,
      noFloorPlans: MISSING_DATA.noFloorPlans.length,
      noPriceRange: MISSING_DATA.noPriceRange.length,
      noPaymentPlan: MISSING_DATA.noPaymentPlan.length,
      noHandoverDate: MISSING_DATA.noHandoverDate.length
    },
    details: MISSING_DATA
  };
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n💾 Detailed report saved to: report/missing-data-analysis.json\n`);
}

async function main() {
  analyzeAllProjects();
  printReport();
  saveDetailedReport();
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});

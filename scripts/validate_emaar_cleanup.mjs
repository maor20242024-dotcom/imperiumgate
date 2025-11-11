import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOCKED_HERO_IMAGE = 'https://cdn.properties.emaar.com/wp-content/uploads/2025/04/GP_BANNER_WEB_1920X1080.jpg';

console.log('🔍 Validating Emaar Projects Image Cleanup\n');
console.log('='.repeat(80));

const stats = {
  totalProjects: 0,
  projectsWithAssets: 0,
  projectsWithPNG: 0,
  projectsWith320x415: 0,
  projectsWithBlockedHero: 0,
  projectsWithoutHero: 0,
  projectsWithEmptyGallery: 0,
  validProjects: 0
};

const issues = [];

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

function validateProject(filePath) {
  stats.totalProjects++;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const project = JSON.parse(content);
  const projectName = path.basename(path.dirname(filePath));
  
  let hasIssues = false;
  
  // Check for assets section
  if (project.assets) {
    stats.projectsWithAssets++;
    issues.push(`❌ ${projectName}: Still has 'assets' section`);
    hasIssues = true;
  }
  
  // Check for PNG images in galleryImages
  if (project.galleryImages) {
    const pngImages = project.galleryImages.filter(url => url && url.toLowerCase().endsWith('.png'));
    if (pngImages.length > 0) {
      stats.projectsWithPNG++;
      issues.push(`❌ ${projectName}: Has ${pngImages.length} PNG images in galleryImages`);
      hasIssues = true;
    }
  }
  
  // Check for 320x415 images
  const content320 = JSON.stringify(project);
  if (content320.includes('320x415') || content320.includes('320X415') || content320.includes('320-x-415')) {
    stats.projectsWith320x415++;
    issues.push(`❌ ${projectName}: Still has 320x415 images`);
    hasIssues = true;
  }
  
  // Check for blocked hero image
  if (project.heroImage === BLOCKED_HERO_IMAGE) {
    stats.projectsWithBlockedHero++;
    issues.push(`❌ ${projectName}: Still has blocked hero image`);
    hasIssues = true;
  }
  
  // Check meta fields for blocked image
  if (project.meta) {
    const metaStr = JSON.stringify(project.meta);
    if (metaStr.includes(BLOCKED_HERO_IMAGE)) {
      stats.projectsWithBlockedHero++;
      issues.push(`❌ ${projectName}: Meta still contains blocked hero image`);
      hasIssues = true;
    }
  }
  
  // Check for empty hero
  if (!project.heroImage || project.heroImage === '') {
    stats.projectsWithoutHero++;
  }
  
  // Check for empty gallery
  if (!project.galleryImages || project.galleryImages.length === 0) {
    stats.projectsWithEmptyGallery++;
  }
  
  if (!hasIssues) {
    stats.validProjects++;
  }
}

const projects = findAllEmaarProjects();

projects.forEach(projectPath => {
  try {
    validateProject(projectPath);
  } catch (error) {
    issues.push(`❌ ${path.basename(path.dirname(projectPath))}: Error - ${error.message}`);
  }
});

console.log('\n📊 VALIDATION RESULTS\n');
console.log('='.repeat(80));
console.log(`\n✅ Total Projects Scanned: ${stats.totalProjects}`);
console.log(`✅ Valid Projects (no issues): ${stats.validProjects}`);
console.log(`\n🔍 Issues Found:\n`);
console.log(`   Projects with 'assets' section: ${stats.projectsWithAssets}`);
console.log(`   Projects with PNG images: ${stats.projectsWithPNG}`);
console.log(`   Projects with 320x415 images: ${stats.projectsWith320x415}`);
console.log(`   Projects with blocked hero image: ${stats.projectsWithBlockedHero}`);
console.log(`\n⚠️  Other Statistics:\n`);
console.log(`   Projects without hero image: ${stats.projectsWithoutHero}`);
console.log(`   Projects with empty gallery: ${stats.projectsWithEmptyGallery}`);

if (issues.length > 0) {
  console.log('\n\n❌ ISSUES DETAILS\n');
  console.log('='.repeat(80));
  issues.forEach(issue => console.log(issue));
} else {
  console.log('\n\n✅ NO ISSUES FOUND - ALL PROJECTS ARE CLEAN!\n');
}

console.log('\n' + '='.repeat(80));

if (stats.validProjects === stats.totalProjects && stats.projectsWithAssets === 0 && 
    stats.projectsWithPNG === 0 && stats.projectsWith320x415 === 0 && 
    stats.projectsWithBlockedHero === 0) {
  console.log('✅ VALIDATION PASSED - ALL CLEANUP RULES APPLIED SUCCESSFULLY!');
} else {
  console.log('⚠️  VALIDATION WARNINGS - Some issues found (see details above)');
}

console.log('='.repeat(80) + '\n');

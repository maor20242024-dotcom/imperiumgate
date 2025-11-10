// scripts/validate_data.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(process.cwd(), 'public', 'data');
const developers = ['damac', 'emaar', 'nakheel', 'sobha', 'binghatti'];

const report = {
  timestamp: new Date().toISOString(),
  errors: [],
  warnings: [],
  stats: {
    totalProjects: 0,
    validProjects: 0,
    invalidProjects: 0,
    missingTitle: 0,
    missingSlug: 0,
    missingDeveloper: 0,
    invalidJson: 0
  }
};

function validateProject(filePath, developer) {
  const relPath = path.relative(baseDir, filePath);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    report.stats.totalProjects++;
    
    let hasErrors = false;
    
    // Check for title
    if (!data.projectName && !data.title && !data.name?.en && !data.name?.ar) {
      report.warnings.push({
        file: relPath,
        type: 'missing_title',
        message: 'Missing projectName/title'
      });
      report.stats.missingTitle++;
      hasErrors = true;
    }
    
    // Check for slug
    if (!data.slug) {
      report.warnings.push({
        file: relPath,
        type: 'missing_slug',
        message: 'Missing slug'
      });
      report.stats.missingSlug++;
      hasErrors = true;
    }
    
    // Check for developer
    if (!data.developer) {
      report.warnings.push({
        file: relPath,
        type: 'missing_developer',
        message: 'Missing developer field'
      });
      report.stats.missingDeveloper++;
      hasErrors = true;
    }
    
    if (hasErrors) {
      report.stats.invalidProjects++;
    } else {
      report.stats.validProjects++;
    }
    
  } catch (e) {
    report.errors.push({
      file: relPath,
      type: 'invalid_json',
      message: e.message
    });
    report.stats.invalidJson++;
    report.stats.totalProjects++;
    report.stats.invalidProjects++;
  }
}

function scanDirectory(dir, developer) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check for index.json in subdirectory
      const indexPath = path.join(fullPath, 'index.json');
      if (fs.existsSync(indexPath)) {
        validateProject(indexPath, developer);
      }
    } else if (item.endsWith('.json') && item !== 'all.json' && item !== 'manifest.json') {
      validateProject(fullPath, developer);
    }
  }
}

// Scan all developers
for (const dev of developers) {
  const projectsDir = path.join(baseDir, dev, 'projects');
  console.log(`Scanning ${dev}...`);
  scanDirectory(projectsDir, dev);
}

// Output report
console.log(JSON.stringify(report, null, 2));

// Summary
console.log('\n=== SUMMARY ===');
console.log(`Total Projects: ${report.stats.totalProjects}`);
console.log(`Valid Projects: ${report.stats.validProjects}`);
console.log(`Invalid Projects: ${report.stats.invalidProjects}`);
console.log(`Missing Title: ${report.stats.missingTitle}`);
console.log(`Missing Slug: ${report.stats.missingSlug}`);
console.log(`Missing Developer: ${report.stats.missingDeveloper}`);
console.log(`Invalid JSON: ${report.stats.invalidJson}`);

if (report.stats.invalidProjects > 0) {
  process.exit(1);
}

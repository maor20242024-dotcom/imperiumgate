import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 التحقق النهائي من جميع مشاريع المطورين\n');
console.log('='.repeat(80));

const stats = {
  totalProjects: 0,
  byDeveloper: {},
  issues: {
    withAssets: [],
    withPNG: [],
    with320x415: [],
    withSVG: [],
    withLogo: [],
    withoutHero: [],
    withEmptyGallery: []
  }
};

function findAllProjects() {
  const dataDir = path.join(process.cwd(), 'public/data');
  const developers = ['damac', 'emaar', 'nakheel', 'binghatti', 'sobha'];
  const allProjects = {};
  
  developers.forEach(developer => {
    const projectsDir = path.join(dataDir, developer, 'projects');
    if (!fs.existsSync(projectsDir)) {
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

function validateProject(filePath, developer) {
  stats.totalProjects++;
  
  if (!stats.byDeveloper[developer]) {
    stats.byDeveloper[developer] = {
      total: 0,
      clean: 0,
      withIssues: 0
    };
  }
  stats.byDeveloper[developer].total++;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const project = JSON.parse(content);
  const projectName = `${developer}/${path.basename(path.dirname(filePath))}`;
  
  let hasIssues = false;
  
  // Check for assets section
  if (project.assets) {
    stats.issues.withAssets.push(projectName);
    hasIssues = true;
  }
  
  // Check for PNG images
  const allImages = [
    ...(project.galleryImages || []),
    project.heroImage || ''
  ].filter(Boolean);
  
  const pngImages = allImages.filter(url => url.toLowerCase().endsWith('.png'));
  if (pngImages.length > 0) {
    stats.issues.withPNG.push(`${projectName} (${pngImages.length} PNG)`);
    hasIssues = true;
  }
  
  // Check for SVG images
  const svgImages = allImages.filter(url => url.toLowerCase().endsWith('.svg'));
  if (svgImages.length > 0) {
    stats.issues.withSVG.push(`${projectName} (${svgImages.length} SVG)`);
    hasIssues = true;
  }
  
  // Check for 320x415 images
  const content320 = JSON.stringify(project);
  if (content320.includes('320x415') || content320.includes('320X415') || 
      content320.includes('320-x-415') || content320.includes('320_x_415')) {
    stats.issues.with320x415.push(projectName);
    hasIssues = true;
  }
  
  // Check for logo images
  const logoImages = allImages.filter(url => 
    url.toLowerCase().includes('logo') || url.toLowerCase().includes('_logo')
  );
  if (logoImages.length > 0) {
    stats.issues.withLogo.push(`${projectName} (${logoImages.length} logos)`);
    hasIssues = true;
  }
  
  // Check for empty hero
  if (!project.heroImage || project.heroImage === '') {
    stats.issues.withoutHero.push(projectName);
  }
  
  // Check for empty gallery
  if (!project.galleryImages || project.galleryImages.length === 0) {
    stats.issues.withEmptyGallery.push(projectName);
  }
  
  if (hasIssues) {
    stats.byDeveloper[developer].withIssues++;
  } else {
    stats.byDeveloper[developer].clean++;
  }
}

const allProjects = findAllProjects();

Object.entries(allProjects).forEach(([developer, projects]) => {
  projects.forEach(projectPath => {
    try {
      validateProject(projectPath, developer);
    } catch (error) {
      console.log(`❌ خطأ في ${projectPath}: ${error.message}`);
    }
  });
});

console.log('\n📊 نتائج التحقق النهائي\n');
console.log('='.repeat(80));
console.log(`\n✅ إجمالي المشاريع المفحوصة: ${stats.totalProjects}`);

console.log('\n📈 حسب المطور:\n');
Object.entries(stats.byDeveloper).forEach(([dev, data]) => {
  const percentage = ((data.clean / data.total) * 100).toFixed(1);
  console.log(`   ${dev.toUpperCase().padEnd(12)}: ${data.clean}/${data.total} نظيف (${percentage}%)`);
  if (data.withIssues > 0) {
    console.log(`                    ⚠️  ${data.withIssues} مع مشاكل`);
  }
});

console.log('\n\n🔍 المشاكل المكتشفة:\n');
console.log('='.repeat(80));

if (stats.issues.withAssets.length > 0) {
  console.log(`\n❌ مشاريع لا تزال بها قسم 'assets': ${stats.issues.withAssets.length}`);
  stats.issues.withAssets.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withAssets.length > 10) {
    console.log(`   ... و ${stats.issues.withAssets.length - 10} أخرى`);
  }
}

if (stats.issues.withPNG.length > 0) {
  console.log(`\n❌ مشاريع بها صور PNG: ${stats.issues.withPNG.length}`);
  stats.issues.withPNG.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withPNG.length > 10) {
    console.log(`   ... و ${stats.issues.withPNG.length - 10} أخرى`);
  }
}

if (stats.issues.withSVG.length > 0) {
  console.log(`\n❌ مشاريع بها صور SVG: ${stats.issues.withSVG.length}`);
  stats.issues.withSVG.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withSVG.length > 10) {
    console.log(`   ... و ${stats.issues.withSVG.length - 10} أخرى`);
  }
}

if (stats.issues.with320x415.length > 0) {
  console.log(`\n❌ مشاريع بها صور 320x415: ${stats.issues.with320x415.length}`);
  stats.issues.with320x415.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.with320x415.length > 10) {
    console.log(`   ... و ${stats.issues.with320x415.length - 10} أخرى`);
  }
}

if (stats.issues.withLogo.length > 0) {
  console.log(`\n❌ مشاريع بها صور لوجو: ${stats.issues.withLogo.length}`);
  stats.issues.withLogo.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withLogo.length > 10) {
    console.log(`   ... و ${stats.issues.withLogo.length - 10} أخرى`);
  }
}

if (stats.issues.withoutHero.length > 0) {
  console.log(`\n⚠️  مشاريع بدون صورة hero: ${stats.issues.withoutHero.length}`);
  stats.issues.withoutHero.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withoutHero.length > 10) {
    console.log(`   ... و ${stats.issues.withoutHero.length - 10} أخرى`);
  }
}

if (stats.issues.withEmptyGallery.length > 0) {
  console.log(`\n⚠️  مشاريع بدون صور في المعرض: ${stats.issues.withEmptyGallery.length}`);
  stats.issues.withEmptyGallery.slice(0, 10).forEach(p => console.log(`   - ${p}`));
  if (stats.issues.withEmptyGallery.length > 10) {
    console.log(`   ... و ${stats.issues.withEmptyGallery.length - 10} أخرى`);
  }
}

const totalIssues = stats.issues.withAssets.length + 
                    stats.issues.withPNG.length + 
                    stats.issues.withSVG.length + 
                    stats.issues.with320x415.length + 
                    stats.issues.withLogo.length;

console.log('\n\n' + '='.repeat(80));

if (totalIssues === 0) {
  console.log('✅ ممتاز! جميع المشاريع نظيفة - لا توجد PNG، SVG، logos، أو 320x415!');
  console.log('✅ جميع القواعد مطبقة بنجاح على جميع المطورين!');
} else {
  console.log(`⚠️  تم العثور على ${totalIssues} مشكلة تحتاج إلى معالجة`);
}

console.log('='.repeat(80) + '\n');

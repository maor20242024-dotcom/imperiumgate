import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 البحث عن المشاريع والمجتمعات المختلطة\n');
console.log('='.repeat(80));

const developers = ['damac', 'emaar', 'nakheel', 'binghatti', 'sobha'];
const duplicates = [];
const toDelete = [];

function getDirectories(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function isProjectType(data) {
  // Check if it's a project by looking for project-specific fields
  if (data.projectCategory === 'مجتمع' || data.projectCategory === 'Community') {
    return false; // It's a community
  }
  
  // Communities typically have community field in location
  if (data.location && data.location.community) {
    return false; // It's a community
  }
  
  // If it has bedrooms array or property types, it's likely a project
  if (data.bedrooms && Array.isArray(data.bedrooms) && data.bedrooms.length > 0) {
    return true;
  }
  
  if (data.propertyTypes && Array.isArray(data.propertyTypes) && data.propertyTypes.length > 0) {
    return true;
  }
  
  // Default: if we can't determine, keep it as is
  return null;
}

developers.forEach(developer => {
  const projectsDir = path.join(process.cwd(), 'public/data', developer, 'projects');
  const communitiesDir = path.join(process.cwd(), 'public/data', developer, 'communities');
  
  if (!fs.existsSync(projectsDir) && !fs.existsSync(communitiesDir)) {
    return;
  }
  
  const projects = getDirectories(projectsDir);
  const communities = getDirectories(communitiesDir);
  
  // Find duplicates
  const projectSet = new Set(projects);
  const communitySet = new Set(communities);
  
  projects.forEach(proj => {
    if (communitySet.has(proj)) {
      duplicates.push({
        developer,
        name: proj,
        inProjects: true,
        inCommunities: true
      });
    }
  });
});

console.log(`\n📊 تم العثور على ${duplicates.length} تكرار\n`);

if (duplicates.length === 0) {
  console.log('✅ لا توجد تكرارات! جميع المشاريع والمجتمعات في المكان الصحيح.\n');
  process.exit(0);
}

console.log('='.repeat(80));
console.log('📋 قائمة التكرارات:\n');

duplicates.forEach(dup => {
  console.log(`\n🔸 ${dup.developer.toUpperCase()} - ${dup.name}`);
  
  const projectPath = path.join(process.cwd(), 'public/data', dup.developer, 'projects', dup.name, 'index.json');
  const communityPath = path.join(process.cwd(), 'public/data', dup.developer, 'communities', dup.name, 'index.json');
  
  let decision = null;
  
  // Read both files to determine which is correct
  try {
    const projectData = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
    const communityData = JSON.parse(fs.readFileSync(communityPath, 'utf8'));
    
    const isProjectInProjects = isProjectType(projectData);
    const isProjectInCommunities = isProjectType(communityData);
    
    console.log(`   📁 في projects: ${isProjectInProjects === true ? '✅ مشروع' : isProjectInProjects === false ? '❌ مجتمع (خطأ)' : '❓ غير واضح'}`);
    console.log(`   📁 في communities: ${isProjectInCommunities === false ? '✅ مجتمع' : isProjectInCommunities === true ? '❌ مشروع (خطأ)' : '❓ غير واضح'}`);
    
    // Determine what to delete
    if (isProjectInProjects === true && isProjectInCommunities === false) {
      // Project in projects ✅, Community in communities ✅ - but duplicated
      console.log(`   ⚠️  كلاهما صحيح لكن مكرر - سيتم الحذف من projects`);
      decision = 'delete_project';
    } else if (isProjectInProjects === false && isProjectInCommunities === true) {
      // Community in projects ❌, Project in communities ❌ - both wrong
      console.log(`   ⚠️  كلاهما في مكان خاطئ - سيتم الحذف من projects`);
      decision = 'delete_project';
    } else if (isProjectInProjects === false && isProjectInCommunities === false) {
      // Both are communities - delete from projects
      console.log(`   ℹ️  كلاهما مجتمع - سيتم الحذف من projects (المجتمع في المكان الخاطئ)`);
      decision = 'delete_project';
    } else if (isProjectInProjects === true && isProjectInCommunities === true) {
      // Both are projects - keep in projects, delete from communities
      console.log(`   ℹ️  كلاهما مشروع - سيتم الحذف من communities (المشروع في المكان الخاطئ)`);
      decision = 'delete_community';
    } else {
      console.log(`   ❓ غير واضح - يحتاج إلى مراجعة يدوية`);
    }
    
    if (decision) {
      toDelete.push({
        developer: dup.developer,
        name: dup.name,
        deleteFrom: decision === 'delete_project' ? 'projects' : 'communities',
        path: decision === 'delete_project' ? projectPath : communityPath,
        folderPath: path.dirname(decision === 'delete_project' ? projectPath : communityPath)
      });
    }
    
  } catch (error) {
    console.log(`   ❌ خطأ في القراءة: ${error.message}`);
  }
});

console.log('\n\n' + '='.repeat(80));
console.log('🗑️  الملفات المقرر حذفها:\n');

toDelete.forEach(item => {
  console.log(`   ${item.developer}/${item.deleteFrom}/${item.name}/`);
});

console.log('\n' + '='.repeat(80));
console.log(`\n💡 سيتم حذف ${toDelete.length} مجلد\n`);

// Ask for confirmation
console.log('⚠️  هل تريد المتابعة بالحذف؟ (نعم/لا)\n');
console.log('   لتأكيد الحذف، قم بتشغيل:');
console.log('   node scripts/confirm_delete_duplicates.mjs\n');

// Save the delete list
fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'delete_list.json'),
  JSON.stringify(toDelete, null, 2)
);

console.log('✅ تم حفظ قائمة الحذف في: scripts/delete_list.json\n');

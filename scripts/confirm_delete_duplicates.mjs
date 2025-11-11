import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗑️  تأكيد حذف المجلدات المكررة\n');
console.log('='.repeat(80));

const deleteListPath = path.join(process.cwd(), 'scripts', 'delete_list.json');

if (!fs.existsSync(deleteListPath)) {
  console.log('❌ لم يتم العثور على قائمة الحذف!');
  console.log('   قم بتشغيل: node scripts/fix_projects_communities_mix.mjs أولاً\n');
  process.exit(1);
}

const toDelete = JSON.parse(fs.readFileSync(deleteListPath, 'utf8'));

console.log(`\n📋 المجلدات المراد حذفها: ${toDelete.length}\n`);

toDelete.forEach((item, index) => {
  console.log(`   ${index + 1}. ${item.developer}/${item.deleteFrom}/${item.name}/`);
});

console.log('\n' + '='.repeat(80));
console.log('⚠️  هل أنت متأكد من الحذف؟ سيتم الحذف الآن...\n');

let deleted = 0;
let failed = 0;

toDelete.forEach(item => {
  try {
    if (fs.existsSync(item.folderPath)) {
      // Delete the entire folder
      fs.rmSync(item.folderPath, { recursive: true, force: true });
      console.log(`   ✅ تم حذف: ${item.developer}/${item.deleteFrom}/${item.name}/`);
      deleted++;
    } else {
      console.log(`   ⚠️  غير موجود: ${item.developer}/${item.deleteFrom}/${item.name}/`);
    }
  } catch (error) {
    console.log(`   ❌ فشل حذف: ${item.developer}/${item.deleteFrom}/${item.name}/`);
    console.log(`      الخطأ: ${error.message}`);
    failed++;
  }
});

console.log('\n' + '='.repeat(80));
console.log(`\n✅ تم حذف ${deleted} مجلد`);
if (failed > 0) {
  console.log(`❌ فشل ${failed} مجلد`);
}

// Clean up the delete list
fs.unlinkSync(deleteListPath);
console.log('\n✅ تم حذف قائمة الحذف\n');

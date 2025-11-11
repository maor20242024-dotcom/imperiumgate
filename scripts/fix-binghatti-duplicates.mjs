#!/usr/bin/env node
// إصلاح المفاتيح المكررة في Binghatti
import fs from 'fs/promises';

const file = './public/data/binghatti/index.json';

async function fix() {
  console.log('🔧 إصلاح المفاتيح المكررة في Binghatti...\n');
  
  const data = JSON.parse(await fs.readFile(file, 'utf-8'));
  
  // الحصول على community slugs
  const communitySlugs = new Set(data.communities.map(c => c.slug));
  
  console.log(`📍 Communities (${communitySlugs.size}):`);
  communitySlugs.forEach(s => console.log(`   - ${s}`));
  
  // تصفية المشاريع التي slug الخاصة بها موجودة في communities
  const originalCount = data.projects.length;
  const filtered = data.projects.filter(p => !communitySlugs.has(p.slug));
  const removed = originalCount - filtered.length;
  
  console.log(`\n📦 Projects:`);
  console.log(`   قبل: ${originalCount}`);
  console.log(`   بعد: ${filtered.length}`);
  console.log(`   تم حذف: ${removed} مشروع مكرر\n`);
  
  if (removed > 0) {
    console.log('❌ المشاريع المحذوفة (كانت تتطابق مع communities):');
    data.projects.filter(p => communitySlugs.has(p.slug)).forEach(p => {
      console.log(`   - ${p.slug} (${p.name.ar})`);
    });
  }
  
  // تحديث البيانات
  data.projects = filtered;
  data.generatedAt = new Date().toISOString();
  
  // حفظ
  await fs.writeFile(file, JSON.stringify(data, null, 2));
  console.log(`\n✅ تم الحفظ في: ${file}`);
}

fix().catch(e => {
  console.error('❌ خطأ:', e.message);
  process.exit(1);
});

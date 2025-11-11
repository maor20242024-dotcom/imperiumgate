// ========================================
// مقارنة المشاريع المستخرجة مع الموجودة
// ========================================

import fs from 'fs/promises';
import path from 'path';
import { logProgress } from '../shared/utils.js';

const EXISTING_PROJECTS_DIR = '/workspaces/imperiumgate/public/data/damac/projects';
const EXTRACTED_PROJECTS_FILE = './damac/output/damac-all-projects-unique.json';

async function compareProjects() {
  logProgress('🔍 مقارنة المشاريع المستخرجة مع الموجودة', 'info');
  
  try {
    // 1. قراءة المشاريع المستخرجة
    logProgress('\n📂 قراءة المشاريع المستخرجة...', 'progress');
    const extractedData = JSON.parse(
      await fs.readFile(EXTRACTED_PROJECTS_FILE, 'utf-8')
    );
    const extractedSlugs = new Set(extractedData.map(p => p.slug));
    logProgress(`✓ تم تحميل ${extractedSlugs.size} مشروع مستخرج`, 'info');

    // 2. قراءة المشاريع الموجودة
    logProgress('\n📂 قراءة المشاريع الموجودة...', 'progress');
    const existingDirs = await fs.readdir(EXISTING_PROJECTS_DIR);
    const existingSlugs = new Set(existingDirs);
    logProgress(`✓ تم تحميل ${existingSlugs.size} مشروع موجود`, 'info');

    // 3. المقارنة
    logProgress('\n🔄 إجراء المقارنة...', 'progress');
    
    const newProjects = [];
    const existingProjects = [];
    const missingFromExtraction = [];

    // المشاريع الجديدة (موجودة في المستخرج وغير موجودة في الحالي)
    extractedData.forEach(project => {
      if (!existingSlugs.has(project.slug)) {
        newProjects.push(project);
      } else {
        existingProjects.push(project);
      }
    });

    // المشاريع الموجودة لكن لم تُستخرج
    existingDirs.forEach(slug => {
      if (!extractedSlugs.has(slug)) {
        missingFromExtraction.push(slug);
      }
    });

    // 4. النتائج
    const results = {
      summary: {
        total_extracted: extractedSlugs.size,
        total_existing: existingSlugs.size,
        new_projects: newProjects.length,
        already_existing: existingProjects.length,
        missing_from_extraction: missingFromExtraction.length
      },
      new_projects: newProjects.map(p => ({
        slug: p.slug,
        name_ar: p.name_ar,
        community: p.community_slug
      })),
      existing_projects: existingProjects.map(p => p.slug),
      missing_from_extraction: missingFromExtraction
    };

    // 5. حفظ التقرير
    await fs.writeFile(
      './damac/output/comparison-report.json',
      JSON.stringify(results, null, 2)
    );

    // 6. طباعة النتائج
    logProgress('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('📊 نتائج المقارنة', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    
    console.log('\n📈 الإحصائيات:');
    console.log(`   🆕 مشاريع جديدة: ${results.summary.new_projects}`);
    console.log(`   ✅ موجودة مسبقاً: ${results.summary.already_existing}`);
    console.log(`   ⚠️  مفقودة من الاستخراج: ${results.summary.missing_from_extraction}`);
    console.log(`   📦 إجمالي المستخرج: ${results.summary.total_extracted}`);
    console.log(`   💾 إجمالي الموجود: ${results.summary.total_existing}`);

    if (newProjects.length > 0) {
      console.log('\n\n🆕 المشاريع الجديدة التي تم اكتشافها:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      newProjects.forEach((p, i) => {
        console.log(`${i + 1}. ${p.name_ar}`);
        console.log(`   Slug: ${p.slug}`);
        console.log(`   Community: ${p.community_slug}`);
        console.log('');
      });
    }

    if (missingFromExtraction.length > 0) {
      console.log('\n⚠️  المشاريع الموجودة لكن لم تُستخرج:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      missingFromExtraction.forEach((slug, i) => {
        console.log(`${i + 1}. ${slug}`);
      });
      console.log('\n💡 هذه المشاريع قد تكون:');
      console.log('   - من مجتمعات أخرى (404)');
      console.log('   - مشاريع قديمة');
      console.log('   - تم إضافتها يدوياً');
    }

    logProgress('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ تم حفظ التقرير في: comparison-report.json', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');

  } catch (error) {
    logProgress(`❌ خطأ: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  }
}

compareProjects();

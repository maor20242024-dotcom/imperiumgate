// ========================================
// استخراج المجتمعات الناقصة + تنظيف التكرارات
// ========================================

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { 
  logProgress, 
  cleanText
} from '../shared/utils.js';

const BASE_URL = 'https://www.damacproperties.com/ar-ae';

// المجتمعات الناقصة (من public/data/damac ولم نستخرجها)
const MISSING_COMMUNITIES = [
  'akoya-oxygen',
  'aykon-city', 
  'business-bay',
  'damac-bay',
  'dubai-harbour',
  'dubai-marina',
  'dubai-maritime-city',
  'damac-hills' // المجتمع الذي فشل
];

async function extractMissingCommunities() {
  logProgress('🚀 استخراج المجتمعات الناقصة + تنظيف التكرارات', 'info');
  
  let browser;
  try {
    // قراءة البيانات الحالية
    logProgress('\n📂 قراءة البيانات الحالية...', 'progress');
    const currentData = JSON.parse(
      await fs.readFile('./damac/output/all-projects-from-communities.json', 'utf-8')
    );
    
    logProgress(`✓ تم تحميل ${currentData.length} مشروع (مع التكرارات)`, 'info');

    // إطلاق المتصفح
    logProgress('\n🌐 إطلاق Chromium...', 'progress');
    
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
        '--window-size=1920,1080',
        '--lang=ar-AE,ar'
      ],
      ignoreHTTPSErrors: true,
      defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();

    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
      window.chrome = { runtime: {} };
    });

    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const newProjects = [];

    // محاولة استخراج كل مجتمع ناقص
    for (let i = 0; i < MISSING_COMMUNITIES.length; i++) {
      const communitySlug = MISSING_COMMUNITIES[i];
      const communityUrl = `${BASE_URL}/communities/${communitySlug}/`;
      
      logProgress(`\n📍 [${i + 1}/${MISSING_COMMUNITIES.length}] ${communitySlug}`, 'progress');
      logProgress(`🔗 ${communityUrl}`, 'info');
      
      try {
        const response = await page.goto(communityUrl, { 
          waitUntil: 'domcontentloaded',
          timeout: 90000 
        });

        if (!response || response.status() !== 200) {
          logProgress(`⚠️  رمز الحالة: ${response?.status()} - تخطي`, 'warning');
          continue;
        }

        logProgress(`✓ رمز الحالة: 200`, 'success');

        // انتظار وتحميل
        await new Promise(resolve => setTimeout(resolve, 10000));

        // قبول cookies
        try {
          const cookieButton = await page.$('button[class*="allow"], button[class*="Accept"]');
          if (cookieButton) {
            await cookieButton.click();
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } catch (e) {}

        // التمرير
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 150;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if(totalHeight >= scrollHeight){
                clearInterval(timer);
                setTimeout(resolve, 3000);
              }
            }, 200);
          });
        });

        await new Promise(resolve => setTimeout(resolve, 5000));

        // لقطة شاشة
        await page.screenshot({ 
          path: `./damac/output/community-${communitySlug}.png`,
          fullPage: true 
        });

        // استخراج المشاريع
        const projects = await page.evaluate(() => {
          const items = [];
          const projectLinks = Array.from(document.querySelectorAll('a[href*="/projects/"]'));
          
          projectLinks.forEach(link => {
            const href = link.href;
            const text = link.textContent?.trim() || '';
            const img = link.querySelector('img');
            const imgSrc = img ? (img.src || img.getAttribute('data-src') || '') : '';
            
            if (href && text && text.length > 2 && text.length < 100) {
              items.push({ name: text, url: href, image: imgSrc });
            }
          });

          const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"], article'));
          cards.forEach(card => {
            const link = card.querySelector('a[href*="/projects/"]');
            if (link) {
              const title = card.querySelector('h1, h2, h3, h4, h5, h6');
              const img = card.querySelector('img');
              
              items.push({
                name: title?.textContent?.trim() || link.textContent?.trim() || '',
                url: link.href,
                image: img ? (img.src || img.getAttribute('data-src') || '') : ''
              });
            }
          });
          
          return items;
        });

        // تنظيف
        const uniqueProjects = new Map();
        projects.forEach(proj => {
          if (proj.name && proj.url) {
            let slug = proj.url.split('/projects/')[1];
            if (!slug) return;
            
            slug = slug.split('/')[0].replace(/\?.*/, '').replace(/#.*/, '');
            
            if (slug && slug.length > 0 && 
                !slug.includes('for-sale') && 
                !slug.includes('properties') &&
                !uniqueProjects.has(slug)) {
              
              uniqueProjects.set(slug, {
                name_ar: cleanText(proj.name),
                name_en: cleanText(proj.name),
                slug: slug,
                url: `${BASE_URL}/projects/${slug}/`,
                image: proj.image || '',
                community_slug: communitySlug,
                developer: 'damac',
                type: 'project',
                property_type: 'apartment',
                status: 'under-construction'
              });
            }
          }
        });

        const projectsList = Array.from(uniqueProjects.values());
        newProjects.push(...projectsList);
        
        logProgress(`✅ ${projectsList.length} مشروع مستخرج`, 'success');
        
        if (projectsList.length > 0) {
          console.log('   المشاريع:');
          projectsList.forEach((p, idx) => {
            console.log(`   ${idx + 1}. ${p.name_ar} (${p.slug})`);
          });
        }

        // انتظار بين المجتمعات
        if (i < MISSING_COMMUNITIES.length - 1) {
          logProgress('\n⏳ انتظار 15 ثانية...', 'progress');
          await new Promise(resolve => setTimeout(resolve, 15000));
        }

      } catch (error) {
        logProgress(`❌ خطأ: ${error.message}`, 'error');
      }
    }

    await browser.close();
    logProgress('\n🔒 تم إغلاق المتصفح', 'info');

    // ===========================
    // تنظيف التكرارات
    // ===========================
    logProgress('\n🧹 تنظيف التكرارات...', 'progress');
    
    // دمج المشاريع الحالية والجديدة
    const allProjects = [...currentData, ...newProjects];
    logProgress(`📦 إجمالي المشاريع قبل التنظيف: ${allProjects.length}`, 'info');

    // إزالة التكرارات بناءً على slug
    const uniqueMap = new Map();
    allProjects.forEach(project => {
      if (project.slug && !uniqueMap.has(project.slug)) {
        uniqueMap.set(project.slug, project);
      }
    });

    const uniqueProjects = Array.from(uniqueMap.values());
    logProgress(`✅ المشاريع الفريدة بعد التنظيف: ${uniqueProjects.length}`, 'success');

    // ترتيب حسب الاسم
    uniqueProjects.sort((a, b) => a.name_ar.localeCompare(b.name_ar, 'ar'));

    // حفظ النتائج
    logProgress('\n💾 حفظ النتائج النهائية...', 'progress');
    
    const outputDir = './damac/output';
    
    await fs.writeFile(
      path.join(outputDir, 'damac-all-projects-unique.json'),
      JSON.stringify(uniqueProjects, null, 2)
    );

    // إحصائيات تفصيلية
    const byCommunity = {};
    uniqueProjects.forEach(p => {
      const comm = p.community_slug || 'unknown';
      if (!byCommunity[comm]) byCommunity[comm] = [];
      byCommunity[comm].push(p);
    });

    await fs.writeFile(
      path.join(outputDir, 'damac-projects-by-community.json'),
      JSON.stringify(byCommunity, null, 2)
    );

    // تقرير نهائي
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total_unique_projects: uniqueProjects.length,
        projects_before_cleanup: allProjects.length,
        duplicates_removed: allProjects.length - uniqueProjects.length,
        new_projects_added: newProjects.length,
        communities_count: Object.keys(byCommunity).length
      },
      by_community: Object.keys(byCommunity).map(comm => ({
        community: comm,
        count: byCommunity[comm].length
      })).sort((a, b) => b.count - a.count)
    };

    await fs.writeFile(
      path.join(outputDir, 'final-report.json'),
      JSON.stringify(report, null, 2)
    );

    // طباعة النتائج
    logProgress('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ اكتمل الاستخراج والتنظيف!', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('\n📊 الإحصائيات النهائية:', 'info');
    logProgress(`   🏗️  إجمالي المشاريع الفريدة: ${report.summary.total_unique_projects}`, 'info');
    logProgress(`   🗑️  تكرارات تم إزالتها: ${report.summary.duplicates_removed}`, 'info');
    logProgress(`   ➕ مشاريع جديدة: ${report.summary.new_projects_added}`, 'info');
    logProgress(`   🏘️  عدد المجتمعات: ${report.summary.communities_count}`, 'info');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');

    console.log('\n📋 المشاريع حسب المجتمع:\n');
    report.by_community.forEach((item, i) => {
      console.log(`   ${i + 1}. ${item.community}: ${item.count} مشروع`);
    });
    console.log('\n');

  } catch (error) {
    logProgress(`❌ خطأ حرج: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

extractMissingCommunities();

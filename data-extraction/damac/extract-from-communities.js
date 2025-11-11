// ========================================
// استخراج المشاريع من داخل كل مجتمع DAMAC
// ========================================

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { 
  logProgress, 
  randomDelay,
  cleanImages,
  removeDuplicates,
  cleanText
} from '../shared/utils.js';

const BASE_URL = 'https://www.damacproperties.com/ar-ae';

// المجتمعات المستخرجة
const COMMUNITIES = [
  { name: 'داماك آيلاندز', slug: 'damac-islands-community' },
  { name: 'أزور 2', slug: 'damac-riverside' },
  { name: 'إبيزا', slug: 'damac-lagoons' },
  { name: 'غولف جيت 2', slug: 'damac-hills-community' },
  { name: 'داماك صن سيتي', slug: 'damac-sun-city' },
  { name: 'داماك هيلز 2', slug: 'damac-hills-2' },
  { name: 'داماك هيلز', slug: 'damac-hills' }
];

async function extractProjectsFromCommunity(page, community) {
  const communityUrl = `${BASE_URL}/communities/${community.slug}/`;
  
  logProgress(`\n${'='.repeat(60)}`, 'info');
  logProgress(`🏘️  معالجة: ${community.name}`, 'info');
  logProgress(`🔗 ${communityUrl}`, 'info');
  logProgress(`${'='.repeat(60)}`, 'info');
  
  try {
    // الانتقال لصفحة المجتمع
    const response = await page.goto(communityUrl, { 
      waitUntil: 'domcontentloaded',
      timeout: 90000 
    });

    if (!response || response.status() !== 200) {
      logProgress(`⚠️  رمز الحالة: ${response?.status()} - تخطي`, 'warning');
      return { community: community.slug, projects: [], error: `Status ${response?.status()}` };
    }

    logProgress(`✓ رمز الحالة: 200`, 'success');

    // انتظار التحميل
    logProgress('⏳ انتظار 10 ثوانٍ لتحميل الصفحة...', 'progress');
    await new Promise(resolve => setTimeout(resolve, 10000));

    // محاولة قبول Cookies
    try {
      const cookieButton = await page.$('button[class*="allow"], button[class*="Accept"]');
      if (cookieButton) {
        await cookieButton.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        logProgress('✓ تم قبول Cookies', 'success');
      }
    } catch (e) {
      // تجاهل
    }

    // التمرير لتحميل المحتوى
    logProgress('📜 التمرير في الصفحة...', 'progress');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 150;
        const delay = 200;
        
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if(totalHeight >= scrollHeight){
            clearInterval(timer);
            setTimeout(resolve, 3000);
          }
        }, delay);
      });
    });

    await new Promise(resolve => setTimeout(resolve, 5000));

    // أخذ لقطة شاشة
    const screenshotPath = `./damac/output/community-${community.slug}.png`;
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: true 
    });
    logProgress(`✓ حفظ لقطة: ${screenshotPath}`, 'success');

    // استخراج المشاريع
    const projects = await page.evaluate(() => {
      const items = [];
      
      // البحث عن روابط المشاريع
      const projectLinks = Array.from(document.querySelectorAll('a[href*="/projects/"]'));
      
      projectLinks.forEach(link => {
        const href = link.href;
        const text = link.textContent?.trim() || 
                    link.getAttribute('aria-label') || 
                    link.getAttribute('title') || '';
        
        const img = link.querySelector('img');
        const imgSrc = img ? (img.src || img.getAttribute('data-src') || '') : '';
        
        if (href && text && text.length > 2 && text.length < 100) {
          items.push({
            name: text,
            url: href,
            image: imgSrc
          });
        }
      });

      // البحث في البطاقات
      const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"], article'));
      cards.forEach(card => {
        const link = card.querySelector('a[href*="/projects/"]');
        if (link) {
          const title = card.querySelector('h1, h2, h3, h4, h5, h6, [class*="title"]');
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

    logProgress(`📦 استخرجنا ${projects.length} عنصر`, 'info');

    // تنظيف البيانات
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
            community_slug: community.slug,
            community_name: community.name,
            developer: 'damac',
            type: 'project',
            property_type: 'apartment',
            status: 'under-construction'
          });
        }
      }
    });

    const projectsList = Array.from(uniqueProjects.values());
    logProgress(`✅ ${projectsList.length} مشروع فريد بعد التنظيف`, 'success');

    // عرض المشاريع
    if (projectsList.length > 0) {
      console.log(`\n   المشاريع في ${community.name}:`);
      projectsList.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.name_ar} (${p.slug})`);
      });
    } else {
      logProgress('⚠️  لم يتم العثور على مشاريع', 'warning');
    }

    return {
      community: community.slug,
      community_name: community.name,
      projects: projectsList,
      count: projectsList.length
    };

  } catch (error) {
    logProgress(`❌ خطأ: ${error.message}`, 'error');
    return {
      community: community.slug,
      community_name: community.name,
      projects: [],
      count: 0,
      error: error.message
    };
  }
}

async function extractAllProjects() {
  logProgress('🚀 بدء استخراج المشاريع من جميع المجتمعات...', 'info');
  logProgress(`📊 عدد المجتمعات: ${COMMUNITIES.length}`, 'info');
  
  let browser;
  try {
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

    // إخفاء automation
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
      Object.defineProperty(navigator, 'languages', { get: () => ['ar-AE', 'ar', 'en-US', 'en'] });
      window.chrome = { runtime: {} };
    });

    // Headers
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const results = {
      communities: [],
      all_projects: [],
      timestamp: new Date().toISOString(),
      summary: {
        total_communities: COMMUNITIES.length,
        processed: 0,
        total_projects: 0,
        errors: 0
      }
    };

    // معالجة كل مجتمع
    for (let i = 0; i < COMMUNITIES.length; i++) {
      const community = COMMUNITIES[i];
      
      logProgress(`\n📍 [${i + 1}/${COMMUNITIES.length}] معالجة المجتمع...`, 'progress');
      
      const result = await extractProjectsFromCommunity(page, community);
      results.communities.push(result);
      results.all_projects.push(...result.projects);
      
      results.summary.processed++;
      results.summary.total_projects += result.count;
      if (result.error) results.summary.errors++;

      // انتظار بين المجتمعات
      if (i < COMMUNITIES.length - 1) {
        const waitTime = 15;
        logProgress(`\n⏳ انتظار ${waitTime} ثانية قبل المجتمع التالي...`, 'progress');
        await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
      }
    }

    // حفظ النتائج
    logProgress('\n💾 حفظ النتائج...', 'progress');
    
    const outputDir = './damac/output';
    
    await fs.writeFile(
      path.join(outputDir, 'communities-with-projects.json'),
      JSON.stringify(results.communities, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'all-projects-from-communities.json'),
      JSON.stringify(results.all_projects, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'extraction-complete-results.json'),
      JSON.stringify(results, null, 2)
    );

    // إحصائيات نهائية
    logProgress('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ اكتمل استخراج جميع المشاريع!', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('\n📊 الإحصائيات النهائية:', 'info');
    logProgress(`   🏘️  المجتمعات المعالجة: ${results.summary.processed}/${results.summary.total_communities}`, 'info');
    logProgress(`   🏗️  إجمالي المشاريع: ${results.summary.total_projects}`, 'info');
    logProgress(`   ❌ أخطاء: ${results.summary.errors}`, results.summary.errors > 0 ? 'warning' : 'info');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'success');

    // عرض ملخص لكل مجتمع
    console.log('📋 ملخص المجتمعات:\n');
    results.communities.forEach((comm, i) => {
      const status = comm.error ? '❌' : comm.count > 0 ? '✅' : '⚠️';
      console.log(`   ${status} ${i + 1}. ${comm.community_name}: ${comm.count} مشروع`);
    });
    console.log('\n');

  } catch (error) {
    logProgress(`❌ خطأ حرج: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      logProgress('🔒 تم إغلاق المتصفح', 'info');
    }
  }
}

// تشغيل الاستخراج
extractAllProjects();

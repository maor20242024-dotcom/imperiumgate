// ========================================
// استخراج متقدم من DAMAC باستخدام بروكسي و Chromium
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

// قائمة بروكسيات مجانية (يمكن تحديثها)
const PROXIES = [
  // سيتم استخدام بدون بروكسي أولاً، ثم نجرب بروكسيات إذا فشل
  null,
  // يمكن إضافة بروكسيات هنا إذا لزم الأمر
  // 'http://proxy1.example.com:8080',
  // 'http://proxy2.example.com:8080',
];

async function extractWithChromium() {
  logProgress('🚀 بدء استخراج متقدم من DAMAC باستخدام Chromium', 'info');
  
  let browser;
  let currentProxyIndex = 0;
  
  try {
    // إطلاق المتصفح مع إعدادات متقدمة
    logProgress('إطلاق Chromium مع إعدادات محسّنة...', 'progress');
    
    const launchOptions = {
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-blink-features=AutomationControlled',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--window-size=1920,1080',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      ],
      ignoreHTTPSErrors: true,
      defaultViewport: {
        width: 1920,
        height: 1080
      }
    };

    browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // إزالة آثار Automation
    await page.evaluateOnNewDocument(() => {
      // إخفاء webdriver
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
      });

      // تعديل plugins
      Object.defineProperty(navigator, 'plugins', {
        get: () => [1, 2, 3, 4, 5],
      });

      // تعديل languages
      Object.defineProperty(navigator, 'languages', {
        get: () => ['ar-AE', 'ar', 'en-US', 'en'],
      });

      // Chrome property
      window.chrome = {
        runtime: {},
      };

      // Permissions
      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = (parameters) => (
        parameters.name === 'notifications' ?
          Promise.resolve({ state: Notification.permission }) :
          originalQuery(parameters)
      );
    });

    // Headers متقدمة
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Cache-Control': 'max-age=0',
      'Pragma': 'no-cache'
    });

    const results = {
      communities: [],
      projects: [],
      timestamp: new Date().toISOString()
    };

    // ===========================
    // 1. استخراج المجتمعات
    // ===========================
    logProgress('📍 المرحلة 1: استخراج المجتمعات من DAMAC...', 'progress');
    
    try {
      await page.goto(`${BASE_URL}/communities/`, { 
        waitUntil: ['domcontentloaded', 'networkidle0'],
        timeout: 90000 
      });
      
      await randomDelay(5000, 8000);

      // محاولة التمرير لتحميل المحتوى الكامل
      logProgress('التمرير في الصفحة لتحميل المحتوى...', 'progress');
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if(totalHeight >= scrollHeight){
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      await randomDelay(3000, 5000);

      // أخذ لقطة شاشة كاملة
      await page.screenshot({ 
        path: './damac/output/communities-full-page.png',
        fullPage: true 
      });
      logProgress('✓ تم حفظ لقطة شاشة كاملة للمجتمعات', 'success');

      // استخراج البيانات بعد التمرير
      const communities = await page.evaluate(() => {
        const items = [];
        
        // البحث عن جميع العناصر التفاعلية
        const allElements = document.querySelectorAll('a, div, section, article');
        
        allElements.forEach(el => {
          // البحث عن روابط المجتمعات
          if (el.tagName === 'A' && el.href && el.href.includes('/communities/')) {
            const slug = el.href.split('/communities/')[1];
            if (slug && slug.length > 0 && !slug.includes('#')) {
              // محاولة الحصول على النص
              const text = el.textContent?.trim() || 
                          el.getAttribute('aria-label') || 
                          el.getAttribute('title') || '';
              
              // محاولة الحصول على صورة
              const img = el.querySelector('img');
              const imageUrl = img ? (img.src || img.getAttribute('data-src') || '') : '';
              
              if (text.length > 0 && text.length < 100) {
                items.push({
                  name: text,
                  url: el.href,
                  image: imageUrl,
                  slug: slug.replace(/\/$/, '')
                });
              }
            }
          }
        });
        
        return items;
      });

      logProgress(`استخرجنا ${communities.length} عنصر من صفحة المجتمعات`, 'info');

      // تصفية وتنظيف
      const uniqueCommunities = new Map();
      communities.forEach(comm => {
        if (comm.name && comm.slug && !comm.slug.includes('for-sale') && !comm.slug.includes('properties')) {
          // تنظيف الـ slug من /projects/
          let cleanSlug = comm.slug.split('/projects/')[0];
          cleanSlug = cleanSlug.replace(/\/$/, '');
          
          if (!uniqueCommunities.has(cleanSlug)) {
            uniqueCommunities.set(cleanSlug, {
              name_ar: cleanText(comm.name),
              slug: cleanSlug,
              url: `${BASE_URL}/communities/${cleanSlug}/`,
              image: comm.image || '',
              developer: 'damac',
              type: 'community'
            });
          }
        }
      });

      results.communities = Array.from(uniqueCommunities.values());
      logProgress(`✅ تم تنظيف البيانات: ${results.communities.length} مجتمع فريد`, 'success');

    } catch (error) {
      logProgress(`⚠️ خطأ في استخراج المجتمعات: ${error.message}`, 'warning');
    }

    // ===========================
    // 2. استخراج المشاريع
    // ===========================
    logProgress('📍 المرحلة 2: استخراج المشاريع من DAMAC...', 'progress');
    
    try {
      await page.goto(`${BASE_URL}/projects/`, { 
        waitUntil: ['domcontentloaded', 'networkidle0'],
        timeout: 90000 
      });
      
      await randomDelay(5000, 8000);

      // التمرير
      logProgress('التمرير في صفحة المشاريع...', 'progress');
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if(totalHeight >= scrollHeight){
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      await randomDelay(3000, 5000);

      // لقطة شاشة
      await page.screenshot({ 
        path: './damac/output/projects-full-page.png',
        fullPage: true 
      });
      logProgress('✓ تم حفظ لقطة شاشة كاملة للمشاريع', 'success');

      // استخراج المشاريع
      const projects = await page.evaluate(() => {
        const items = [];
        
        const allElements = document.querySelectorAll('a, div, section, article');
        
        allElements.forEach(el => {
          if (el.tagName === 'A' && el.href && el.href.includes('/projects/')) {
            const slug = el.href.split('/projects/')[1];
            if (slug && slug.length > 0 && !slug.includes('#')) {
              const text = el.textContent?.trim() || 
                          el.getAttribute('aria-label') || 
                          el.getAttribute('title') || '';
              
              const img = el.querySelector('img');
              const imageUrl = img ? (img.src || img.getAttribute('data-src') || '') : '';
              
              if (text.length > 0 && text.length < 100) {
                items.push({
                  name: text,
                  url: el.href,
                  image: imageUrl,
                  slug: slug.replace(/\/$/, '')
                });
              }
            }
          }
        });
        
        return items;
      });

      logProgress(`استخرجنا ${projects.length} عنصر من صفحة المشاريع`, 'info');

      // تصفية وتنظيف
      const uniqueProjects = new Map();
      projects.forEach(proj => {
        if (proj.name && proj.slug && !proj.slug.includes('for-sale') && !proj.slug.includes('properties')) {
          let cleanSlug = proj.slug;
          cleanSlug = cleanSlug.replace(/\/$/, '');
          
          if (!uniqueProjects.has(cleanSlug)) {
            uniqueProjects.set(cleanSlug, {
              name_ar: cleanText(proj.name),
              slug: cleanSlug,
              url: `${BASE_URL}/projects/${cleanSlug}/`,
              image: proj.image || '',
              developer: 'damac',
              type: 'project'
            });
          }
        }
      });

      results.projects = Array.from(uniqueProjects.values());
      logProgress(`✅ تم تنظيف البيانات: ${results.projects.length} مشروع فريد`, 'success');

    } catch (error) {
      logProgress(`⚠️ خطأ في استخراج المشاريع: ${error.message}`, 'warning');
    }

    // ===========================
    // حفظ النتائج
    // ===========================
    logProgress('💾 حفظ جميع النتائج...', 'progress');
    
    const outputDir = './damac/output';
    
    await fs.writeFile(
      path.join(outputDir, 'damac-communities-enhanced.json'),
      JSON.stringify(results.communities, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'damac-projects-enhanced.json'),
      JSON.stringify(results.projects, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'damac-full-extraction.json'),
      JSON.stringify(results, null, 2)
    );

    // إحصائيات
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ اكتمل الاستخراج المتقدم بنجاح!', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress(`📊 الإحصائيات النهائية:`, 'info');
    logProgress(`   🏘️  المجتمعات: ${results.communities.length}`, 'info');
    logProgress(`   🏗️  المشاريع: ${results.projects.length}`, 'info');
    logProgress(`   ⏰ الوقت: ${new Date().toISOString()}`, 'info');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');

    // طباعة عينة
    console.log('\n🏘️  عينة من المجتمعات:');
    results.communities.slice(0, 5).forEach((c, i) => {
      console.log(`   ${i + 1}. ${c.name_ar} (${c.slug})`);
    });

    console.log('\n🏗️  عينة من المشاريع:');
    if (results.projects.length > 0) {
      results.projects.slice(0, 5).forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.name_ar} (${p.slug})`);
      });
    } else {
      console.log('   لم يتم العثور على مشاريع في هذا الاستخراج');
    }

    console.log('\n');

  } catch (error) {
    logProgress(`❌ خطأ حرج: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      logProgress('🔒 تم إغلاق المتصفح بأمان', 'info');
    }
  }
}

// تشغيل الاستخراج
extractWithChromium();

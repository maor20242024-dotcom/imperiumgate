// ========================================
// استخراج محسّن من DAMAC مع انتظار صحيح
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

async function extractOptimized() {
  logProgress('🚀 بدء استخراج محسّن من DAMAC مع انتظار كافٍ...', 'info');
  
  let browser;
  try {
    // إطلاق المتصفح بإعدادات محسّنة
    logProgress('إطلاق Chromium...', 'progress');
    
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
        '--disable-features=IsolateOrigins,site-per-process',
        '--window-size=1920,1080',
        '--lang=ar-AE,ar',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      ],
      ignoreHTTPSErrors: true,
      defaultViewport: { width: 1920, height: 1080 }
    });

    const page = await browser.newPage();

    // إخفاء webdriver
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
      Object.defineProperty(navigator, 'languages', { get: () => ['ar-AE', 'ar', 'en-US', 'en'] });
      window.chrome = { runtime: {} };
      
      // Override permissions
      const originalQuery = window.navigator.permissions.query;
      window.navigator.permissions.query = (parameters) => (
        parameters.name === 'notifications' ?
          Promise.resolve({ state: Notification.permission }) :
          originalQuery(parameters)
      );
    });

    // Headers محسّنة
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
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
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    });

    const results = {
      communities: [],
      projects: [],
      timestamp: new Date().toISOString()
    };

    // ===========================
    // المرحلة 1: استخراج المجتمعات
    // ===========================
    logProgress('📍 المرحلة 1/2: استخراج المجتمعات...', 'progress');
    
    try {
      logProgress('الانتقال إلى صفحة المجتمعات...', 'progress');
      const commResponse = await page.goto(`${BASE_URL}/communities/`, { 
        waitUntil: 'domcontentloaded',
        timeout: 90000 
      });

      logProgress(`رمز الحالة: ${commResponse?.status()}`, 'info');

      // الانتظار الأولي
      logProgress('الانتظار 10 ثوانٍ لتحميل الصفحة الأساسية...', 'progress');
      await new Promise(resolve => setTimeout(resolve, 10000));

      // محاولة قبول ملفات تعريف الارتباط (Cookies)
      try {
        const cookieButtons = [
          'button:has-text("السماح للكل")',
          'button:has-text("Allow all")',
          'button[class*="allow"]',
          'button[class*="Accept"]',
          '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
        ];

        for (const selector of cookieButtons) {
          try {
            const button = await page.$(selector);
            if (button) {
              await button.click();
              logProgress('✓ تم قبول ملفات تعريف الارتباط', 'success');
              await new Promise(resolve => setTimeout(resolve, 2000));
              break;
            }
          } catch (e) {
            // تجاهل الخطأ والمتابعة
          }
        }
      } catch (error) {
        logProgress('لم يتم العثور على نافذة Cookies', 'info');
      }

      // انتظار تحميل البطاقات
      logProgress('انتظار تحميل بطاقات المجتمعات...', 'progress');
      try {
        await page.waitForSelector('a[href*="/communities/"]', { 
          timeout: 20000,
          visible: true 
        });
        logProgress('✓ تم تحميل البطاقات', 'success');
      } catch (e) {
        logProgress('⚠️ لم يتم العثور على بطاقات بالطريقة العادية، سنحاول التمرير', 'warning');
      }

      // التمرير البطيء لتحميل كل المحتوى
      logProgress('التمرير في الصفحة لتحميل جميع البطاقات...', 'progress');
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 150;
          const delay = 200; // أبطأ من السابق
          
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if(totalHeight >= scrollHeight){
              clearInterval(timer);
              // انتظار إضافي بعد نهاية التمرير
              setTimeout(resolve, 3000);
            }
          }, delay);
        });
      });

      logProgress('انتظار 5 ثوانٍ إضافية بعد التمرير...', 'progress');
      await new Promise(resolve => setTimeout(resolve, 5000));

      // لقطة شاشة كاملة
      await page.screenshot({ 
        path: './damac/output/communities-optimized.png',
        fullPage: true 
      });
      logProgress('✓ تم حفظ لقطة شاشة المجتمعات', 'success');

      // استخراج البيانات
      const communities = await page.evaluate(() => {
        const items = [];
        
        // محاولة 1: روابط مباشرة
        const links = Array.from(document.querySelectorAll('a[href*="/communities/"]'));
        links.forEach(link => {
          const href = link.href;
          const text = link.textContent?.trim() || 
                      link.getAttribute('aria-label') || 
                      link.getAttribute('title') || '';
          
          // الحصول على الصورة
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
        
        // محاولة 2: البطاقات
        const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"], article, section[class*="project"]'));
        cards.forEach(card => {
          const link = card.querySelector('a[href*="/communities/"]');
          if (link) {
            const title = card.querySelector('h1, h2, h3, h4, h5, h6, [class*="title"], [class*="Title"]');
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

      logProgress(`استخرجنا ${communities.length} عنصر من صفحة المجتمعات`, 'info');

      // تنظيف البيانات
      const uniqueCommunities = new Map();
      communities.forEach(comm => {
        if (comm.name && comm.url) {
          let slug = comm.url.split('/communities/')[1];
          if (!slug) return;
          
          // تنظيف الـ slug
          slug = slug.split('/')[0].replace(/\?.*/, '').replace(/#.*/, '');
          
          if (slug && slug.length > 0 && 
              !slug.includes('for-sale') && 
              !slug.includes('properties') &&
              !slug.includes('villas') &&
              !uniqueCommunities.has(slug)) {
            
            uniqueCommunities.set(slug, {
              name_ar: cleanText(comm.name),
              name_en: cleanText(comm.name), // سيتم الترجمة لاحقاً
              slug: slug,
              url: `${BASE_URL}/communities/${slug}/`,
              image: comm.image || '',
              developer: 'damac',
              type: 'community',
              status: 'under-construction'
            });
          }
        }
      });

      results.communities = Array.from(uniqueCommunities.values());
      logProgress(`✅ تم تنظيف البيانات: ${results.communities.length} مجتمع فريد`, 'success');

    } catch (error) {
      logProgress(`⚠️ خطأ في استخراج المجتمعات: ${error.message}`, 'warning');
    }

    // انتظار بين الطلبات
    logProgress('⏳ انتظار 15 ثانية قبل الانتقال للمشاريع...', 'progress');
    await new Promise(resolve => setTimeout(resolve, 15000));

    // ===========================
    // المرحلة 2: استخراج المشاريع
    // ===========================
    logProgress('📍 المرحلة 2/2: استخراج المشاريع...', 'progress');
    
    try {
      logProgress('الانتقال إلى صفحة المشاريع...', 'progress');
      const projResponse = await page.goto(`${BASE_URL}/projects/`, { 
        waitUntil: 'domcontentloaded',
        timeout: 90000 
      });

      logProgress(`رمز الحالة: ${projResponse?.status()}`, 'info');

      // الانتظار الأولي
      logProgress('الانتظار 10 ثوانٍ لتحميل الصفحة الأساسية...', 'progress');
      await new Promise(resolve => setTimeout(resolve, 10000));

      // انتظار تحميل البطاقات
      logProgress('انتظار تحميل بطاقات المشاريع...', 'progress');
      try {
        await page.waitForSelector('a[href*="/projects/"]', { 
          timeout: 20000,
          visible: true 
        });
        logProgress('✓ تم تحميل البطاقات', 'success');
      } catch (e) {
        logProgress('⚠️ لم يتم العثور على بطاقات، سنحاول التمرير', 'warning');
      }

      // التمرير البطيء
      logProgress('التمرير في صفحة المشاريع...', 'progress');
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

      logProgress('انتظار 5 ثوانٍ إضافية...', 'progress');
      await new Promise(resolve => setTimeout(resolve, 5000));

      // لقطة شاشة
      await page.screenshot({ 
        path: './damac/output/projects-optimized.png',
        fullPage: true 
      });
      logProgress('✓ تم حفظ لقطة شاشة المشاريع', 'success');

      // استخراج المشاريع
      const projects = await page.evaluate(() => {
        const items = [];
        
        const links = Array.from(document.querySelectorAll('a[href*="/projects/"]'));
        links.forEach(link => {
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
        
        const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"], article, section[class*="project"]'));
        cards.forEach(card => {
          const link = card.querySelector('a[href*="/projects/"]');
          if (link) {
            const title = card.querySelector('h1, h2, h3, h4, h5, h6, [class*="title"], [class*="Title"]');
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

      logProgress(`استخرجنا ${projects.length} عنصر من صفحة المشاريع`, 'info');

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
              developer: 'damac',
              type: 'project',
              property_type: 'apartment',
              status: 'under-construction'
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
      path.join(outputDir, 'damac-communities-final.json'),
      JSON.stringify(results.communities, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'damac-projects-final.json'),
      JSON.stringify(results.projects, null, 2)
    );
    
    await fs.writeFile(
      path.join(outputDir, 'damac-complete-extraction.json'),
      JSON.stringify(results, null, 2)
    );

    // إحصائيات
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ اكتمل الاستخراج المحسّن بنجاح!', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress(`📊 الإحصائيات النهائية:`, 'info');
    logProgress(`   🏘️  المجتمعات: ${results.communities.length}`, 'info');
    logProgress(`   🏗️  المشاريع: ${results.projects.length}`, 'info');
    logProgress(`   📷 لقطات الشاشة: 2`, 'info');
    logProgress(`   ⏰ ${new Date().toISOString()}`, 'info');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');

    // طباعة العينات
    if (results.communities.length > 0) {
      console.log('\n🏘️  المجتمعات المستخرجة:');
      results.communities.forEach((c, i) => {
        console.log(`   ${i + 1}. ${c.name_ar} (${c.slug})`);
      });
    }

    if (results.projects.length > 0) {
      console.log('\n🏗️  المشاريع المستخرجة:');
      results.projects.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.name_ar} (${p.slug})`);
      });
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
extractOptimized();

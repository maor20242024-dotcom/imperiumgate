// ========================================
// استخراج عينة من بيانات DAMAC
// ========================================

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { 
  logProgress, 
  randomDelay, 
  cleanImages, 
  removeDuplicates,
  normalizePrice,
  extractSlugFromUrl,
  cleanText 
} from '../shared/utils.js';

const BASE_URL = 'https://www.damacproperties.com/ar-ae';

async function extractSample() {
  logProgress('بدء استخراج عينة من بيانات DAMAC...', 'info');
  
  let browser;
  try {
    // إطلاق المتصفح
    logProgress('إطلاق المتصفح...', 'progress');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });

    const page = await browser.newPage();
    
    // تعيين User Agent كامل ومحدث
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );
    
    // إعداد headers إضافية
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Cache-Control': 'max-age=0'
    });
    
    await page.setViewport({ width: 1920, height: 1080 });

    const results = {
      communities: [],
      projects: [],
      units: []
    };

    // ===========================
    // استخراج 2 مجتمع
    // ===========================
    logProgress('استخراج المجتمعات...', 'progress');
    await page.goto(`${BASE_URL}/communities/`, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });
    await randomDelay(3000, 5000);

    // الانتظار حتى تحميل البطاقات
    await page.waitForSelector('a[href*="/communities/"]', { timeout: 30000 });

    const communityLinks = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('a[href*="/communities/"]'));
      const uniqueLinks = new Set();
      
      cards.forEach(card => {
        const href = card.href;
        const pathParts = href.split('/communities/');
        if (pathParts.length > 1 && pathParts[1]) {
          const slug = pathParts[1].replace(/\/$/, '');
          if (slug && slug !== '#' && !slug.includes('?')) {
            uniqueLinks.add(href);
          }
        }
      });
      
      return Array.from(uniqueLinks).slice(0, 2);
    });

    logProgress(`عدد المجتمعات المستهدفة: ${communityLinks.length}`, 'info');

    for (const communityUrl of communityLinks) {
      try {
        logProgress(`جاري معالجة: ${communityUrl}`, 'progress');
        
        // زيارة الصفحة بمحاكاة سلوك المستخدم
        const response = await page.goto(communityUrl, { 
          waitUntil: 'networkidle2',
          timeout: 60000
        });
        
        // التحقق من حالة الاستجابة
        if (!response || response.status() === 403) {
          logProgress(`تخطي بسبب 403 Error: ${communityUrl}`, 'warning');
          await randomDelay();
          continue;
        }
        
        await randomDelay(4000, 6000); // انتظار أطول لتحميل المحتوى

        const communityData = await page.evaluate(() => {
          const data = {
            name_ar: document.querySelector('h1')?.textContent?.trim() || '',
            name_en: '', // سيتم ملؤه لاحقاً
            description_ar: document.querySelector('[class*="description"], p')?.textContent?.trim() || '',
            description_en: '',
            location: '',
            coordinates: { lat: 0, lng: 0 },
            images: [],
            videos: [],
            amenities: []
          };

          // استخراج الصور
          const imgElements = Array.from(document.querySelectorAll('img[src]'));
          data.images = imgElements
            .map(img => img.src)
            .filter(src => src.includes('damac'));

          return data;
        });

        // تنظيف البيانات
        const slug = extractSlugFromUrl(communityUrl, 'communities');
        communityData.slug = slug;
        communityData.name_ar = cleanText(communityData.name_ar);
        communityData.name_en = communityData.name_ar; // placeholder
        communityData.images = removeDuplicates(cleanImages(communityData.images));
        communityData.developer = 'damac';
        communityData.status = 'under-construction';

        results.communities.push(communityData);
        logProgress(`✓ تم استخراج المجتمع: ${communityData.name_ar}`, 'success');

        await randomDelay();
      } catch (error) {
        logProgress(`خطأ في معالجة المجتمع: ${error.message}`, 'error');
      }
    }

    // ===========================
    // استخراج 2 مشروع
    // ===========================
    logProgress('استخراج المشاريع...', 'progress');
    await page.goto(`${BASE_URL}/projects/`, { waitUntil: 'networkidle2' });
    await randomDelay();

    const projectLinks = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('a[href*="/projects/"]'));
      return cards
        .map(card => card.href)
        .filter(href => href.split('/projects/')[1] && href.split('/projects/')[1].length > 0)
        .slice(0, 2); // أول 2 مشروع
    });

    logProgress(`عدد المشاريع المستهدفة: ${projectLinks.length}`, 'info');

    for (const projectUrl of projectLinks) {
      try {
        logProgress(`جاري معالجة: ${projectUrl}`, 'progress');
        await page.goto(projectUrl, { waitUntil: 'networkidle2' });
        await randomDelay();

        const projectData = await page.evaluate(() => {
          const data = {
            name_ar: document.querySelector('h1')?.textContent?.trim() || '',
            name_en: '',
            description_ar: document.querySelector('[class*="description"], p')?.textContent?.trim() || '',
            description_en: '',
            location: '',
            community: '',
            price_start: 0,
            price_end: 0,
            bedrooms: [],
            bathrooms: [],
            size_sqft_min: 0,
            size_sqft_max: 0,
            images: [],
            videos: [],
            amenities: [],
            features: [],
            payment_plan: {
              down_payment_percent: 0,
              during_construction_percent: 0,
              on_completion_percent: 0
            }
          };

          // استخراج الصور
          const imgElements = Array.from(document.querySelectorAll('img[src]'));
          data.images = imgElements
            .map(img => img.src)
            .filter(src => src.includes('damac'));

          // البحث عن خطة الدفع
          const paymentText = document.body.innerText;
          const downMatch = paymentText.match(/(\d+)%.*أثناء|down.*?(\d+)%/i);
          if (downMatch) {
            data.payment_plan.down_payment_percent = parseInt(downMatch[1] || downMatch[2]);
          }

          return data;
        });

        // تنظيف البيانات
        const slug = extractSlugFromUrl(projectUrl, 'projects');
        projectData.slug = slug;
        projectData.name_ar = cleanText(projectData.name_ar);
        projectData.name_en = projectData.name_ar; // placeholder
        projectData.images = removeDuplicates(cleanImages(projectData.images));
        projectData.developer = 'damac';
        projectData.status = 'under-construction';
        projectData.property_type = 'apartment';

        results.projects.push(projectData);
        logProgress(`✓ تم استخراج المشروع: ${projectData.name_ar}`, 'success');

        // محاولة استخراج 2 وحدة من هذا المشروع
        try {
          logProgress('البحث عن الوحدات...', 'progress');
          
          // النقر على زر "عرض الوحدات" أو ما شابه
          const unitButton = await page.$('button:has-text("units"), button:has-text("وحدات"), a[href*="units"]');
          if (unitButton) {
            await unitButton.click();
            await randomDelay();

            const units = await page.evaluate(() => {
              const unitCards = Array.from(document.querySelectorAll('[class*="unit"], [class*="Unit"]'));
              return unitCards.slice(0, 2).map(card => ({
                name: card.querySelector('h2, h3, h4')?.textContent?.trim() || '',
                bedrooms: 0,
                bathrooms: 0,
                size_sqft: 0,
                price: 0,
                images: []
              }));
            });

            units.forEach(unit => {
              unit.project_slug = slug;
              unit.developer = 'damac';
              results.units.push(unit);
            });

            logProgress(`✓ تم استخراج ${units.length} وحدة`, 'success');
          }
        } catch (error) {
          logProgress(`لم يتم العثور على وحدات لهذا المشروع`, 'warning');
        }

        await randomDelay();
      } catch (error) {
        logProgress(`خطأ في معالجة المشروع: ${error.message}`, 'error');
      }
    }

    // ===========================
    // حفظ النتائج
    // ===========================
    logProgress('حفظ النتائج...', 'progress');
    
    const outputDir = './damac/output';
    await fs.writeFile(
      path.join(outputDir, 'sample-communities.json'),
      JSON.stringify(results.communities, null, 2)
    );
    await fs.writeFile(
      path.join(outputDir, 'sample-projects.json'),
      JSON.stringify(results.projects, null, 2)
    );
    await fs.writeFile(
      path.join(outputDir, 'sample-units.json'),
      JSON.stringify(results.units, null, 2)
    );

    logProgress('========================================', 'success');
    logProgress('✅ تم الانتهاء من استخراج العينة!', 'success');
    logProgress(`   المجتمعات: ${results.communities.length}`, 'info');
    logProgress(`   المشاريع: ${results.projects.length}`, 'info');
    logProgress(`   الوحدات: ${results.units.length}`, 'info');
    logProgress('========================================', 'success');

  } catch (error) {
    logProgress(`خطأ أثناء الاستخراج: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      logProgress('تم إغلاق المتصفح', 'info');
    }
  }
}

// تشغيل الاستخراج
extractSample();

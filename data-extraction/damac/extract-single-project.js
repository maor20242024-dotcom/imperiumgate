// ========================================
// استخراج تفاصيل مشروع واحد من DAMAC
// ========================================

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import { 
  logProgress, 
  randomDelay,
  cleanImages,
  removeDuplicates,
  cleanText,
  normalizePrice
} from '../shared/utils.js';

const PROJECT_URL = 'https://www.damacproperties.com/ar-ae/projects/damac-islands/';

async function extractProjectDetails() {
  logProgress('🔍 بدء استخراج تفاصيل مشروع DAMAC Islands...', 'info');
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
        '--window-size=1920,1080'
      ]
    });

    const page = await browser.newPage();

    // إخفاء آثار automation
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3] });
      window.chrome = { runtime: {} };
    });

    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Sec-Ch-Ua': '"Chromium";v="120"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"'
    });

    logProgress('الانتقال إلى صفحة المشروع...', 'progress');
    const response = await page.goto(PROJECT_URL, { 
      waitUntil: ['domcontentloaded', 'networkidle0'],
      timeout: 90000 
    });

    if (!response || response.status() !== 200) {
      throw new Error(`فشل تحميل الصفحة: ${response?.status()}`);
    }

    await randomDelay(5000, 8000);

    // التمرير لتحميل جميع العناصر
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

    // أخذ لقطة شاشة
    await page.screenshot({ 
      path: './damac/output/damac-islands-detail.png',
      fullPage: true 
    });
    logProgress('✓ تم حفظ لقطة شاشة للمشروع', 'success');

    // استخراج البيانات
    const projectData = await page.evaluate(() => {
      const data = {
        name_ar: '',
        name_en: '',
        description_ar: '',
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
        payment_plan: {},
        floors: 0,
        units_count: 0,
        completion_date: '',
        highlights: []
      };

      // العنوان
      const h1 = document.querySelector('h1');
      if (h1) data.name_ar = h1.textContent?.trim() || '';

      // الوصف
      const descriptions = Array.from(document.querySelectorAll('p, div[class*="description"], div[class*="Description"]'));
      const descText = descriptions
        .map(p => p.textContent?.trim())
        .filter(t => t && t.length > 50 && t.length < 1000)
        .join(' ');
      data.description_ar = descText.substring(0, 500);

      // الموقع
      const locationEl = document.querySelector('[class*="location"], [class*="Location"]');
      if (locationEl) data.location = locationEl.textContent?.trim() || '';

      // الصور
      const images = Array.from(document.querySelectorAll('img[src]'));
      data.images = images
        .map(img => img.src)
        .filter(src => src.includes('damac') && !src.includes('logo'))
        .slice(0, 20);

      // الأسعار
      const priceElements = Array.from(document.querySelectorAll('*'));
      priceElements.forEach(el => {
        const text = el.textContent || '';
        // البحث عن أرقام مثل 1,200,000 أو 1.2M
        const priceMatch = text.match(/(\d{1,3}(?:,\d{3})+|\d+\.?\d*[KMB]?)\s*(?:AED|درهم)/i);
        if (priceMatch && !data.price_start) {
          const priceStr = priceMatch[1].replace(/,/g, '');
          let price = parseFloat(priceStr);
          if (priceStr.includes('M')) price *= 1000000;
          if (priceStr.includes('K')) price *= 1000;
          data.price_start = Math.round(price);
        }
      });

      // الغرف
      const bedroomMatches = document.body.innerText.match(/(\d+)\s*(?:غرف نوم|bedroom|BR)/gi);
      if (bedroomMatches) {
        const bedrooms = bedroomMatches.map(m => parseInt(m.match(/\d+/)[0]));
        data.bedrooms = [...new Set(bedrooms)].sort((a, b) => a - b);
      }

      // المساحات
      const sizeMatches = document.body.innerText.match(/(\d{1,5})\s*(?:قدم|sq\.?\s*ft|sqft)/gi);
      if (sizeMatches) {
        const sizes = sizeMatches.map(m => parseInt(m.match(/\d+/)[0]));
        if (sizes.length > 0) {
          data.size_sqft_min = Math.min(...sizes);
          data.size_sqft_max = Math.max(...sizes);
        }
      }

      // المرافق
      const amenityKeywords = ['مسبح', 'نادي', 'حديقة', 'موقف', 'أمن', 'Pool', 'Gym', 'Park', 'Security'];
      const allText = document.body.innerText;
      amenityKeywords.forEach(keyword => {
        if (allText.includes(keyword)) {
          data.amenities.push(keyword);
        }
      });

      // خطة الدفع
      const paymentText = document.body.innerText;
      const downPaymentMatch = paymentText.match(/(\d+)%\s*(?:عند|down|booking)/i);
      if (downPaymentMatch) {
        data.payment_plan.down_payment_percent = parseInt(downPaymentMatch[1]);
      }

      return data;
    });

    // تنظيف البيانات
    projectData.name_ar = cleanText(projectData.name_ar);
    projectData.name_en = projectData.name_ar;
    projectData.images = removeDuplicates(cleanImages(projectData.images));
    projectData.developer = 'damac';
    projectData.slug = 'damac-islands';
    projectData.status = 'under-construction';
    projectData.property_type = 'apartment';

    // حفظ النتيجة
    await fs.writeFile(
      './damac/output/damac-islands-full-details.json',
      JSON.stringify(projectData, null, 2)
    );

    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    logProgress('✅ تم استخراج التفاصيل بنجاح!', 'success');
    logProgress('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'success');
    console.log('\n📊 البيانات المستخرجة:');
    console.log(`   الاسم: ${projectData.name_ar}`);
    console.log(`   الوصف: ${projectData.description_ar.substring(0, 100)}...`);
    console.log(`   الموقع: ${projectData.location || 'غير متوفر'}`);
    console.log(`   السعر: ${projectData.price_start > 0 ? projectData.price_start.toLocaleString() + ' AED' : 'غير متوفر'}`);
    console.log(`   الغرف: ${projectData.bedrooms.join(', ') || 'غير متوفر'}`);
    console.log(`   المساحة: ${projectData.size_sqft_min > 0 ? projectData.size_sqft_min + ' - ' + projectData.size_sqft_max + ' قدم²' : 'غير متوفر'}`);
    console.log(`   عدد الصور: ${projectData.images.length}`);
    console.log(`   المرافق: ${projectData.amenities.length}`);
    console.log('\n');

  } catch (error) {
    logProgress(`❌ خطأ: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      logProgress('🔒 تم إغلاق المتصفح', 'info');
    }
  }
}

extractProjectDetails();

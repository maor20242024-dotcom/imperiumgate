// ========================================
// اختبار الاتصال بموقع DAMAC
// ========================================

import puppeteer from 'puppeteer';
import { logProgress, randomDelay } from '../shared/utils.js';

async function testConnection() {
  logProgress('بدء اختبار الاتصال بموقع DAMAC...', 'info');
  
  let browser;
  try {
    // إطلاق المتصفح
    logProgress('إطلاق المتصفح...', 'progress');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // إعداد User Agent لتبدو كمتصفح حقيقي
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );
    
    // تعيين viewport
    await page.setViewport({ width: 1920, height: 1080 });

    logProgress('الانتقال إلى صفحة DAMAC Communities...', 'progress');
    
    // الانتقال إلى صفحة المجتمعات
    const response = await page.goto('https://www.damacproperties.com/ar-ae/communities/', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // التحقق من نجاح الطلب
    if (response.ok()) {
      logProgress(`✓ نجاح! رمز الحالة: ${response.status()}`, 'success');
    } else {
      logProgress(`تحذير: رمز الحالة: ${response.status()}`, 'warning');
    }

    // انتظار عشوائي
    await randomDelay(2000, 4000);

    // أخذ لقطة شاشة
    logProgress('أخذ لقطة شاشة...', 'progress');
    await page.screenshot({ 
      path: './damac/output/test-screenshot.png',
      fullPage: false 
    });

    // التحقق من عنوان الصفحة
    const title = await page.title();
    logProgress(`عنوان الصفحة: ${title}`, 'info');

    // محاولة الحصول على عدد المجتمعات
    logProgress('البحث عن بطاقات المجتمعات...', 'progress');
    const communityCards = await page.$$('[class*="card"], [class*="Card"], .community-card, article');
    logProgress(`عدد البطاقات المكتشفة: ${communityCards.length}`, 'info');

    // اختبار الضغط على أول مجتمع (إذا وجد)
    if (communityCards.length > 0) {
      logProgress('محاولة قراءة بيانات أول مجتمع...', 'progress');
      
      const firstCard = communityCards[0];
      const cardHTML = await firstCard.evaluate(el => el.outerHTML);
      logProgress('HTML أول بطاقة (أول 200 حرف):', 'info');
      console.log(cardHTML.substring(0, 200) + '...');
      
      // محاولة قراءة الرابط
      const link = await firstCard.$eval('a', el => el.href).catch(() => null);
      if (link) {
        logProgress(`رابط أول مجتمع: ${link}`, 'info');
      }
    }

    logProgress('اختبار الاتصال ناجح! ✅', 'success');
    logProgress('يمكنك الآن متابعة عملية الاستخراج', 'info');

  } catch (error) {
    logProgress(`خطأ أثناء اختبار الاتصال: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      logProgress('تم إغلاق المتصفح', 'info');
    }
  }
}

// تشغيل الاختبار
testConnection();

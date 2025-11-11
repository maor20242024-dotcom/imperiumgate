// ========================================
// استخراج قائمة المجتمعات والمشاريع من DAMAC
// ========================================

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { 
  logProgress, 
  randomDelay
} from '../shared/utils.js';

const BASE_URL = 'https://www.damacproperties.com/ar-ae';

async function extractList() {
  logProgress('بدء استخراج قائمة المجتمعات والمشاريع من DAMAC...', 'info');
  
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
    
    // تعيين User Agent كامل
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );
    
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'ar-AE,ar;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    });
    
    await page.setViewport({ width: 1920, height: 1080 });

    const results = {
      communities: [],
      projects: []
    };

    // ===========================
    // استخراج قائمة المجتمعات
    // ===========================
    logProgress('استخراج قائمة المجتمعات...', 'progress');
    await page.goto(`${BASE_URL}/communities/`, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    await randomDelay(5000, 7000);

    // أخذ لقطة شاشة
    await page.screenshot({ path: './damac/output/communities-page.png' });
    logProgress('تم حفظ لقطة شاشة للمجتمعات', 'info');

    // استخراج البيانات من الصفحة
    const communities = await page.evaluate(() => {
      const items = [];
      
      // البحث عن جميع الروابط والبطاقات
      const links = Array.from(document.querySelectorAll('a'));
      const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"]'));
      
      // محاولة 1: الروابط التي تحتوي على communities
      links.forEach(link => {
        if (link.href && link.href.includes('/communities/')) {
          const text = link.textContent?.trim();
          const href = link.href;
          
          if (text && text.length > 2 && !text.includes('©') && !text.includes('DAMAC Properties')) {
            items.push({
              name: text,
              url: href,
              source: 'link'
            });
          }
        }
      });
      
      // محاولة 2: البطاقات
      cards.forEach(card => {
        const title = card.querySelector('h1, h2, h3, h4, h5, h6');
        const link = card.querySelector('a');
        
        if (title && link && link.href.includes('/communities/')) {
          items.push({
            name: title.textContent?.trim(),
            url: link.href,
            source: 'card'
          });
        }
      });
      
      return items;
    });

    logProgress(`عدد المجتمعات المستخرجة: ${communities.length}`, 'info');
    
    // تصفية وإزالة التكرارات
    const uniqueCommunities = new Map();
    communities.forEach(comm => {
      if (comm.name && comm.url) {
        const slug = comm.url.split('/communities/')[1]?.replace(/\/$/, '');
        if (slug && !slug.includes('#') && !slug.includes('?')) {
          uniqueCommunities.set(slug, {
            name_ar: comm.name,
            slug: slug,
            url: comm.url,
            source: comm.source
          });
        }
      }
    });

    results.communities = Array.from(uniqueCommunities.values());
    logProgress(`عدد المجتمعات الفريدة: ${results.communities.length}`, 'success');

    // ===========================
    // استخراج قائمة المشاريع
    // ===========================
    logProgress('استخراج قائمة المشاريع...', 'progress');
    await page.goto(`${BASE_URL}/projects/`, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    await randomDelay(5000, 7000);

    // أخذ لقطة شاشة
    await page.screenshot({ path: './damac/output/projects-page.png' });
    logProgress('تم حفظ لقطة شاشة للمشاريع', 'info');

    const projects = await page.evaluate(() => {
      const items = [];
      
      const links = Array.from(document.querySelectorAll('a'));
      const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="Card"]'));
      
      // محاولة 1: الروابط
      links.forEach(link => {
        if (link.href && link.href.includes('/projects/')) {
          const text = link.textContent?.trim();
          const href = link.href;
          
          if (text && text.length > 2 && !text.includes('©') && !text.includes('DAMAC Properties')) {
            items.push({
              name: text,
              url: href,
              source: 'link'
            });
          }
        }
      });
      
      // محاولة 2: البطاقات
      cards.forEach(card => {
        const title = card.querySelector('h1, h2, h3, h4, h5, h6');
        const link = card.querySelector('a');
        
        if (title && link && link.href.includes('/projects/')) {
          items.push({
            name: title.textContent?.trim(),
            url: link.href,
            source: 'card'
          });
        }
      });
      
      return items;
    });

    logProgress(`عدد المشاريع المستخرجة: ${projects.length}`, 'info');
    
    const uniqueProjects = new Map();
    projects.forEach(proj => {
      if (proj.name && proj.url) {
        const slug = proj.url.split('/projects/')[1]?.replace(/\/$/, '');
        if (slug && !slug.includes('#') && !slug.includes('?')) {
          uniqueProjects.set(slug, {
            name_ar: proj.name,
            slug: slug,
            url: proj.url,
            source: proj.source
          });
        }
      }
    });

    results.projects = Array.from(uniqueProjects.values());
    logProgress(`عدد المشاريع الفريدة: ${results.projects.length}`, 'success');

    // ===========================
    // حفظ النتائج
    // ===========================
    logProgress('حفظ النتائج...', 'progress');
    
    const outputDir = './damac/output';
    await fs.writeFile(
      path.join(outputDir, 'damac-communities-list.json'),
      JSON.stringify(results.communities, null, 2)
    );
    await fs.writeFile(
      path.join(outputDir, 'damac-projects-list.json'),
      JSON.stringify(results.projects, null, 2)
    );
    await fs.writeFile(
      path.join(outputDir, 'damac-full-list.json'),
      JSON.stringify(results, null, 2)
    );

    logProgress('========================================', 'success');
    logProgress('✅ تم الانتهاء من استخراج القوائم!', 'success');
    logProgress(`   المجتمعات: ${results.communities.length}`, 'info');
    logProgress(`   المشاريع: ${results.projects.length}`, 'info');
    logProgress('========================================', 'success');

    // طباعة عينة
    console.log('\n--- عينة من المجتمعات ---');
    results.communities.slice(0, 3).forEach(c => {
      console.log(`- ${c.name_ar} (${c.slug})`);
    });

    console.log('\n--- عينة من المشاريع ---');
    results.projects.slice(0, 3).forEach(p => {
      console.log(`- ${p.name_ar} (${p.slug})`);
    });

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
extractList();

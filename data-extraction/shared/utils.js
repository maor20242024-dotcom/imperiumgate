// ========================================
// دوال مساعدة مشتركة للاستخراج
// ========================================

/**
 * انتظار عشوائي لتجنب الحظر
 */
export function randomDelay(min = 2000, max = 5000) {
  return new Promise(resolve => 
    setTimeout(resolve, Math.random() * (max - min) + min)
  );
}

/**
 * تنظيف الصور حسب القواعد المحددة
 */
export function cleanImages(images) {
  if (!Array.isArray(images)) return [];
  
  return images.filter(url => {
    if (!url || typeof url !== 'string') return false;
    
    const cleanUrl = url.split('?')[0].toLowerCase();
    
    // إزالة PNG
    if (cleanUrl.endsWith('.png')) return false;
    
    // إزالة SVG
    if (cleanUrl.endsWith('.svg')) return false;
    
    // إزالة صور 320x415
    if (url.includes('320x415') || url.includes('320X415')) return false;
    
    // إزالة اللوغوات
    if (url.toLowerCase().includes('logo')) return false;
    
    // إزالة عناصر UI
    if (url.includes('arrow') || url.includes('loading.gif')) return false;
    
    return true;
  });
}

/**
 * إزالة التكرارات من المصفوفة
 */
export function removeDuplicates(array) {
  return [...new Set(array)];
}

/**
 * تصحيح الأسعار المضروبة في 100
 */
export function normalizePrice(rawPrice) {
  if (!rawPrice || isNaN(rawPrice)) return 0;
  // الأسعار في DAMAC مخزنة بالفلس، نحولها للدرهم
  return Math.round(rawPrice / 100);
}

/**
 * تنسيق السعر بشكل قابل للقراءة
 */
export function formatPrice(price, currency = 'AED') {
  return `${currency} ${price.toLocaleString('en-US')}`;
}

/**
 * حفظ log للعملية
 */
export function logProgress(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const emoji = {
    'info': 'ℹ️',
    'success': '✅',
    'error': '❌',
    'warning': '⚠️',
    'progress': '🔄'
  }[type] || 'ℹ️';
  
  console.log(`${emoji} [${timestamp}] ${message}`);
}

/**
 * استخراج slug من URL
 */
export function extractSlugFromUrl(url, keyword) {
  if (!url || !keyword) return null;
  const parts = url.split(`/${keyword}/`);
  if (parts.length < 2) return null;
  return parts[1].replace(/\/$/, '');
}

/**
 * تنظيف النصوص من الفراغات الزائدة
 */
export function cleanText(text) {
  if (!text) return '';
  return text.trim().replace(/\s+/g, ' ');
}

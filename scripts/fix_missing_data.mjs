#!/usr/bin/env node
/**
 * 🔧 سكريبت إصلاح البيانات المفقودة
 * Fix Missing Data Script
 * 
 * يقوم بـ:
 * 1. حساب المسافات الفعلية للأماكن المهمة
 * 2. ملء بيانات الموقع المفقودة
 * 3. إصلاح الحقول الفارغة
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// مراكز دبي المهمة
const DUBAI_LANDMARKS = {
  'Burj Khalifa': { lat: 25.197197, lng: 55.274376 },
  'Burj Al Arab': { lat: 25.141268, lng: 55.185370 },
  'Palm Jumeirah': { lat: 25.112781, lng: 55.138486 },
  'Dubai International Airport': { lat: 25.252778, lng: 55.364444 },
  'Dubai Mall': { lat: 25.197197, lng: 55.279136 },
  'Dubai Marina': { lat: 25.080382, lng: 55.139337 },
  'Downtown Dubai': { lat: 25.195139, lng: 55.274119 },
  'Business Bay': { lat: 25.187361, lng: 55.265556 },
  'Jumeirah Beach': { lat: 25.213889, lng: 55.242222 },
};

// حساب المسافة بين نقطتين (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // نصف قطر الأرض بالكيلومتر
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // تقريب لرقم عشري واحد
}

// حساب وقت السفر التقريبي
function calculateTravelTime(distanceKm) {
  const avgSpeed = 60; // متوسط السرعة 60 كم/ساعة في دبي
  const timeHours = distanceKm / avgSpeed;
  const timeMinutes = Math.round(timeHours * 60);
  return timeMinutes;
}

// معالجة مشروع واحد
function processProject(projectData, projectPath) {
  let modified = false;
  
  // التحقق من وجود إحداثيات
  if (!projectData.latitude || !projectData.longitude) {
    console.log(`⚠️  ${projectPath}: لا توجد إحداثيات`);
    return false;
  }

  const projectLat = projectData.latitude;
  const projectLng = projectData.longitude;

  // معالجة mapPointsOfInterest
  if (projectData.mapPointsOfInterest && Array.isArray(projectData.mapPointsOfInterest)) {
    projectData.mapPointsOfInterest.forEach(poi => {
      const poiName = poi.name?.en || '';
      const landmark = DUBAI_LANDMARKS[poiName];
      
      if (landmark && (!poi.distance?.en || !poi.distance?.ar)) {
        const distKm = calculateDistance(projectLat, projectLng, landmark.lat, landmark.lng);
        const timeMin = calculateTravelTime(distKm);
        
        poi.distance = {
          en: `${distKm} km (${timeMin} min)`,
          ar: `${distKm} كم (${timeMin} دقيقة)`
        };
        
        // إضافة التصنيف إذا كان مفقوداً
        if (!poi.category?.en) {
          poi.category = {
            en: getCategoryForLandmark(poiName),
            ar: getCategoryInArabic(getCategoryForLandmark(poiName))
          };
        }
        
        modified = true;
      }
    });
  }

  // معالجة location
  if (projectData.location) {
    // ملء بيانات الدولة والمدينة
    if (!projectData.location.country?.en) {
      projectData.location.country = {
        en: 'United Arab Emirates',
        ar: 'الإمارات العربية المتحدة'
      };
      modified = true;
    }
    
    if (!projectData.location.city?.en) {
      projectData.location.city = {
        en: 'Dubai',
        ar: 'دبي'
      };
      modified = true;
    }
    
    // ملء المنطقة من area إذا كانت فارغة
    if (!projectData.location.area?.en && projectData.area) {
      projectData.location.area = typeof projectData.area === 'string' 
        ? { en: projectData.area, ar: projectData.area }
        : projectData.area;
      modified = true;
    }
  }

  // معالجة documents إذا كانت فارغة
  if (projectData.documents) {
    // التحقق من وجود روابط في media
    if (projectData.media) {
      // Brochure
      if (projectData.media.brochurePdfLink && !projectData.documents.brochure?.en?.length) {
        projectData.documents.brochure = {
          en: [{ url: projectData.media.brochurePdfLink, title: 'Project Brochure' }],
          ar: [{ url: projectData.media.brochurePdfLink, title: 'كتيب المشروع' }]
        };
        modified = true;
      }
    }
  }

  return modified;
}

// الحصول على التصنيف للمعلم
function getCategoryForLandmark(name) {
  const categories = {
    'Burj Khalifa': 'Landmark',
    'Burj Al Arab': 'Hotel',
    'Palm Jumeirah': 'Community',
    'Dubai International Airport': 'Airport',
    'Dubai Mall': 'Shopping',
    'Dubai Marina': 'Community',
    'Downtown Dubai': 'Community',
    'Business Bay': 'Community',
    'Jumeirah Beach': 'Beach',
  };
  return categories[name] || 'Landmark';
}

// ترجمة التصنيف للعربية
function getCategoryInArabic(category) {
  const translations = {
    'Landmark': 'معلم سياحي',
    'Hotel': 'فندق',
    'Community': 'مجتمع',
    'Airport': 'مطار',
    'Shopping': 'تسوق',
    'Beach': 'شاطئ',
  };
  return translations[category] || 'معلم';
}

// معالجة جميع المشاريع
async function processAllProjects() {
  const dataDir = path.join(__dirname, '../public/data');
  const developers = ['damac', 'emaar', 'nakheel', 'sobha', 'binghatti'];
  
  let totalProcessed = 0;
  let totalModified = 0;

  for (const developer of developers) {
    const devDir = path.join(dataDir, developer, 'projects');
    
    if (!fs.existsSync(devDir)) {
      console.log(`⚠️  لا يوجد مجلد projects لـ ${developer}`);
      continue;
    }

    const projects = fs.readdirSync(devDir);
    
    for (const projectSlug of projects) {
      const projectPath = path.join(devDir, projectSlug, 'index.json');
      
      if (!fs.existsSync(projectPath)) {
        continue;
      }

      try {
        const data = JSON.parse(fs.readFileSync(projectPath, 'utf-8'));
        const modified = processProject(data, `${developer}/${projectSlug}`);
        
        if (modified) {
          fs.writeFileSync(projectPath, JSON.stringify(data, null, 2), 'utf-8');
          console.log(`✅ ${developer}/${projectSlug} - تم التحديث`);
          totalModified++;
        }
        
        totalProcessed++;
      } catch (error) {
        console.error(`❌ خطأ في ${developer}/${projectSlug}:`, error.message);
      }
    }
  }

  console.log(`\n📊 النتيجة النهائية:`);
  console.log(`   تم معالجة: ${totalProcessed} مشروع`);
  console.log(`   تم تحديث: ${totalModified} مشروع`);
  console.log(`   بدون تغيير: ${totalProcessed - totalModified} مشروع`);
}

// تنفيذ السكريبت
processAllProjects()
  .then(() => {
    console.log('\n✅ تم إكمال المعالجة بنجاح!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ خطأ في المعالجة:', error);
    process.exit(1);
  });

#!/usr/bin/env node

/**
 * Create Required Developer Files
 * ================================
 * 
 * Creates for each developer:
 * 1. provider_profile.json
 * 2. meta.json  
 * 3. index.json
 * 4. manifest_{developer}.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');

const DEVELOPERS = [
  {
    slug: 'binghatti',
    name: { ar: 'بن غاطي', en: 'Binghatti' },
    website: 'https://www.binghatti.com',
    phone: '971556628972',
    email: 'info@binghatti.com',
    description: {
      ar: 'شركة بن غاطي العقارية - مطور عقاري رائد في دبي متخصص في المشاريع السكنية الفاخرة والمبتكرة',
      en: 'Binghatti Properties - Leading Dubai real estate developer specializing in luxurious and innovative residential projects'
    }
  },
  {
    slug: 'damac',
    name: { ar: 'داماك', en: 'DAMAC' },
    website: 'https://www.damacproperties.com',
    phone: '97148028888',
    email: 'customercare@damacproperties.com',
    description: {
      ar: 'داماك العقارية - أكبر مطور عقاري خاص في دبي، متخصص في المشاريع الفاخرة والشراكات مع العلامات التجارية العالمية',
      en: 'DAMAC Properties - Largest private developer in Dubai, specializing in luxury projects and partnerships with global brands'
    }
  },
  {
    slug: 'emaar',
    name: { ar: 'إعمار', en: 'Emaar' },
    website: 'https://www.emaar.com',
    phone: '97148842888',
    email: 'customercare@emaar.ae',
    description: {
      ar: 'إعمار العقارية - مطور عقاري عالمي وراء أيقونات دبي مثل برج خليفة ودبي مول',
      en: 'Emaar Properties - Global real estate developer behind Dubai icons like Burj Khalifa and Dubai Mall'
    }
  },
  {
    slug: 'nakheel',
    name: { ar: 'نخيل', en: 'Nakheel' },
    website: 'https://www.nakheel.com',
    phone: '97148146666',
    email: 'customercare@nakheel.com',
    description: {
      ar: 'نخيل العقارية - مطور رائد للمشاريع المبتكرة بما في ذلك نخلة جميرا وذا وورلد',
      en: 'Nakheel Properties - Leading developer of iconic projects including Palm Jumeirah and The World'
    }
  },
  {
    slug: 'sobha',
    name: { ar: 'سوبها', en: 'Sobha' },
    website: 'https://www.sobharealty.com',
    phone: '97143856888',
    email: 'customercare@sobharealty.com',
    description: {
      ar: 'سوبها العقارية - مطور عقاري فاخر معروف بالجودة العالية والحرفية المتميزة',
      en: 'Sobha Realty - Luxury real estate developer known for high quality and exceptional craftsmanship'
    }
  }
];

function getAllProjects(developerSlug) {
  const projectsDir = path.join(DATA_DIR, developerSlug, 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }
  
  const projects = [];
  const folders = fs.readdirSync(projectsDir);
  
  for (const folder of folders) {
    const indexPath = path.join(projectsDir, folder, 'index.json');
    
    if (fs.existsSync(indexPath)) {
      try {
        const content = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        projects.push({
          slug: folder,
          name: content.projectName,
          status: content.status,
          bedrooms: content.bedrooms || [],
          location: content.location?.area || content.location?.community
        });
      } catch (error) {
        console.error(`   ⚠️  Error reading ${folder}:`, error.message);
      }
    }
  }
  
  return projects;
}

function getAllCommunities(developerSlug) {
  const communitiesSet = new Set();
  const projects = getAllProjects(developerSlug);
  
  projects.forEach(project => {
    if (project.location) {
      // Handle both string and object formats
      const locationName = typeof project.location === 'string' 
        ? project.location 
        : (project.location.en || project.location.ar);
      
      if (locationName) {
        communitiesSet.add(locationName);
      }
    }
  });
  
  return Array.from(communitiesSet).filter(Boolean).map(name => ({
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    name: { ar: name, en: name }
  }));
}

function createProviderProfile(developer) {
  return {
    providerID: developer.slug,
    title: {
      ar: `${developer.name.ar}: مطور عقاري رائد في دبي`,
      en: `${developer.name.en}: Leading Real Estate Developer in Dubai`
    },
    definition: {
      ar: developer.description.ar,
      en: developer.description.en
    },
    firstImpression: {
      ar: `عند زيارتك لأي مشروع من ${developer.name.ar}، تشعر فورًا بالفخامة والأناقة والجودة العالية`,
      en: `When visiting any ${developer.name.en} project, you immediately feel luxury, elegance and high quality`
    },
    professionalism: {
      ar: `${developer.name.ar} تجسد الاحترافية العالية من خلال فرقها المتخصصة`,
      en: `${developer.name.en} embodies high professionalism through specialized teams`
    },
    creativity: {
      ar: `إبداع ${developer.name.ar} يظهر في تصاميمها الفريدة والمبتكرة`,
      en: `${developer.name.en}'s creativity shows in unique and innovative designs`
    },
    beautyElegance: {
      ar: `كل مشروع من ${developer.name.ar} هو تحفة جمالية وأناقة`,
      en: `Every ${developer.name.en} project is a masterpiece of beauty and elegance`
    },
    wealthComfort: {
      ar: `${developer.name.ar} تُمثل الثراء الحقيقي والحياة المريحة`,
      en: `${developer.name.en} represents true wealth and comfortable living`
    },
    dreamFulfillment: {
      ar: `مع ${developer.name.ar}، تحقق أحلامك في منزل يجسد طموحاتك`,
      en: `With ${developer.name.en}, fulfill your dreams in a home that embodies your aspirations`
    },
    famousCommunities: getAllCommunities(developer.slug).slice(0, 5),
    latestWorks: getAllProjects(developer.slug)
      .filter(p => p.status === 'under-construction')
      .slice(0, 3)
      .map(p => ({
        slug: p.slug,
        name: p.name,
        year: new Date().getFullYear()
      })),
    supportingVideo: [],
    images: [],
    website: developer.website,
    contact: {
      phone: developer.phone,
      email: developer.email,
      whatsapp: `https://wa.me/${developer.phone}`
    },
    lastUpdated: new Date().toISOString()
  };
}

function createMeta(developer) {
  const projects = getAllProjects(developer.slug);
  
  return {
    developer: developer.name,
    slug: developer.slug,
    description: developer.description,
    logo: `/brand/developers/${developer.slug}-logo.svg`,
    website: developer.website,
    contact: {
      phone: developer.phone,
      email: developer.email,
      whatsapp: `https://wa.me/${developer.phone}`
    },
    statistics: {
      totalProjects: projects.length,
      totalUnits: projects.reduce((sum, p) => {
        // Estimate based on bedrooms
        const bedroomCount = p.bedrooms?.length || 0;
        return sum + (bedroomCount > 0 ? bedroomCount * 50 : 100);
      }, 0),
      locations: Array.from(new Set(projects.map(p => {
        // Extract location string safely
        const loc = p.location;
        if (!loc) return null;
        if (typeof loc === 'string') return loc;
        return loc.en || loc.ar;
      }).filter(Boolean)))
    },
    projects: projects,
    lastUpdated: new Date().toISOString()
  };
}

function createIndex(developer) {
  const projects = getAllProjects(developer.slug);
  const communities = getAllCommunities(developer.slug);
  
  return {
    provider: developer.slug,
    generatedAt: new Date().toISOString(),
    communities: communities,
    projects: projects.map(p => {
      // Extract location string safely
      const locationStr = typeof p.location === 'string' 
        ? p.location 
        : (p.location?.en || p.location?.ar || '');
      
      return {
        slug: p.slug,
        name: p.name,
        community: locationStr ? locationStr.toLowerCase().replace(/\s+/g, '-') : undefined,
        status: p.status
      };
    })
  };
}

function createManifest(developer) {
  const projects = getAllProjects(developer.slug);
  
  return {
    meta: {
      generated_at: new Date().toISOString(),
      path_style: 'domain_relative',
      trailing_slash: true,
      notes: 'Auto-generated manifest for developer projects'
    },
    developer: developer.slug,
    domain: developer.website,
    items: projects.map((project, index) => ({
      line: index + 1,
      label: `${project.name?.en || project.slug}`,
      path: `/projects/${project.slug}/`,
      segments: ['projects', project.slug],
      type: 'project',
      confidence: 'high',
      full_url: `${developer.website}/projects/${project.slug}/`
    })),
    stats: {
      project: projects.length
    },
    count: projects.length
  };
}

async function main() {
  console.log('🚀 Creating required developer files...\n');
  
  for (const developer of DEVELOPERS) {
    console.log(`\n📦 Processing ${developer.name.en} (${developer.slug})...`);
    
    const developerDir = path.join(DATA_DIR, developer.slug);
    
    if (!fs.existsSync(developerDir)) {
      fs.mkdirSync(developerDir, { recursive: true });
    }
    
    // 1. Provider Profile
    const profilePath = path.join(developerDir, 'provider_profile.json');
    const profile = createProviderProfile(developer);
    fs.writeFileSync(profilePath, JSON.stringify(profile, null, 2), 'utf8');
    console.log(`   ✅ Created: provider_profile.json`);
    
    // 2. Meta
    const metaPath = path.join(developerDir, 'meta.json');
    const meta = createMeta(developer);
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
    console.log(`   ✅ Created: meta.json`);
    
    // 3. Index
    const indexPath = path.join(developerDir, 'index.json');
    const index = createIndex(developer);
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
    console.log(`   ✅ Created: index.json`);
    
    // 4. Manifest
    const manifestPath = path.join(developerDir, `manifest_${developer.slug}.json`);
    const manifest = createManifest(developer);
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`   ✅ Created: manifest_${developer.slug}.json`);
    
    console.log(`   📊 Projects: ${meta.statistics.totalProjects}`);
    console.log(`   📍 Communities: ${meta.statistics.locations.length}`);
  }
  
  console.log('\n✅ All developer files created successfully!\n');
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});

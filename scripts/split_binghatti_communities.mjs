#!/usr/bin/env node

/**
 * Split Binghatti Communities into Individual Folders
 * ===================================================
 * 
 * Creates proper structure with index.json for each community
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const BINGHATTI_DIR = path.join(DATA_DIR, 'binghatti');
const COMMUNITIES_FILE = path.join(BINGHATTI_DIR, 'communities/all.json');
const COMMUNITIES_DIR = path.join(BINGHATTI_DIR, 'communities');

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function convertToProjectStructure(community) {
  const developments = community.project_developments || [];
  
  // Extract all unit types from all developments
  const allUnitTypes = developments.flatMap(dev => dev.unit_types || []);
  
  // Get unique bedrooms
  const bedroomsSet = new Set();
  allUnitTypes.forEach(unit => {
    if (typeof unit.bedrooms === 'number') {
      bedroomsSet.add(unit.bedrooms);
    }
  });
  const bedrooms = Array.from(bedroomsSet).sort((a, b) => a - b);
  
  // Calculate price range
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  
  allUnitTypes.forEach(unit => {
    if (unit.price_range_aed) {
      const priceStr = unit.price_range_aed.replace(/,/g, '');
      const matches = priceStr.match(/(\d+)/g);
      
      if (matches && matches.length > 0) {
        const prices = matches.map(p => parseFloat(p));
        minPrice = Math.min(minPrice, ...prices);
        maxPrice = Math.max(maxPrice, ...prices);
      }
    }
  });
  
  // Combine all amenities
  const amenitiesSet = new Set();
  
  // Community amenities
  if (Array.isArray(community.community_amenities)) {
    community.community_amenities.forEach(amenity => {
      if (typeof amenity === 'object' && amenity.en) {
        amenitiesSet.add(JSON.stringify(amenity));
      }
    });
  }
  
  // Project amenities
  developments.forEach(dev => {
    if (Array.isArray(dev.amenities)) {
      dev.amenities.forEach(amenity => {
        if (typeof amenity === 'object' && amenity.en) {
          amenitiesSet.add(JSON.stringify(amenity));
        }
      });
    }
  });
  
  const amenities = Array.from(amenitiesSet)
    .map(str => JSON.parse(str))
    .slice(0, 20);
  
  return {
    projectName: community.communityName,
    developer: {
      ar: 'بن غاطي',
      en: 'Binghatti'
    },
    developerSlug: 'binghatti',
    
    location: {
      city: community.city,
      area: community.communityName,
      community: community.communityName,
      coordinates: {
        lat: community.latitude || 25.2048,
        lng: community.longitude || 55.2708
      },
      address: community.location
    },
    
    description: community.description,
    
    propertyTypes: [
      { ar: 'شقة', en: 'Apartment' },
      { ar: 'سكني', en: 'Residential' }
    ],
    
    bedrooms: bedrooms.length > 0 ? bedrooms : [0, 1, 2, 3],
    
    priceRange: minPrice !== Infinity ? {
      min: minPrice,
      max: maxPrice,
      currency: 'AED'
    } : null,
    
    status: 'under-construction',
    
    deliveryDate: developments[0]?.delivery_date || 'Q4 2026',
    
    amenities: amenities,
    
    gallery: {
      images: [],
      videos: []
    },
    
    floorPlans: [],
    
    features: {
      transportation: community.transportation,
      investmentHighlights: community.investment_highlights || [],
      nearbyAttractions: community.nearby_attractions || []
    },
    
    contact: {
      phone: '971556628972',
      whatsapp: 'https://api.whatsapp.com/send/?phone=%2B971556628972',
      email: 'info@binghatti.com',
      website: 'https://www.binghatti.com'
    },
    
    metadata: {
      communityType: community.area_type,
      totalProjects: community.total_projects,
      totalDevelopments: developments.length,
      lastUpdated: new Date().toISOString(),
      dataSource: 'binghatti-communities'
    },
    
    developments: developments.map(dev => ({
      name: dev.development_name,
      slug: createSlug(dev.development_name?.en || ''),
      category: dev.project_category,
      totalUnits: dev.total_units,
      unitTypes: dev.unit_types,
      deliveryDate: dev.delivery_date,
      status: dev.project_status,
      amenities: Array.isArray(dev.amenities) ? dev.amenities : []
    }))
  };
}

async function main() {
  console.log('🚀 Starting Binghatti communities split...\n');
  
  // Read the all.json file
  const fileContent = fs.readFileSync(COMMUNITIES_FILE, 'utf8');
  const data = JSON.parse(fileContent);
  const communities = data.binghatti_communities_master.communities;
  
  console.log(`📊 Found ${communities.length} communities to split\n`);
  
  // Process each community
  for (const community of communities) {
    const slug = community.community_slug;
    const name = community.communityName.en;
    
    console.log(`📝 Processing: ${name}`);
    console.log(`   Slug: ${slug}`);
    
    // Create community folder
    const communityDir = path.join(COMMUNITIES_DIR, slug);
    if (!fs.existsSync(communityDir)) {
      fs.mkdirSync(communityDir, { recursive: true });
    }
    
    // Convert to project structure
    const projectData = convertToProjectStructure(community);
    
    // Write index.json
    const indexPath = path.join(communityDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(projectData, null, 2), 'utf8');
    
    console.log(`   ✅ Created: ${indexPath}`);
    console.log(`   📊 Developments: ${projectData.developments.length}`);
    console.log(`   🏠 Bedrooms: ${projectData.bedrooms.join(', ')}`);
    console.log('');
  }
  
  console.log('✅ All communities split successfully!\n');
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});

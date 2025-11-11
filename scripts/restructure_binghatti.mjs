#!/usr/bin/env node

/**
 * Binghatti Data Restructuring Script
 * ====================================
 * 
 * This script:
 * 1. Splits the all.json file into individual community folders
 * 2. Creates proper project structure following the standard format
 * 3. Normalizes all array fields (bedrooms, amenities, etc.)
 * 4. Creates meta.json for the developer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const BINGHATTI_DIR = path.join(DATA_DIR, 'binghatti');
const COMMUNITIES_FILE = path.join(BINGHATTI_DIR, 'communities/all.json');

// Utility: Create slug from name
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Utility: Normalize bedrooms to array
function normalizeBedrooms(unitTypes) {
  const bedroomsSet = new Set();
  
  if (!Array.isArray(unitTypes)) return [0, 1, 2, 3];
  
  unitTypes.forEach(unit => {
    if (typeof unit.bedrooms === 'number') {
      bedroomsSet.add(unit.bedrooms);
    }
  });
  
  return Array.from(bedroomsSet).sort((a, b) => a - b);
}

// Utility: Extract price range from unit types
function extractPriceRange(unitTypes) {
  if (!Array.isArray(unitTypes) || unitTypes.length === 0) {
    return { min: null, max: null, currency: 'AED' };
  }
  
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  
  unitTypes.forEach(unit => {
    if (unit.price_range_aed) {
      const priceStr = unit.price_range_aed.replace(/,/g, '');
      const matches = priceStr.match(/(\d+(?:\.\d+)?)/g);
      
      if (matches && matches.length > 0) {
        const prices = matches.map(p => parseFloat(p));
        minPrice = Math.min(minPrice, ...prices);
        maxPrice = Math.max(maxPrice, ...prices);
      }
    }
  });
  
  return {
    min: minPrice === Infinity ? null : minPrice,
    max: maxPrice === -Infinity ? null : maxPrice,
    currency: 'AED'
  };
}

// Utility: Normalize amenities
function normalizeAmenities(amenitiesList) {
  if (!Array.isArray(amenitiesList)) return [];
  
  return amenitiesList.map(amenity => {
    if (typeof amenity === 'string') {
      return { ar: amenity, en: amenity };
    }
    return amenity;
  });
}

// Main conversion function
function convertCommunityToProject(community, developerInfo) {
  const projectSlug = createSlug(community.communityName.en);
  
  // Get all developments from this community
  const developments = community.project_developments || [];
  
  // Create main project structure
  const project = {
    projectName: community.communityName,
    developer: {
      ar: 'بن غاطي',
      en: 'Binghatti'
    },
    developerSlug: 'binghatti',
    location: {
      city: community.city,
      area: community.communityName,
      coordinates: {
        lat: community.latitude || 25.2048,
        lng: community.longitude || 55.2708
      },
      address: community.location
    },
    description: community.description,
    
    // Property types based on unit types
    propertyTypes: ['Apartment', 'Residential'].map(type => ({
      ar: type === 'Apartment' ? 'شقة' : 'سكني',
      en: type
    })),
    
    // Bedrooms from all developments
    bedrooms: normalizeBedrooms(
      developments.flatMap(dev => dev.unit_types || [])
    ),
    
    // Price range
    priceRange: extractPriceRange(
      developments.flatMap(dev => dev.unit_types || [])
    ),
    
    // Status
    status: 'under-construction',
    
    // Delivery
    deliveryDate: developments[0]?.delivery_date || 'Q4 2026',
    
    // Amenities - combine community and project amenities
    amenities: normalizeAmenities([
      ...(community.community_amenities || []),
      ...developments.flatMap(dev => dev.amenities || [])
    ]).slice(0, 20), // Limit to 20 most important
    
    // Gallery
    gallery: {
      images: [],
      videos: []
    },
    
    // Floor plans
    floorPlans: [],
    
    // Features
    features: {
      transportation: community.transportation,
      investmentHighlights: community.investment_highlights || [],
      nearbyAttractions: community.nearby_attractions || []
    },
    
    // Contact
    contact: {
      phone: developerInfo.phone,
      whatsapp: developerInfo.whatsapp,
      email: 'info@binghatti.com',
      website: developerInfo.website
    },
    
    // Metadata
    metadata: {
      totalProjects: community.total_projects,
      totalUnits: developments.reduce((sum, dev) => sum + (dev.total_units || 0), 0),
      lastUpdated: new Date().toISOString(),
      dataSource: 'binghatti-communities'
    },
    
    // Sub-developments (if multiple developments in community)
    developments: developments.map(dev => ({
      name: dev.development_name,
      slug: createSlug(dev.development_name.en),
      category: dev.project_category,
      totalUnits: dev.total_units,
      unitTypes: dev.unit_types,
      deliveryDate: dev.delivery_date,
      status: dev.project_status,
      amenities: normalizeAmenities(dev.amenities || [])
    }))
  };
  
  return { slug: projectSlug, data: project };
}

// Main execution
async function main() {
  console.log('🚀 Starting Binghatti data restructuring...\n');
  
  // Read the communities file
  let communitiesData;
  try {
    const fileContent = fs.readFileSync(COMMUNITIES_FILE, 'utf8');
    communitiesData = JSON.parse(fileContent);
  } catch (error) {
    console.error('❌ Error reading communities file:', error.message);
    process.exit(1);
  }
  
  const masterData = communitiesData.binghatti_communities_master;
  const communities = masterData.communities;
  const baseContact = masterData.base_contact_info;
  
  console.log(`📊 Found ${communities.length} communities to process\n`);
  
  // Create projects directory if it doesn't exist
  const projectsDir = path.join(BINGHATTI_DIR, 'projects');
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }
  
  const processedProjects = [];
  
  // Process each community
  for (const community of communities) {
    const { slug, data } = convertCommunityToProject(community, baseContact);
    
    console.log(`📝 Processing: ${community.communityName.en}`);
    console.log(`   Slug: ${slug}`);
    console.log(`   Developments: ${community.project_developments?.length || 0}`);
    
    // Create project directory
    const projectDir = path.join(projectsDir, slug);
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }
    
    // Write index.json
    const indexPath = path.join(projectDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(data, null, 2), 'utf8');
    
    console.log(`   ✅ Created: ${indexPath}`);
    
    processedProjects.push({
      slug,
      name: data.projectName,
      totalUnits: data.metadata.totalUnits,
      bedrooms: data.bedrooms
    });
    
    console.log('');
  }
  
  // Create developer meta.json
  const metaData = {
    developer: {
      ar: 'بن غاطي',
      en: 'Binghatti'
    },
    slug: 'binghatti',
    description: {
      ar: 'شركة بن غاطي العقارية - مطور عقاري رائد في دبي متخصص في المشاريع السكنية الفاخرة والمبتكرة',
      en: 'Binghatti Properties - Leading Dubai real estate developer specializing in luxurious and innovative residential projects'
    },
    logo: '/brand/developers/binghatti-logo.svg',
    website: baseContact.website,
    contact: {
      phone: baseContact.phone,
      whatsapp: baseContact.whatsapp,
      email: 'info@binghatti.com'
    },
    statistics: {
      totalProjects: processedProjects.length,
      totalUnits: processedProjects.reduce((sum, p) => sum + p.totalUnits, 0),
      locations: communities.map(c => c.communityName.en)
    },
    projects: processedProjects,
    lastUpdated: new Date().toISOString()
  };
  
  const metaPath = path.join(BINGHATTI_DIR, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(metaData, null, 2), 'utf8');
  
  console.log('📋 Summary:');
  console.log('━'.repeat(50));
  console.log(`✅ Total projects created: ${processedProjects.length}`);
  console.log(`✅ Total units: ${metaData.statistics.totalUnits}`);
  console.log(`✅ Developer meta: ${metaPath}`);
  console.log('━'.repeat(50));
  console.log('\n🎉 Restructuring complete!\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

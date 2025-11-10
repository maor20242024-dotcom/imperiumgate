// lib/unifiedDataService.ts
import fs from 'fs';
import path from 'path';
import type { MaybeLocalized, Project } from './types';

function slugify(input: string): string {
  const base = (input || '').toString()
    .replace(/\.[^.]+$/, '') // drop extension
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-zA-Z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  return base || 'project';
}

function generateSlug(p: any, filename: string): string {
  if (typeof p?.slug === 'string' && p.slug.trim()) {
    return slugify(p.slug.trim());
  }
  const name = typeof p?.projectName === 'string'
    ? p.projectName
    : (typeof p?.projectName === 'object' ? (p.projectName.en || p.projectName.ar || '') : '');
  if (name && name.trim()) {
    return slugify(name.trim());
  }
  return slugify(filename);
}

// Arabic-to-English fallback system
function applyLanguageFallback(field: any): MaybeLocalized | undefined {
  if (!field) return undefined;
  
  if (typeof field === 'string') {
    return field.trim() || undefined;
  }
  
  if (typeof field === 'object' && field !== null) {
    const en = typeof field.en === 'string' ? field.en.trim() : '';
    const ar = typeof field.ar === 'string' ? field.ar.trim() : '';
    
    // If Arabic is missing or empty, use English
    const finalAr = ar || en;
    // If English is missing or empty, use Arabic
    const finalEn = en || ar;
    
    // Only return if we have at least one valid value
    if (finalEn || finalAr) {
      return {
        en: finalEn || undefined,
        ar: finalAr || undefined
      };
    }
  }
  
  return undefined;
}

// Enhanced field validation and normalization
function validateAndNormalizeProject(rawProject: any, filename: string, developerName: string): Project | null {
  try {
    // Essential fields validation
    const projectName = applyLanguageFallback(rawProject.projectName || rawProject.title || rawProject.name);
    if (!projectName) {
      console.warn(`⚠️ Skipping project in ${filename}: missing projectName/title`);
      return null;
    }

    // Generate slug with fallback
    const slug = generateSlug(rawProject, filename);
    
    // Create base project with required fields
    const project: Project = {
      slug,
      id: rawProject.id || `${developerName.toLowerCase()}-${slug}`,
      developer: developerName,
      projectName,
      
      // Apply fallback to all localized fields
      country: applyLanguageFallback(rawProject.country),
      city: applyLanguageFallback(rawProject.city),
      area: applyLanguageFallback(rawProject.area),
      location: applyLanguageFallback(rawProject.location),
      description: applyLanguageFallback(rawProject.description),
      summary: applyLanguageFallback(rawProject.summary),
      insights: applyLanguageFallback(rawProject.insights),
      mapDescription: applyLanguageFallback(rawProject.mapDescription),
      projectStatus: applyLanguageFallback(rawProject.projectStatus),
      
      // Numeric fields with validation
      minPriceAED: typeof rawProject.minPriceAED === 'number' ? rawProject.minPriceAED : 
                   typeof rawProject.minPrice === 'number' ? rawProject.minPrice : undefined,
      maxPriceAED: typeof rawProject.maxPriceAED === 'number' ? rawProject.maxPriceAED : 
                   typeof rawProject.maxPrice === 'number' ? rawProject.maxPrice : undefined,
      
      minAreaSqft: typeof rawProject.minAreaSqft === 'number' ? rawProject.minAreaSqft : 
                   typeof rawProject.areaMin === 'number' ? rawProject.areaMin : undefined,
      maxAreaSqft: typeof rawProject.maxAreaSqft === 'number' ? rawProject.maxAreaSqft : 
                   typeof rawProject.areaMax === 'number' ? rawProject.areaMax : undefined,
      
      // Coordinates with validation
      latitude: typeof rawProject.latitude === 'number' ? rawProject.latitude : undefined,
      longitude: typeof rawProject.longitude === 'number' ? rawProject.longitude : undefined,
      
      // Media links with validation
      heroImage: typeof rawProject.heroImage === 'string' ? rawProject.heroImage.trim() || undefined : undefined,
      videoLink: typeof rawProject.videoLink === 'string' ? rawProject.videoLink.trim() || undefined : undefined,
      brochurePdfLink: typeof rawProject.brochurePdfLink === 'string' ? rawProject.brochurePdfLink.trim() || undefined : 
                       typeof rawProject.pdf === 'string' ? rawProject.pdf.trim() || undefined : undefined,
      '3D_TourLink': typeof rawProject['3D_TourLink'] === 'string' ? rawProject['3D_TourLink'].trim() || undefined : undefined,
      
      // Arrays with validation
      galleryImages: Array.isArray(rawProject.galleryImages) ? 
        rawProject.galleryImages.filter((img: any) => typeof img === 'string' && img.trim()) : 
        Array.isArray(rawProject.images) ? 
        rawProject.images.filter((img: any) => typeof img === 'string' && img.trim()) : [],
      
      bedrooms: Array.isArray(rawProject.bedrooms) ? rawProject.bedrooms : undefined,
      
      // Dates with validation
      launchDate: typeof rawProject.launchDate === 'string' ? rawProject.launchDate.trim() || undefined : undefined,
      deliveryDate: typeof rawProject.deliveryDate === 'string' ? rawProject.deliveryDate.trim() || undefined : 
                    typeof rawProject.handover === 'string' ? rawProject.handover.trim() || undefined : undefined,
      
      // Boolean fields
      goldenVisaEligible: typeof rawProject.goldenVisaEligible === 'boolean' ? rawProject.goldenVisaEligible : undefined,
      sellable: typeof rawProject.sellable === 'boolean' ? rawProject.sellable : true,
      
      // Complex objects
      amenities: Array.isArray(rawProject.amenities) ? 
        rawProject.amenities.map((amenity: any) => ({
          name: applyLanguageFallback(amenity.name) || { en: 'Amenity', ar: 'مرفق' },
          description: applyLanguageFallback(amenity.description)
        })).filter((a: any) => a.name) : [],
      
      mapPointsOfInterest: [],
      news: Array.isArray(rawProject.news) ? rawProject.news : [],
      contact: typeof rawProject.contact === 'object' ? rawProject.contact : undefined,
      
      // Additional fields
      projectPageLink: typeof rawProject.projectPageLink === 'string' ? rawProject.projectPageLink.trim() || undefined : undefined,
      projectID: rawProject.projectID || rawProject.id || slug,
    };

    // Normalize POIs with fallback
    if (rawProject.mapPointsOfInterest) {
      if (Array.isArray(rawProject.mapPointsOfInterest)) {
        project.mapPointsOfInterest = rawProject.mapPointsOfInterest.map((poi: any) => ({
          name: applyLanguageFallback(poi.name) || { en: 'Point of Interest', ar: 'نقطة اهتمام' },
          distance: applyLanguageFallback(poi.distance),
          category: typeof poi.category === 'string' ? poi.category : 'general',
          coordinates: (typeof poi.coordinates === 'object' && poi.coordinates && 
                       typeof poi.coordinates.lat === 'number' && typeof poi.coordinates.lon === 'number') ? 
                       poi.coordinates : { lat: 0, lon: 0 }
        }));
      } else if (typeof rawProject.mapPointsOfInterest === 'object') {
        const poisArray: any[] = [];
        Object.entries(rawProject.mapPointsOfInterest).forEach(([category, items]) => {
          if (Array.isArray(items)) {
            items.forEach((item: any) => {
              if (typeof item === 'string') {
                poisArray.push({
                  name: { en: item, ar: item },
                  category: category,
                  coordinates: { lat: 0, lon: 0 }
                });
              } else if (typeof item === 'object') {
                poisArray.push({
                  name: applyLanguageFallback(item.name) || { en: item, ar: item },
                  distance: applyLanguageFallback(item.distance),
                  category: category,
                  coordinates: (typeof item.coordinates === 'object' && item.coordinates) ? 
                              item.coordinates : { lat: 0, lon: 0 }
                });
              }
            });
          }
        });
        project.mapPointsOfInterest = poisArray;
      }
    }

    return project;
  } catch (error) {
    console.warn(`⚠️ Error normalizing project in ${filename}:`, error);
    return null;
  }
}

function readJSONFile(filePath: string): any[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.trim()) {
      console.warn(`⚠️ Empty file: ${filePath}`);
      return [];
    }
    
    const json = JSON.parse(content);
    if (Array.isArray(json)) return json;
    return [json];
  } catch (error) {
    console.warn(`⚠️ Failed to parse JSON file ${filePath}:`, error);
    return [];
  }
}

function loadFromDeveloperDir(developerDir: string, developerName: string): Project[] {
  const results: Project[] = [];
  const SKIP_SUBDIRS = new Set(['emarfull', '_raw', '_reports', 'logs', 'quarantine', 'archive', 'emarmasf']);
  const SKIP_TOP_JSON = new Set(['provider_profile.json', 'manifest_emaar.json', 'index.json', 'projects_index.json', 'policies.json']);
  
  try {
    const entries = fs.readdirSync(developerDir, { withFileTypes: true });
    
    for (const entry of entries) {
      try {
        if (entry.isFile() && entry.name.endsWith('.json')) {
          // Skip company-level or non-project JSON files at the developer root
          if (SKIP_TOP_JSON.has(entry.name)) continue;
          const filePath = path.join(developerDir, entry.name);
          const items = readJSONFile(filePath);
          
          items.forEach((rawProject: any) => {
            const normalizedProject = validateAndNormalizeProject(rawProject, entry.name, developerName);
            if (normalizedProject) {
              results.push(normalizedProject);
            }
          });
          
        } else if (entry.isDirectory()) {
          // Skip raw and non-UI directories to avoid duplicates
          if (SKIP_SUBDIRS.has(entry.name)) continue;
          const subdir = path.join(developerDir, entry.name);
          const canonical = path.join(subdir, `${entry.name}.json`);
          let items: any[] = [];
          
          if (fs.existsSync(canonical)) {
            items = readJSONFile(canonical);
          } else {
            try {
              const subentries = fs.readdirSync(subdir, { withFileTypes: true });
              for (const se of subentries) {
                if (se.isFile() && se.name.endsWith('.json')) {
                  const fp = path.join(subdir, se.name);
                  const read = readJSONFile(fp);
                  items.push(...read);
                }
              }
            } catch (error) {
              console.warn(`⚠️ Failed to read subdirectory ${subdir}:`, error);
            }
          }
          
          items.forEach((rawProject: any) => {
            const normalizedProject = validateAndNormalizeProject(rawProject, entry.name, developerName);
            if (normalizedProject) {
              results.push(normalizedProject);
            }
          });
        }
      } catch (error) {
        console.warn(`⚠️ Failed to process entry ${entry.name} in ${developerDir}:`, error);
      }
    }
  } catch (error) {
    console.warn(`⚠️ Failed to read developer directory ${developerDir}:`, error);
  }
  
  return results;
}

// 🔥 DYNAMIC LOADING SYSTEM - No more all_projects.json dependency!
let projectsCache: Project[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

export async function loadAllProjects(): Promise<Project[]> {
  // Use cache if available and not expired
  if (projectsCache && (Date.now() - cacheTimestamp) < CACHE_DURATION) {
    return projectsCache;
  }

  const dataRoot = path.join(process.cwd(), 'public', 'data');
  let projects: Project[] = [];

  try {
    const devEntries = fs.readdirSync(dataRoot, { withFileTypes: true });
    
    for (const d of devEntries) {
      if (!d.isDirectory()) continue;
      
      const developerName = d.name;
      // Skip non-developer directories
      if (['node_modules', '.git', '.next', '.DS_Store'].includes(developerName)) continue;
      // Ignore backup or hidden providers (underscore-prefixed)
      if (developerName.startsWith('_')) continue;
      
      const developerDir = path.join(dataRoot, developerName);
      
      try {
        const items = loadFromDeveloperDir(developerDir, developerName);
        if (items.length > 0) {
          projects.push(...items);
          console.log(`✅ Loaded ${items.length} projects from ${developerName}`);
        } else {
          console.warn(`⚠️ No valid projects found in ${developerName}`);
        }
      } catch (error) {
        console.warn(`⚠️ Failed to load projects from ${developerName}:`, error);
        // Continue with other developers - don't break the entire system
        continue;
      }
    }
  } catch (error) {
    console.warn(`⚠️ Failed to read developer directories:`, error);
  }

  console.log(`🚀 DYNAMIC LOADING: Total ${projects.length} projects loaded from individual JSON files`);
  
  // Update cache
  projectsCache = projects;
  cacheTimestamp = Date.now();
  
  // إرجاع مصفوفة فارغة بدلاً من إيقاف التطبيق في حالة عدم وجود بيانات
  return projects;
}

export async function getProjectBySlug(dev: string, slug: string): Promise<Project | undefined> {
  // Try to load the project from the file system directly for full data (including units.json)
  const projectDir = path.join(process.cwd(), 'public', 'data', dev, 'projects', slug);
  const indexPath = path.join(projectDir, 'index.json');
  const unitsPath = path.join(projectDir, 'units.json');
  if (fs.existsSync(indexPath)) {
    try {
      const project: Project = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
      if (fs.existsSync(unitsPath)) {
        const units = JSON.parse(fs.readFileSync(unitsPath, 'utf-8'));
        project.units = units;
      }
      return project;
    } catch (e) {
      console.warn('Failed to load project or units.json:', e);
      return undefined;
    }
  }
  // fallback to cache/legacy
  const all = await loadAllProjects();
  return all.find(p => (p.developer === dev) && (p.slug === slug));
}

export async function getProjectsByDeveloper(dev: string): Promise<Project[]> {
  const allProjects = await loadAllProjects();
  return allProjects.filter(p => p.developer === dev);
}

export async function listDevelopers(): Promise<{ developer: string; count: number }[]> {
  const counts = new Map<string, number>();
  const allProjects = await loadAllProjects();
  for (const p of allProjects) {
    if (!p.developer) continue;
    counts.set(p.developer, (counts.get(p.developer) || 0) + 1);
  }
  return Array.from(counts.entries()).map(([developer, count]) => ({ developer, count }));
}

// Server-only synchronous loader moved to a separate file to avoid
// bundling Node modules like 'fs' into client builds.

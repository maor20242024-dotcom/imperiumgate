import { Project, MaybeLocalized } from '@/lib/types';

// Developer names mapping
export const DEVELOPERS = {
  emaar: 'Emaar',
  damac: 'DAMAC',
  nakheel: 'Nakheel',
  sobha: 'Sobha'
} as const;

export type DeveloperKey = keyof typeof DEVELOPERS;

// Dynamically fetch slugs from the filesystem via API, with static fallback
export async function fetchDeveloperSlugs(developer: DeveloperKey): Promise<string[]> {
  try {
    const res = await fetch(`/api/public-data/${developer}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch slugs');
    const data = await res.json();
    return Array.isArray(data?.slugs) ? (data.slugs as string[]) : [];
  } catch (error) {
    console.warn(`Falling back to empty list for ${developer}:`, error);
    return [];
  }
}

// Interface for map marker data
export interface MapMarker {
  id: string;
  name: string;
  developer: string;
  latitude: number;
  longitude: number;
  slug: string;
  location?: string;
  price?: string;
  status?: string;
  type?: string;
  image?: string;
}

// Load a single project
export async function loadProject(developer: DeveloperKey, slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`/data/${developer}/projects/${slug}.json`);
    if (!response.ok) return null;
    
    const project = await response.json();
    return {
      ...project,
      developer: DEVELOPERS[developer],
      slug
    };
  } catch (error) {
    console.error(`Error loading project ${developer}/${slug}:`, error);
    return null;
  }
}

// Load all projects for a developer
export async function loadDeveloperProjects(developer: DeveloperKey): Promise<Project[]> {
  const projects: Project[] = [];
  const files = await fetchDeveloperSlugs(developer);
  
  for (const slug of files) {
    const project = await loadProject(developer, slug);
    if (project) {
      projects.push(project);
    }
  }
  
  return projects;
}

// Load all projects from all developers
export async function loadAllProjects(): Promise<Project[]> {
  const allProjects: Project[] = [];
  
  for (const developer of Object.keys(DEVELOPERS) as DeveloperKey[]) {
    const projects = await loadDeveloperProjects(developer);
    allProjects.push(...projects);
  }
  
  return allProjects;
}

// Helper function to safely extract text from MaybeLocalized values
function getLocalizedText(value: MaybeLocalized | undefined, fallback: string = ''): string {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || value.ar || fallback;
}

// Convert projects to map markers
export function projectsToMapMarkers(projects: Project[]): MapMarker[] {
  return projects
    .filter(project => {
      // Only include projects with valid coordinates
      const lat = project.latitude;
      const lng = project.longitude;
      return lat && lng && 
             typeof lat === 'number' && typeof lng === 'number' &&
             !isNaN(lat) && !isNaN(lng) && 
             Math.abs(lat) > 0.001 && Math.abs(lng) > 0.001; // Avoid placeholder coordinates
    })
    .map(project => ({
      id: `${project.developer}-${project.slug}`,
      name: getLocalizedText(project.projectName, 'Unknown Project'),
      developer: project.developer || 'Unknown Developer',
      latitude: project.latitude!,
      longitude: project.longitude!,
      slug: project.slug,
      location: getLocalizedText(project.location) || getLocalizedText(project.area) || getLocalizedText(project.city),
      price: typeof project.minPriceAED === 'number' ? `AED ${project.minPriceAED.toLocaleString()}` : undefined,
      status: getLocalizedText(project.projectStatus),
      type: getLocalizedText(project.propertyTypes?.[0]),
      image: project.galleryImages?.[0] || project.heroImage || '/media/logo.png'
    }));
}

// Load all map markers
export async function loadAllMapMarkers(): Promise<MapMarker[]> {
  const projects = await loadAllProjects();
  return projectsToMapMarkers(projects);
}

// Get projects by location/area
export function getProjectsByArea(projects: Project[], area: string): Project[] {
  return projects.filter(project => {
    const location = typeof project.location === 'string' 
      ? project.location 
      : project.location?.en || '';
    return location.toLowerCase().includes(area.toLowerCase());
  });
}

// Get projects by developer
export function getProjectsByDeveloper(projects: Project[], developer: string): Project[] {
  return projects.filter(project => 
    project.developer && project.developer.toLowerCase() === developer.toLowerCase()
  );
}

// Get projects by price range
export function getProjectsByPriceRange(projects: Project[], minPrice: number, maxPrice: number): Project[] {
  return projects.filter(project => {
    const priceStr = project.price?.en || project.price || '';
    const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
}

// Communities API helpers
export async function loadDeveloperCommunities(developer: DeveloperKey): Promise<string[]> {
  try {
    const res = await fetch(`/api/public-data/${developer}/communities`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch communities');
    const data = await res.json();
    return Array.isArray(data?.communities) ? (data.communities as string[]) : [];
  } catch (error) {
    console.warn(`Falling back to empty communities for ${developer}:`, error);
    return [];
  }
}

export async function loadCommunityProjects(developer: DeveloperKey, community: string): Promise<string[]> {
  try {
    const res = await fetch(`/api/public-data/${developer}/communities/${community}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch community projects');
    const data = await res.json();
    return Array.isArray(data?.projects) ? (data.projects as string[]) : [];
  } catch (error) {
    console.warn(`Falling back to empty projects for community ${community} in ${developer}:`, error);
    return [];
  }
}

// Server-only helpers moved to '@/lib/data/server' to avoid bundling Node modules in client builds.

// Folder-first ProjectMeta type for server-loaded projects
// Note: Server-only helpers live in '@/lib/data/server'.
// Do not import server modules (e.g., 'fs') here to keep client bundles clean.

// lib/projects.ts - ISR Cache Implementation for Imperium Gate
import { unstable_cache } from 'next/cache';
import type { Project } from './types';
import { 
  loadAllProjects as _loadAllProjects,
  getProjectBySlug as _getProjectBySlug,
  getProjectsByDeveloper as _getProjectsByDeveloper,
  listDevelopers as _listDevelopers
} from './unifiedDataService';

// Cache tags for selective revalidation
export const PROJECT_CACHE_TAGS = { // Renamed to avoid conflict with CACHE_TAGS in revalidate-actions.ts
  ALL_PROJECTS: 'all-projects',
  DEVELOPERS: 'developers',
  PROJECT_BY_SLUG: 'project-by-slug',
  PROJECTS_BY_DEVELOPER: 'projects-by-developer'
} as const;

// Cache durations (in seconds)
const CACHE_DURATIONS = {
  ALL_PROJECTS: 3600, // 1 hour
  DEVELOPERS: 7200, // 2 hours
  PROJECT_DETAILS: 1800, // 30 minutes
  DEVELOPER_PROJECTS: 1800 // 30 minutes
} as const;

/**
 * Cached version of loadAllProjects with ISR
 * Revalidates every hour or on-demand
 */
export const loadAllProjects = unstable_cache(
  async (): Promise<Project[]> => {
    console.log('🔄 Loading all projects (cache miss)');
    return await _loadAllProjects();
  },
  [PROJECT_CACHE_TAGS.ALL_PROJECTS], // Correct usage of tags array
  {
    tags: [PROJECT_CACHE_TAGS.ALL_PROJECTS],
    revalidate: CACHE_DURATIONS.ALL_PROJECTS,
  }
);

/**
 * Cached version of getProjectBySlug with ISR
 * Revalidates every 30 minutes or on-demand
 */
export const getProjectBySlug = unstable_cache(
  async (developerSlug: string, projectSlug: string): Promise<Project | null> => {
    console.log(`🔄 Loading project ${developerSlug}/${projectSlug} (cache miss)`);
    const result = await _getProjectBySlug(developerSlug, projectSlug);
    return result || null;
  },
  [PROJECT_CACHE_TAGS.PROJECT_BY_SLUG],
  {
    tags: [PROJECT_CACHE_TAGS.PROJECT_BY_SLUG],
    revalidate: CACHE_DURATIONS.PROJECT_DETAILS,
  }
);

/**
 * Cached version of getProjectsByDeveloper with ISR
 * Revalidates every 30 minutes or on-demand
 */
export const getProjectsByDeveloper = unstable_cache(
  async (developerSlug: string): Promise<Project[]> => {
    console.log(`🔄 Loading projects for developer ${developerSlug} (cache miss)`);
    return await _getProjectsByDeveloper(developerSlug);
  },
  [PROJECT_CACHE_TAGS.PROJECTS_BY_DEVELOPER],
  {
    tags: [PROJECT_CACHE_TAGS.PROJECTS_BY_DEVELOPER],
    revalidate: CACHE_DURATIONS.DEVELOPER_PROJECTS,
  }
);

/**
 * Cached version of listDevelopers with ISR
 * Revalidates every 2 hours or on-demand
 */
export const listDevelopers = unstable_cache(
  async (): Promise<any[]> => {
    console.log('🔄 Loading developers list (cache miss)');
    return await _listDevelopers();
  },
  [PROJECT_CACHE_TAGS.DEVELOPERS],
  {
    tags: [PROJECT_CACHE_TAGS.DEVELOPERS],
    revalidate: CACHE_DURATIONS.DEVELOPERS,
  }
);

// Helper to get all developer parameters for generateStaticParams
export async function getAllDeveloperParams() {
  const developers = await listDevelopers();
  const params: { developer: string; locale: 'ar' | 'en' }[] = [];
  
  developers.forEach(dev => {
    if (dev.slug) {
      params.push({ developer: dev.slug, locale: 'ar' });
      params.push({ developer: dev.slug, locale: 'en' });
    }
  });
  return params;
}

// Helper to get all project parameters for generateStaticParams
export async function getAllProjectParams() {
  const allProjects = await loadAllProjects();
  const params: { developer: string; slug: string; locale: 'ar' | 'en' }[] = [];

  allProjects.forEach(project => {
    const developerSlug = (typeof project.developer === 'string') 
      ? project.developer 
      : (project.developer as any)?.slug;
    if (developerSlug && project.slug) {
      params.push({ developer: developerSlug, slug: project.slug, locale: 'ar' });
      params.push({ developer: developerSlug, slug: project.slug, locale: 'en' });
    }
  });
  return params;
}

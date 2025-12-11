
import path from 'path';
import fs from 'fs-extra';
import {
  getProjectsByDeveloper,
  getCommunitiesByDeveloper,
  getProjectBySlug,
  getCommunityBySlug
} from './unifiedDataService';

export async function getAllDevelopers() {
  const outDir = path.join(process.cwd(), 'public', 'data');
  if (!await fs.pathExists(outDir)) return [];
  const entries = await fs.readdir(outDir);
  // Filter out non-directories and hidden files
  return entries.filter(e => !e.startsWith('.') && fs.statSync(path.join(outDir, e)).isDirectory());
}

export async function getDeveloperData(dev: string, type: 'communities' | 'projects') {
  if (type === 'projects') {
    return getProjectsByDeveloper(dev);
  } else {
    return getCommunitiesByDeveloper(dev);
  }
}

export async function getDeveloperSummary(devSlug: string) {
  const communities = await getDeveloperData(devSlug, 'communities');
  const projects = await getDeveloperData(devSlug, 'projects');

  // Calculate unique communities in projects if not present in communities list
  const projectCommunitySlugs = new Set(
    projects.map((p: any) => p.community_slug).filter(Boolean)
  );

  const totalProjects = projects.length;
  // If we have explicit communities, use that count. Otherwise fall back to unique community slugs in projects.
  const totalCommunities = communities.length > 0 ? communities.length : projectCommunitySlugs.size;

  return {
    communities,
    projects,
    counts: {
      projects: totalProjects,
      communities: totalCommunities,
    },
  };
}

export async function getCommunityDetails(devSlug: string, communitySlug: string) {
  // Optimized to use direct fetch
  const community = await getCommunityBySlug(devSlug, communitySlug);

  // We still need all projects to filter by community
  const projects = await getProjectsByDeveloper(devSlug);
  const projectsInCommunity = projects.filter((p: any) => p.community_slug === communitySlug);

  return {
    community,
    projects: projectsInCommunity
  };
}

export async function getProjectDetails(devSlug: string, projectSlug: string) {
  return getProjectBySlug(devSlug, projectSlug);
}

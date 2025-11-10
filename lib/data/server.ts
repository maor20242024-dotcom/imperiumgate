import { promises as fs } from 'fs';
import path from 'path';

// Server-only helpers for folder-first data access

export async function listDevelopers(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'public', 'data');
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [] as any);
  return entries
    .filter((e: any) => e.isDirectory() && !String(e.name).startsWith('_'))
    .map((e: any) => e.name);
}

async function readJsonIfExists(filePath: string): Promise<any | null> {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

export async function listProjectSlugs(developer: string): Promise<string[]> {
  const base = path.join(process.cwd(), 'public', 'data', developer, 'projects');
  const entries = await fs.readdir(base, { withFileTypes: true }).catch(() => [] as any);
  const dirs = entries.filter((e: any) => e.isDirectory()).map((e: any) => e.name);
  const files = entries.filter((e: any) => e.isFile() && e.name.endsWith('.json')).map((e: any) => e.name.replace(/\.json$/i, ''));
  return Array.from(new Set([...dirs, ...files])).sort();
}

export async function listCommunitySlugs(developer: string): Promise<string[]> {
  const base = path.join(process.cwd(), 'public', 'data', developer, 'communities');
  const entries = await fs.readdir(base, { withFileTypes: true }).catch(() => [] as any);
  const dirs = entries.filter((e: any) => e.isDirectory()).map((e: any) => e.name);
  const files = entries.filter((e: any) => e.isFile() && e.name.endsWith('.json')).map((e: any) => e.name.replace(/\.json$/i, ''));
  return Array.from(new Set([...dirs, ...files])).sort();
}

export async function readProjectData(developer: string, slug: string): Promise<any | null> {
  const base = path.join(process.cwd(), 'public', 'data', developer, 'projects');
  const folderPath = path.join(base, slug, 'index.json');
  const flatPath = path.join(base, `${slug}.json`);
  const [fromFolder, fromFlat] = await Promise.all([readJsonIfExists(folderPath), readJsonIfExists(flatPath)]);
  if (fromFolder && fromFlat) return { ...fromFlat, ...fromFolder };
  return fromFolder || fromFlat || null;
}

export async function readCommunityData(developer: string, slug: string): Promise<any | null> {
  const base = path.join(process.cwd(), 'public', 'data', developer, 'communities');
  const folderPath = path.join(base, slug, 'index.json');
  const flatPath = path.join(base, `${slug}.json`);
  const [fromFolder, fromFlat] = await Promise.all([readJsonIfExists(folderPath), readJsonIfExists(flatPath)]);
  if (fromFolder && fromFlat) return { ...fromFlat, ...fromFolder };
  return fromFolder || fromFlat || null;
}

export async function listCommunityProjectSlugs(developer: string, community: string): Promise<string[]> {
  const dir = path.join(process.cwd(), 'public', 'data', developer, 'communities', community, 'projects');
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [] as any);
  const dirs = entries.filter((e: any) => e.isDirectory()).map((e: any) => e.name);
  const files = entries.filter((e: any) => e.isFile() && e.name.endsWith('.json')).map((e: any) => e.name.replace(/\.json$/i, ''));
  return Array.from(new Set([...dirs, ...files])).sort();
}

// Read a single project nested under a community: communities/<community>/projects/<slug>/project.json
export async function readCommunityProjectData(developer: string, community: string, slug: string): Promise<any | null> {
  const base = path.join(process.cwd(), 'public', 'data', developer, 'communities', community, 'projects');
  const folderPath = path.join(base, slug, 'index.json');
  const flatPath = path.join(base, `${slug}.json`);
  const [fromFolder, fromFlat] = await Promise.all([readJsonIfExists(folderPath), readJsonIfExists(flatPath)]);
  if (fromFolder && fromFlat) return { ...fromFlat, ...fromFolder };
  return fromFolder || fromFlat || null;
}

// List all projects across all developers using folder-first hierarchy.
// Includes projects found directly under `projects/<slug>/project.json` and
// projects nested under `communities/<community>/projects/<slug>/project.json`.
export async function listAllProjectsFolderFirst(): Promise<any[]> {
  const dataRoot = path.join(process.cwd(), 'public', 'data');
  const out: any[] = [];

  // Normalize media-related fields to ensure strings for next/image
  function normalizeProject(project: any, developerKey: string): any {
    const p = { ...project };
    const pickUrl = (v: any): string | undefined => {
      if (!v) return undefined;
      if (typeof v === 'string') return v;
      if (typeof v === 'object') {
        if (typeof v.src === 'string') return v.src;
        if (typeof v.url === 'string') return v.url;
      }
      return undefined;
    };

    const hero = pickUrl(p.heroImage) || (Array.isArray(p.galleryImages) ? pickUrl(p.galleryImages[0]) : undefined);
    if (hero) p.heroImage = hero;

    if (Array.isArray(p.galleryImages)) {
      p.galleryImages = p.galleryImages
        .map((g: any) => pickUrl(g))
        .filter((s: any) => typeof s === 'string' && s.trim());
    }

    // Ensure developer is a string key (folder name)
    p.developer = developerKey;

    // Ensure projectName shape stays intact; no changes here
    return p;
  }

  const devEntries = await fs.readdir(dataRoot, { withFileTypes: true }).catch(() => [] as any);
  const developers = devEntries
    .filter((d: any) => d.isDirectory() && !String(d.name).startsWith('_'))
    .map((d: any) => d.name);

  for (const developer of developers) {
    const projectsDir = path.join(dataRoot, developer, 'projects');
    const projectDirs = await fs.readdir(projectsDir, { withFileTypes: true }).catch(() => [] as any);
    for (const entry of projectDirs) {
      if (!entry.isDirectory()) continue;
      const pjPath = path.join(projectsDir, entry.name, 'index.json');
      try {
        const raw = await fs.readFile(pjPath, 'utf8');
        const json = JSON.parse(raw);
        if (!json.slug) json.slug = entry.name;
        if (!json.id) json.id = `${developer}-${json.slug}`;
        if (!json.developer) json.developer = developer;
        if (!json.projectName?.en) continue;
        out.push({ ...normalizeProject(json, developer), fromCommunity: null });
      } catch {
        // ignore missing or invalid project.json
      }
    }

    // Also include projects nested under communities
    const communitiesDir = path.join(dataRoot, developer, 'communities');
    const commEntries = await fs.readdir(communitiesDir, { withFileTypes: true }).catch(() => [] as any);
    for (const comm of commEntries) {
      if (!comm.isDirectory()) continue;
      const commProjectsDir = path.join(communitiesDir, comm.name, 'projects');
      const commProjectEntries = await fs.readdir(commProjectsDir, { withFileTypes: true }).catch(() => [] as any);
      for (const cp of commProjectEntries) {
        if (!cp.isDirectory()) continue;
        const pjPath = path.join(commProjectsDir, cp.name, 'index.json');
        try {
          const raw = await fs.readFile(pjPath, 'utf8');
          const json = JSON.parse(raw);
          if (!json.slug) json.slug = cp.name;
          if (!json.id) json.id = `${developer}-${json.slug}`;
          if (!json.developer) json.developer = developer;
          if (!json.projectName?.en) continue;
          out.push({ ...normalizeProject(json, developer), fromCommunity: comm.name });
        } catch {
          // ignore
        }
      }
    }
  }

  return out;
}

// Read developer profile JSONs if present
export async function readDeveloperProfile(developer: string): Promise<{ profile?: any; developer?: any }> {
  const base = path.join(process.cwd(), 'public', 'data', developer);
  const [profile, dev] = await Promise.all([
    readJsonIfExists(path.join(base, 'provider-profile.json')),
    readJsonIfExists(path.join(base, 'developer.json')),
  ]);
  return { profile: profile || undefined, developer: dev || undefined };
}

import { promises as fs } from 'fs';
import path from 'path';
import type { Unit } from './unit-types';

async function findImpv5Root(start = process.cwd()) {
  const tries: string[] = []; let cur = start;
  for (let i = 0; i < 6; i++) { tries.push(cur); cur = path.dirname(cur); }
  tries.push(path.join(start, 'impv5'));
  for (const d of tries) {
    try { if (await awaitExists(path.join(d, 'public', 'data'))) return d; } catch {}
  }
  return start;
}

async function awaitExists(p: string) {
  try { await fs.stat(p); return true; } catch { return false; }
}

async function readJSONSafe<T = any>(fp: string): Promise<T | null> {
  try { const txt = await fs.readFile(fp, 'utf-8'); return JSON.parse(txt); } catch { return null; }
}

export async function readUnits(projectSlug: string, developer = 'emaar'): Promise<Unit[]> {
  const root = await  findImpv5Root();
  const unitsDir = path.join(root, 'public', 'data', developer, 'projects', projectSlug, 'units');
  const exists = await awaitExists(unitsDir);
  if (!exists) return [];
  const dirs = await fs.readdir(unitsDir, { withFileTypes: true });
  const unitDirs = dirs.filter(d => d.isDirectory()).map(d => d.name);
  const out: Unit[] = [];
  for (const u of unitDirs) {
    const idx = path.join(unitsDir, u, 'index.json');
    const obj = await readJSONSafe<Unit>(idx);
    if (obj) out.push(obj);
  }
  return out;
}

export async function readUnitsIndex(projectSlug: string, developer = 'emaar') {
  const root = await findImpv5Root();
  const idxPath = path.join(root, 'public', 'data', developer, 'projects', projectSlug, 'units_index.json');
  const idx = await readJSONSafe(idxPath);
  return idx || { project_slug: projectSlug, count: 0, units: [] };
}

export async function listUnitsSummary(projectSlug: string, developer = 'emaar') {
  const units = await readUnits(projectSlug, developer);
  const summary = units.map(u => ({
    unit_code: u.unit_code,
    title: u.title,
    status: u.status,
    pricing: u.pricing,
    area: u.area
  }));
  return { project_slug: projectSlug, count: summary.length, units: summary };
}


import type { MaybeLocalized } from './types';

/**
 * Slugify a string for URL-friendly format
 * Converts string to lowercase, replaces spaces with hyphens, removes special characters
 */
export function slugify(input: string): string {
  const base = (input || '').toString()
    .replace(/\.[^.]+$/, '') // drop extension
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-zA-Z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  return base || 'project';
}

/**
 * Apply Arabic-to-English fallback for localized fields
 * If Arabic is missing, use English. If English is missing, use Arabic.
 */
export function applyLanguageFallback(field: any): MaybeLocalized | undefined {
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

/**
 * Generate a slug from project data with fallbacks
 */
export function generateSlug(project: any, filename: string): string {
  if (typeof project?.slug === 'string' && project.slug.trim()) {
    return slugify(project.slug.trim());
  }
  const name = typeof project?.projectName === 'string'
    ? project.projectName
    : (typeof project?.projectName === 'object' ? (project.projectName.en || project.projectName.ar || '') : '');
  if (name && name.trim()) {
    return slugify(name.trim());
  }
  return slugify(filename);
}

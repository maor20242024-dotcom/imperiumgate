#!/usr/bin/env node

/**
 * Check for Duplicate Slugs
 * ==========================
 * 
 * Verifies that all project slugs are unique across all developers
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const DEVELOPERS = ['binghatti', 'damac', 'emaar', 'nakheel', 'sobha'];

const slugMap = new Map();
let duplicates = 0;

function checkDuplicates() {
  console.log('🔍 Checking for duplicate slugs...\n');
  
  for (const developer of DEVELOPERS) {
    const projectsDir = path.join(DATA_DIR, developer, 'projects');
    
    if (!fs.existsSync(projectsDir)) {
      continue;
    }
    
    const folders = fs.readdirSync(projectsDir);
    
    for (const slug of folders) {
      const key = `${developer}/${slug}`;
      
      if (slugMap.has(slug)) {
        const existing = slugMap.get(slug);
        console.log(`❌ DUPLICATE SLUG: "${slug}"`);
        console.log(`   First seen in: ${existing}`);
        console.log(`   Also found in: ${key}`);
        console.log();
        duplicates++;
      } else {
        slugMap.set(slug, key);
      }
    }
  }
  
  if (duplicates === 0) {
    console.log('✅ No duplicate slugs found!\n');
    console.log(`📊 Total unique slugs: ${slugMap.size}\n`);
  } else {
    console.log(`❌ Found ${duplicates} duplicate slugs\n`);
    process.exit(1);
  }
}

checkDuplicates();

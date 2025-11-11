#!/usr/bin/env node

/**
 * Clean Fake Media Links
 * =======================
 * 
 * Removes non-existent image and video links from projects
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');
const DEVELOPERS = ['binghatti', 'damac', 'emaar', 'nakheel', 'sobha'];

let totalProjects = 0;
let totalCleaned = 0;

function cleanProject(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = false;
    
    // Clean gallery images - remove fake paths
    if (data.gallery?.images && Array.isArray(data.gallery.images)) {
      const originalCount = data.gallery.images.length;
      // Keep only images that don't have predictable patterns like -1.jpg, -2.jpg
      data.gallery.images = data.gallery.images.filter(img => {
        // If it's a local path starting with /images/projects/, it's likely fake
        if (img && img.startsWith('/images/projects/')) {
          return false;
        }
        // Keep external URLs
        return img && (img.startsWith('http://') || img.startsWith('https://'));
      });
      
      if (data.gallery.images.length !== originalCount) {
        modified = true;
      }
    }
    
    // Clean gallery videos - remove fake paths
    if (data.gallery?.videos && Array.isArray(data.gallery.videos)) {
      const originalCount = data.gallery.videos.length;
      data.gallery.videos = data.gallery.videos.filter(video => {
        // If it's a local path starting with /videos/projects/, it's likely fake
        if (video && video.startsWith('/videos/projects/')) {
          return false;
        }
        // Keep external URLs
        return video && (video.startsWith('http://') || video.startsWith('https://'));
      });
      
      if (data.gallery.videos.length !== originalCount) {
        modified = true;
      }
    }
    
    // Clean heroImage if it's a fake local path
    if (data.media?.heroImage && data.media.heroImage.startsWith('/images/projects/')) {
      data.media.heroImage = '';
      modified = true;
    }
    
    // Clean media.gallery if present
    if (data.media?.gallery && Array.isArray(data.media.gallery)) {
      const originalCount = data.media.gallery.length;
      data.media.gallery = data.media.gallery.filter(img => {
        if (img && img.startsWith('/images/projects/')) {
          return false;
        }
        return img && (img.startsWith('http://') || img.startsWith('https://'));
      });
      
      if (data.media.gallery.length !== originalCount) {
        modified = true;
      }
    }
    
    // Clean videoLink if it's a fake local path
    if (data.videoLink && data.videoLink.startsWith('/videos/projects/')) {
      data.videoLink = '';
      modified = true;
    }
    
    // Clean videosLocalized
    if (data.videosLocalized?.en && Array.isArray(data.videosLocalized.en)) {
      const originalCount = data.videosLocalized.en.length;
      data.videosLocalized.en = data.videosLocalized.en.filter(video => {
        if (video && video.startsWith('/videos/projects/')) {
          return false;
        }
        return video && (video.startsWith('http://') || video.startsWith('https://'));
      });
      
      if (data.videosLocalized.en.length !== originalCount) {
        modified = true;
      }
    }
    
    if (data.videosLocalized?.ar && Array.isArray(data.videosLocalized.ar)) {
      const originalCount = data.videosLocalized.ar.length;
      data.videosLocalized.ar = data.videosLocalized.ar.filter(video => {
        if (video && video.startsWith('/videos/projects/')) {
          return false;
        }
        return video && (video.startsWith('http://') || video.startsWith('https://'));
      });
      
      if (data.videosLocalized.ar.length !== originalCount) {
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      totalCleaned++;
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processAllProjects() {
  console.log('🧹 Cleaning fake media links from all projects...\n');
  
  for (const developer of DEVELOPERS) {
    const projectsDir = path.join(DATA_DIR, developer, 'projects');
    
    if (!fs.existsSync(projectsDir)) {
      continue;
    }
    
    const folders = fs.readdirSync(projectsDir);
    let devCleaned = 0;
    
    for (const folder of folders) {
      const indexPath = path.join(projectsDir, folder, 'index.json');
      
      if (fs.existsSync(indexPath)) {
        totalProjects++;
        if (cleanProject(indexPath)) {
          devCleaned++;
        }
      }
    }
    
    console.log(`✅ ${developer.toUpperCase()}: ${devCleaned} projects cleaned`);
  }
}

function main() {
  processAllProjects();
  
  console.log('\n' + '='.repeat(70));
  console.log('📊 CLEANUP SUMMARY');
  console.log('='.repeat(70));
  console.log(`\n📈 Total Projects: ${totalProjects}`);
  console.log(`🧹 Projects Cleaned: ${totalCleaned}`);
  console.log(`✅ Fake media links removed successfully!\n`);
}

main();

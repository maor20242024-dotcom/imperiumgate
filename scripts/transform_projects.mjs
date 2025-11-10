// scripts/transform_projects.mjs
// سكربت تحويل هيكلية المشاريع إلى مجلدات مع index.json
// هذا السكربت يفترض أن المشاريع موجودة في public/data/[developer]/projects/*.json
// وينقل كل ملف إلى مجلد بنفس الاسم مع index.json

import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('public/data');
const logFile = path.resolve(baseDir, 'transform_projects.log');
const developers = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

function log(msg) {
  fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);
}

function transformProjects() {
  log('--- بدء التحويل ---');
  for (const dev of developers) {
    const projectsDir = path.join(baseDir, dev, 'projects');
    if (!fs.existsSync(projectsDir)) continue;
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const slug = file.replace(/\.json$/, '');
      const src = path.join(projectsDir, file);
      const destDir = path.join(projectsDir, slug);
      const dest = path.join(destDir, 'index.json');
      if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
      fs.renameSync(src, dest);
      log(`نقل ${src} → ${dest}`);
    }
  }
  log('--- نهاية التحويل ---');
}

try {
  transformProjects();
  log('تم التحويل بنجاح.');
} catch (e) {
  log('خطأ: ' + e.stack);
  process.exit(1);
}

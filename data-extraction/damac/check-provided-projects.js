import fs from 'fs/promises';
import path from 'path';
import { logProgress } from '../shared/utils.js';

// List of project names (strings) taken from the user's provided list.
const PROVIDED_NAMES = [
  "CHELSEA RESIDENCES",
  "Safa Gate",
  "DAMAC Riverside Views",
  "DAMAC Islands",
  "Violet 4",
  "DAMAC Sun City",
  "Shoreline by DAMAC",
  "ELO 3",
  "DAMAC Riverside",
  "ELO 2",
  "Evergreens",
  "Natura",
  "Autograph Collection",
  "ELO",
  "Couture by Cavalli",
  "Altitude de GRISOGONO",
  "Lagoon Views",
  "Utopia",
  "Park Greens",
  "Golf Gate 2",
  "DAMAC Casa",
  "VOLTA",
  "Morocco – Phase 2",
  "Coral Reef",
  "The Farmhouses",
  "Verona",
  "GOLF GREENS",
  "Skycrest Collection",
  "Bay’s Edge",
  "Canal Crown",
  "Mykonos",
  "Canal Heights",
  "DAMAC Bay 2 by Cavalli",
  "HARBOUR LIGHTS DE GRISOGONO GENEVE",
  "CANAL HEIGHTS 2 de GRISOGONO",
  "DAMAC Bay by Cavalli",
  "DAMAC Hills 2 Hotel Edge by Rotana",
  "Virdis",
  "Ibiza",
  "Costa Brava",
  "Monte Carlo",
  "Elegance Tower",
  "Marbella",
  "Chic Tower",
  "Gems Estates",
  "Beverly Hills Drive",
  "Safa Two de GRISOGONO",
  "Malta",
  "Venice",
  "Cavalli Estates",
  "Safa One de GRISOGONO",
  "Portofino",
  "Golf Gate at DAMAC Hills",
  "Eterno Prestige Villas",
  "Nice",
  "Santorini",
  "Cavalli Tower",
  "Prestige Villas at DAMAC Hills 2",
  "The Legends",
  "Privilege Villas at DAMAC Hills 2",
  "Premier Villas at DAMAC Hills 2",
  "Greenwoods",
  "Green Acres at DAMAC Hills",
  "Canvas Premium Plots at DAMAC Hills",
  "Melrose Estates at Damac Hills",
  "DAMAC Towers by Paramount Hotels And Resorts Dubai",
  "All Seasons Terrace Apartments",
  "DAMAC Paramount Tower Hotel And Residences Dubai",
  "BelAir at The Trump Estates",
  "Silver Springs at DAMAC Hills",
  "Bellavista at DAMAC Hills",
  "Radisson Dubai DAMAC Hills",
  "High Gardens at DAMAC Hills",
  "Loreto at DAMAC Hills",
  "Zada Tower",
  "Fiora",
  "Amora",
  "Park Town at DAMAC Hills",
  "90210 Boutique Villas",
  "Green Park",
  "Reva Residences",
  "The Park Villas at DAMAC Hills",
  "Golf Vita at DAMAC Hills",
  "Veneto Villas at DAMAC Hills",
  "Avencia villas",
  "Royal Golf Boutique Villas",
  "AYKON City Tower C",
  "AYKON City Tower B",
  "Merano Tower",
  "Vera Residences",
  "Avanti",
  "DAMAC Majestine",
  "Ghalia",
  "Kiara at DAMAC Hills"
];

const OUTPUT_DIR = './damac/output';
const UNIQUE_FILE = path.join(OUTPUT_DIR, 'damac-all-projects-unique.json');
const EXISTING_DIR = '/workspaces/imperiumgate/public/data/damac/projects';

function normalize(s){
  return (s||'').toString().trim().toLowerCase().replace(/\s+/g,' ');
}

async function run(){
  logProgress('🔎 فحص المشاريع المرسلة من المستخدم', 'info');
  const dataRaw = await fs.readFile(UNIQUE_FILE, 'utf-8');
  const extracted = JSON.parse(dataRaw);

  const extractedByName = extracted.map(p=>({
    slug: p.slug,
    name_ar: normalize(p.name_ar),
    name_en: normalize(p.name_en),
    community: p.community_slug || p.community_name || 'unknown'
  }));

  const existingDirs = await fs.readdir(EXISTING_DIR).catch(()=>[]);
  const existingSet = new Set(existingDirs.map(d=>normalize(d)));

  const report = {
    timestamp: new Date().toISOString(),
    checked: PROVIDED_NAMES.length,
    present: [],
    missing: []
  };

  for (const name of PROVIDED_NAMES){
    const n = normalize(name);
    // try to match by slug, name_ar, name_en, or contains
    const found = extractedByName.find(p => p.slug === n || p.name_ar.includes(n) || p.name_en.includes(n) || p.slug.includes(n.replace(/ /g,'-')));
    const existsInPublic = existingSet.has(n) || existingSet.has(n.replace(/ /g,'-'));
    if (found){
      report.present.push({provided: name, slug: found.slug, community: found.community});
    } else if (existsInPublic){
      report.present.push({provided: name, slug: name.toLowerCase().replace(/\s+/g,'-'), community: 'existing-folder'});
    } else {
      report.missing.push({provided: name});
    }
  }

  await fs.writeFile(path.join(OUTPUT_DIR, 'provided-list-check.json'), JSON.stringify(report, null, 2));
  console.log('✅ تم إنشاء التقرير: damac/output/provided-list-check.json');
  console.log('\nالملخص:');
  console.log(`  تم فحص: ${report.checked}`);
  console.log(`  موجود: ${report.present.length}`);
  console.log(`  مفقود: ${report.missing.length}`);
  if (report.missing.length>0){
    console.log('\n🔸 المشاريع المفقودة:\n');
    report.missing.forEach((m,i)=> console.log(`  ${i+1}. ${m.provided}`));
  }
}

run().catch(e=>{console.error(e); process.exit(1);});

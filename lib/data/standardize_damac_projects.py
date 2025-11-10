import json
import os
from typing import Dict, Any, List

# Paths to i18n files
I18N_PATH = '/Users/rodolfmichail/Downloads/emaar/impv5/lib/i18n/'
GLOSSARY_AR_EN = os.path.join(I18N_PATH, 'glossary_ar_en.json')
DUBAI_AREAS_EN_AR = os.path.join(I18N_PATH, 'dubai_areas_en_ar.json')
POI_CATEGORIES_EN_AR = os.path.join(I18N_PATH, 'poi_categories_en_ar.json')
DISTANCE_UNITS = os.path.join(I18N_PATH, 'distance_units.json')
PROJECT_TYPES_GLOSSARY = os.path.join(I18N_PATH, 'project_types_glossary.json')
POI_LANDMARKS_EN_AR = os.path.join(I18N_PATH, 'poi_landmarks_en_ar.json')

# Load glossaries
def load_json(file_path: str) -> Dict:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

glossary_ar_en = load_json(GLOSSARY_AR_EN)
dubai_areas_en_ar = load_json(DUBAI_AREAS_EN_AR)
poi_categories_en_ar = load_json(POI_CATEGORIES_EN_AR)
distance_units = load_json(DISTANCE_UNITS)
project_types_glossary = load_json(PROJECT_TYPES_GLOSSARY)
poi_landmarks_en_ar = load_json(POI_LANDMARKS_EN_AR)

# Standard schema for projects
STANDARD_SCHEMA = {
    "slug": "",
    "id": "",
    "project-name": {"ar": "", "en": ""},
    "country": {"ar": "الإمارات العربية المتحدة", "en": "United Arab Emirates"},
    "city": "Dubai",
    "description": {"ar": "", "en": ""},
    "amenities": [],  # List of {"name": {"ar": "", "en": ""}, "description": {"ar": "", "en": ""}}
    "area": {"ar": "", "en": ""},
    "bedrooms": [],
    "brand": "DAMAC",
    "contact": {"phone": "971556628972", "whatsapp": "https://api.whatsapp.com/send/?phone=%2B971556628972&text&type=phone_number&app_absent=0"},
    "delivery-date": "",
    "golden-visa-eligible": False,
    "latitude": 0.0,
    "launch-date": "",
    "location": {"ar": "", "en": ""},
    "longitude": 0.0,
    "map-description": {"ar": "", "en": ""},
    "map-points-of-interest": [],  # List of {"name": {"en": "", "ar": ""}, "distance": {"en": "", "ar": ""}, "category": {"ar": "", "en": ""}}
    "max-area-sqft": 0,
    "min-area-sqft": 0,
    "payment-plan": "",
    "project-status": "",
    "property-types": [],
    "views": [],
    "summary": {"ar": "", "en": ""},
    "hero-copy": {"ar": "", "en": ""},
    "highlights": [],
    "insights": [],
    "project-id": "",
    "developer-id": "",
    "media": {
        "hero-image": "",
        "brochure-pdf-link": "",
        "video-link": "",
        "3-d-tour-link": "",
        "gallery-images": [],
        "gallery": []
    },
    "documents": [],
    "videos-localized": {"en": [], "ar": []},
    "gallery-localized": {"en": [], "ar": []},
    "hero-image-localized": {"en": "", "ar": ""},
    "name": {"ar": "", "en": ""},
    "auto-translated": False,
    "source-path": "",
    "developer": "damac",
    "project-type": ""  # New field for classification: tower, apartments, villas, community
}

# Function to correct bilingual fields
def correct_bilingual(field: Any, glossary: Dict) -> Dict[str, str]:
    if isinstance(field, str):
        en = field
        ar = glossary.get(en.lower(), en) if en.lower() in glossary else field
        if ar == en:
            print(f"Warning: No translation found for '{en}', keeping as is.")
        return {"en": en, "ar": ar}
    elif isinstance(field, dict) and 'en' in field and 'ar' in field:
        if isinstance(field['en'], str) and isinstance(field['ar'], str) and field['en'] == field['ar']:
            ar = glossary.get(field['en'].lower(), field['ar'])
            if ar == field['ar']:
                print(f"Warning: Identical en/ar for '{field['en']}', no better translation found.")
            field['ar'] = ar
        else:
            print(f"Warning: Skipping translation for non-matching or non-string en/ar: {field}")
        return field
    return {"en": "", "ar": ""}

# Function to remove duplicates in lists
def remove_duplicates(lst: List) -> List:
    seen = set()
    unique = []
    for item in lst:
        item_str = json.dumps(item, sort_keys=True)
        if item_str not in seen:
            seen.add(item_str)
            unique.append(item)
    return unique

# Function to classify project type
def classify_project_type(name: str, description: str) -> str:
    name_lower = name.lower()
    desc_lower = description.lower()
    if 'tower' in name_lower or 'tower' in desc_lower:
        return 'tower'
    elif 'apartments' in name_lower or 'apartment' in desc_lower or 'residences' in name_lower:
        return 'apartments'
    elif 'villas' in name_lower or 'villa' in desc_lower:
        return 'villas'
    elif 'community' in name_lower or 'hills' in name_lower or 'lagoons' in name_lower or 'cluster' in name_lower:
        return 'community'
    return 'unknown'

# Function to normalize project structure
def normalize_project(project: Dict[str, Any]) -> Dict[str, Any]:
    normalized = STANDARD_SCHEMA.copy()
    
    # Merge existing keys into standard schema
    for key in project:
        if key in normalized:
            normalized[key] = project[key]
        elif key == 'name':  # Unify 'name' to 'project-name'
            normalized['project-name'] = correct_bilingual(project[key], glossary_ar_en)
        elif key == 'hero-image' or key == 'hero-image-localized' or key == 'media.hero-image':
            normalized['media']['hero-image'] = project[key] if isinstance(project[key], str) else project[key].get('en', '')
        # Add more key mappings as needed
    
    # Correct bilingual fields
    bilingual_fields = ['project-name', 'country', 'description', 'area', 'location', 'map-description', 'summary', 'hero-copy', 'name', 'hero-image-localized']
    for field in bilingual_fields:
        if field in normalized:
            normalized[field] = correct_bilingual(normalized[field], glossary_ar_en)
    
    # Correct amenities
    if 'amenities' in project:
        normalized['amenities'] = remove_duplicates([
            {
                "name": correct_bilingual(amen['name'], glossary_ar_en),
                "description": correct_bilingual(amen.get('description', ''), glossary_ar_en)
            } for amen in project['amenities']
        ])
    
    # Correct map-points-of-interest
    if 'map-points-of-interest' in project:
        normalized['map-points-of-interest'] = remove_duplicates([
            {
                "name": correct_bilingual(poi['name'], poi_landmarks_en_ar),
                "distance": correct_bilingual(poi['distance'], distance_units),
                "category": correct_bilingual(poi['category'], poi_categories_en_ar)
            } for poi in project['map-points-of-interest']
        ])
    
    # Ensure contact
    normalized['contact'] = STANDARD_SCHEMA['contact']
    
    # Classify type
    proj_name = normalized['project-name'].get('en', '')
    desc = normalized['description'].get('en', '')
    normalized['project-type'] = classify_project_type(proj_name, desc)
    
    # Remove duplicates in other arrays
    for arr_key in ['bedrooms', 'property-types', 'views', 'highlights', 'insights', 'documents', 'media.gallery-images', 'media.gallery']:
        if arr_key in normalized:
            normalized[arr_key] = remove_duplicates(normalized[arr_key])
        elif '.' in arr_key:
            parent, child = arr_key.split('.')
            if parent in normalized and child in normalized[parent]:
                normalized[parent][child] = remove_duplicates(normalized[parent][child])
    
    return normalized

# Function to ensure unique slugs and ids
def ensure_unique_projects(projects: List[Dict]) -> List[Dict]:
    slug_count = {}
    id_count = {}
    unique_projects = []
    for proj in projects:
        slug = proj['slug']
        id_ = proj['id']
        
        if slug in slug_count:
            proj['slug'] = f"{slug}-{slug_count[slug]}"
            slug_count[slug] += 1
        else:
            slug_count[slug] = 1
        
        if id_ in id_count:
            proj['id'] = f"{id_}-{id_count[id_]}"
            id_count[id_] += 1
        else:
            id_count[id_] = 1
        
        unique_projects.append(proj)
    
    # Merge duplicates if needed (simple check by slug prefix)
    # For now, just suffixing
    return unique_projects

# Main function
def main(input_file: str, output_file: str):
    with open(input_file, 'r', encoding='utf-8') as f:
        projects = json.load(f)
    
    standardized = [normalize_project(proj) for proj in projects]
    unique_standardized = ensure_unique_projects(standardized)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(unique_standardized, f, ensure_ascii=False, indent=2)
    
    print(f"Standardized {len(unique_standardized)} projects saved to {output_file}")

if __name__ == "__main__":
    input_path = '/Users/rodolfmichail/Downloads/emaar/impv5/public/data/fixed_damac_projects.json'
    output_path = '/Users/rodolfmichail/Downloads/emaar/impv5/public/data/standardized_damac_projects.json'
    main(input_path, output_path)
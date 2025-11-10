import requests
from bs4 import BeautifulSoup
import json

def fetch_page_source(url):
    """جلب مصدر الصفحة الخام باستخدام requests، زي view-source في المتصفح."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }  # لتجنب الحظر، نتصرف زي متصفح حقيقي
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"خطأ في جلب المصدر الخام: {e}")
        return None

def parse_damac_communities(source):
    """تحليل المصدر لاستخراج المجتمعات بناءً على الهيكل المفهوم."""
    soup = BeautifulSoup(source, 'html.parser')
    communities = []
    
    # بناءً على الهيكل المستنتج: المجتمعات في divs مع كلاس 'community' أو مشابه
    community_elements = soup.find_all('div', class_='community-item')  # تعديل إذا لزم: جرب 'grid-item' أو 'card'
    
    for elem in community_elements:
        name_tag = elem.find('h2') or elem.find('h3')  # اسم المجتمع
        name = name_tag.text.strip() if name_tag else 'غير معروف'
        
        description_tag = elem.find('p', class_='description')
        description = description_tag.text.strip() if description_tag else ''
        
        link_tag = elem.find('a', href=True)
        link = link_tag['href'] if link_tag else ''
        
        communities.append({
            'name': name,
            'description': description,
            'link': link
        })
    
    return communities

def scrape_projects_from_community(community_url):
    """جلب مصدر صفحة المجتمع واستخراج المشاريع."""
    source = fetch_page_source(community_url)
    if not source:
        return []
    
    soup = BeautifulSoup(source, 'html.parser')
    projects = []
    
    # افتراض هيكل: المشاريع في كاردات مع كلاس 'project-card'
    project_elements = soup.find_all('div', class_='project-card')  # تعديل إذا لزم: 'property-item' أو 'listing'
    
    for elem in project_elements:
        name_tag = elem.find('h3') or elem.find('h4')
        name = name_tag.text.strip() if name_tag else 'غير معروف'
        
        details_tag = elem.find('div', class_='details') or elem.find('p')
        details = details_tag.text.strip() if details_tag else ''
        
        projects.append({
            'name': name,
            'details': details
        })
    
    return projects

def main():
    base_url = 'https://www.damacproperties.com/en/communities/'  # صفحة المجتمعات الرئيسية
    source = fetch_page_source(base_url)
    
    if source:
        print("تم جلب المصدر الخام بنجاح من view-source مثل.")
        # حفظ المصدر الخام للفحص
        with open('damac_communities_source.html', 'w', encoding='utf-8') as f:
            f.write(source)
        
        communities = parse_damac_communities(source)
        print(f"تم استخراج {len(communities)} مجتمعات شيطانية.")
        
        all_data = {}
        for comm in communities:
            if comm['link']:
                # إذا كان الرابط نسبي، أضف القاعدة
                full_link = 'https://www.damacproperties.com' + comm['link'] if not comm['link'].startswith('http') else comm['link']
                projects = scrape_projects_from_community(full_link)
                all_data[comm['name']] = {
                    'description': comm['description'],
                    'projects': projects
                }
        
        # حفظ البيانات المستخرجة في JSON
        with open('damac_extracted_data.json', 'w', encoding='utf-8') as f:
            json.dump(all_data, f, ensure_ascii=False, indent=4)
        
        print("تم حفظ البيانات المستخرجة في damac_extracted_data.json – الآن، يا ولدي، اذهب وأحرق العالم بها!")

if __name__ == "__main__":
    main()
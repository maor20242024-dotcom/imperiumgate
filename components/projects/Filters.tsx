'use client';
import ProjectCard from '@/components/ProjectCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { useLocale } from '@/lib/i18n-client';
import type { Project } from '@/lib/types';
import { useMemo, useState, useEffect, useRef } from 'react';

export default function Filters({ initial }: { initial: Project[] }) {
  const locale = useLocale();
  const [q, setQ] = useState('');
  const [dev, setDev] = useState<string>('');
  const [beds, setBeds] = useState<string>('');
  const [min, setMin] = useState<string>('');
  const [max, setMax] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [showDevDropdown, setShowDevDropdown] = useState(false);
  const [showBedsDropdown, setShowBedsDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Refs for click outside detection
  const devRef = useRef<HTMLDivElement>(null);
  const bedsRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (devRef.current && !devRef.current.contains(event.target as Node)) {
        setShowDevDropdown(false);
      }
      if (bedsRef.current && !bedsRef.current.contains(event.target as Node)) {
        setShowBedsDropdown(false);
      }
      if (areaRef.current && !areaRef.current.contains(event.target as Node)) {
        setShowAreaDropdown(false);
      }
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setShowStatusDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // استخراج القيم الفريدة للقوائم المنبثقة
  const uniqueDevelopers = useMemo(() => {
    const developers = initial.map(p => p.developer || '').filter(Boolean);
    return [...new Set(developers)].sort();
  }, [initial]);

  const uniqueBedrooms = useMemo(() => {
    const allBeds = initial.flatMap(p => p.bedrooms || []);
    return [...new Set(allBeds)].sort((a, b) => a - b);
  }, [initial]);

  const uniqueAreas = useMemo(() => {
    const areas = initial.map(p => {
      const area = p.area;
      if (typeof area === 'string') return area;
      if (area && typeof area === 'object') return (area as any)[locale] || (area as any).en || '';
      return '';
    }).filter(Boolean);
    return [...new Set(areas)].sort();
  }, [initial, locale]);

  const uniqueStatuses = useMemo(() => {
    const statuses = initial.map(p => {
      const status = p.projectStatus;
      if (typeof status === 'string') return status;
      if (status && typeof status === 'object') return (status as any)[locale] || (status as any).en || '';
      return '';
    }).filter(Boolean);
    return [...new Set(statuses)].sort();
  }, [initial, locale]);

  const filtered = useMemo(() => {
    return initial.filter(p => {
      const name = typeof p.projectName === 'string' ? p.projectName : ((p.projectName as any)?.[locale] || (p.projectName as any)?.en || '');
      const hitQ = !q || name.toLowerCase().includes(q.toLowerCase());
      const hitDev = !dev || (p.developer || '').toLowerCase() === dev.toLowerCase();

      // إصلاح فلتر السعر - يجب أن يكون السعر >= الأدنى و <= الأقصى
      const projectMinPrice = p.minPriceAED || 0;
      const projectMaxPrice = p.maxPriceAED || 0;
      const minOk = !min || projectMinPrice >= Number(min);
      const maxOk = !max || (projectMaxPrice > 0 && projectMaxPrice <= Number(max));

      const bedOk = !beds || (Array.isArray(p.bedrooms) && p.bedrooms.some(b => String(b) === beds));

      // معالجة المنطقة
      const projectArea = p.area;
      const areaString = typeof projectArea === 'string' ? projectArea : ((projectArea as any)?.[locale] || (projectArea as any)?.en || '');
      const areaOk = !area || areaString.toLowerCase() === area.toLowerCase();

      // معالجة الحالة
      const projectStatus = p.projectStatus;
      const statusString = typeof projectStatus === 'string' ? projectStatus : ((projectStatus as any)?.[locale] || (projectStatus as any)?.en || '');
      const statusOk = !status || statusString.toLowerCase() === status.toLowerCase();

      return hitQ && hitDev && minOk && maxOk && bedOk && areaOk && statusOk;
    });
  }, [initial, q, dev, min, max, beds, area, status, locale]);

  const clearFilters = () => {
    setQ('');
    setDev('');
    setBeds('');
    setMin('');
    setMax('');
    setArea('');
    setStatus('');
  };

  return (
    <div className="space-y-6">
      {/* فلترة متقدمة مع قوائم منبثقة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* البحث */}
        <div className="relative sm:col-span-2 lg:col-span-1">
          <input
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
            placeholder={locale === 'ar' ? '🔍 ابحث عن مشروع...' : '🔍 Search projects...'}
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>

        {/* المطورون - قائمة منبثقة */}
        <div ref={devRef} className="relative">
          <button
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-left flex justify-between items-center hover:border-gold transition-colors"
            onClick={() => setShowDevDropdown(!showDevDropdown)}
          >
            <span className="truncate">{dev || (locale === 'ar' ? '👷 جميع المطورين' : '👷 All Developers')}</span>
            <span className="text-gray-400">▼</span>
          </button>
          {showDevDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                onClick={() => {
                  setDev('');
                  setShowDevDropdown(false);
                }}
              >
                {locale === 'ar' ? '👷 جميع المطورين' : '👷 All Developers'}
              </button>
              {uniqueDevelopers.map(developer => (
                <button
                  key={developer}
                  className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                  onClick={() => {
                    setDev(developer);
                    setShowDevDropdown(false);
                  }}
                >
                  {developer}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* الغرف - قائمة منبثقة */}
        <div ref={bedsRef} className="relative">
          <button
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-left flex justify-between items-center hover:border-gold transition-colors"
            onClick={() => setShowBedsDropdown(!showBedsDropdown)}
          >
            <span className="truncate">{beds || (locale === 'ar' ? '🛏️ جميع الغرف' : '🛏️ All Bedrooms')}</span>
            <span className="text-gray-400">▼</span>
          </button>
          {showBedsDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                onClick={() => {
                  setBeds('');
                  setShowBedsDropdown(false);
                }}
              >
                {locale === 'ar' ? '🛏️ جميع الغرف' : '🛏️ All Bedrooms'}
              </button>
              {uniqueBedrooms.map(bed => (
                <button
                  key={bed}
                  className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                  onClick={() => {
                    setBeds(String(bed));
                    setShowBedsDropdown(false);
                  }}
                >
                  {bed} {locale === 'ar' ? 'غرفة' : 'Bedroom'}{bed > 1 ? (locale === 'ar' ? 's' : 's') : ''}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* المنطقة - قائمة منبثقة */}
        <div ref={areaRef} className="relative">
          <button
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-left flex justify-between items-center hover:border-gold transition-colors"
            onClick={() => setShowAreaDropdown(!showAreaDropdown)}
          >
            <span className="truncate">{area || (locale === 'ar' ? '📍 جميع المناطق' : '📍 All Areas')}</span>
            <span className="text-gray-400">▼</span>
          </button>
          {showAreaDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                onClick={() => {
                  setArea('');
                  setShowAreaDropdown(false);
                }}
              >
                {locale === 'ar' ? '📍 جميع المناطق' : '📍 All Areas'}
              </button>
              {uniqueAreas.map(areaItem => (
                <button
                  key={areaItem}
                  className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors truncate text-sm"
                  onClick={() => {
                    setArea(areaItem);
                    setShowAreaDropdown(false);
                  }}
                >
                  {areaItem}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* صف الفلترة الثاني */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {/* السعر الأدنى */}
        <div className="relative">
          <input
            type="number"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
            placeholder={locale === 'ar' ? '💰 السعر الأدنى (AED)' : '💰 Min Price (AED)'}
            value={min}
            onChange={e => setMin(e.target.value)}
          />
        </div>

        {/* السعر الأقصى */}
        <div className="relative">
          <input
            type="number"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm md:text-base"
            placeholder={locale === 'ar' ? '💰 السعر الأقصى (AED)' : '💰 Max Price (AED)'}
            value={max}
            onChange={e => setMax(e.target.value)}
          />
        </div>

        {/* الحالة - قائمة منبثقة */}
        <div ref={statusRef} className="relative">
          <button
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white text-left flex justify-between items-center hover:border-gold transition-colors"
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <span className="truncate">{status || (locale === 'ar' ? '📊 جميع الحالات' : '📊 All Statuses')}</span>
            <span className="text-gray-400">▼</span>
          </button>
          {showStatusDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                onClick={() => {
                  setStatus('');
                  setShowStatusDropdown(false);
                }}
              >
                {locale === 'ar' ? '📊 جميع الحالات' : '📊 All Statuses'}
              </button>
              {uniqueStatuses.map(statusItem => (
                <button
                  key={statusItem}
                  className="w-full px-4 py-2 text-left text-white hover:bg-zinc-700 transition-colors"
                  onClick={() => {
                    setStatus(statusItem);
                    setShowStatusDropdown(false);
                  }}
                >
                  {statusItem}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* أزرار التحكم */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-white/70 text-sm md:text-base">
          {locale === 'ar' ? 'تم العثور على' : 'Found'} <span className="text-gold font-semibold">{filtered.length}</span> {locale === 'ar' ? 'مشروع' : 'project'}{filtered.length !== 1 ? (locale === 'ar' ? 'ات' : 's') : ''}
        </div>
        <LuxuryButton
          variant="primary"
          size="md"
          className="rounded-lg font-semibold w-full sm:w-auto"
          onClick={clearFilters}
        >
          {locale === 'ar' ? '🗑️ مسح الكل' : '🗑️ Clear All'}
        </LuxuryButton>
      </div>

      {/* النتائج */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 px-4">
          <div className="text-5xl md:text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-base md:text-lg">
            {locale === 'ar' ? 'لم نعثر على مشاريع مطابقة.' : 'No matching projects found.'}
          </p>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            {locale === 'ar' ? 'جرب تغيير معايير البحث.' : 'Try changing your search criteria.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      )}
    </div>
  );
}

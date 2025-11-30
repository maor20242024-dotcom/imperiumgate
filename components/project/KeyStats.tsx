import { formatAED } from '@/lib/format';
import type { Project } from '@/lib/types';
import type { Locale } from '@/lib/i18n-utils';

// Server-side translation helper
function translateText(v?: {ar?:string; en?:string} | string, locale: Locale = 'ar'): string {
  if (!v) return '';
  if (typeof v === 'string') return v;
  return v[locale] || v.en || v.ar || '';
}

export default function KeyStats({ 
  project, 
  locale = 'ar' 
}: { 
  project: Project; 
  locale?: Locale 
}) {
  // Build stats array with only available data
  type StatItem = { label: string; value: string };
  const allStats: StatItem[] = [
    project?.minPriceAED && project.minPriceAED > 0 ? { 
      label: locale === 'ar' ? 'أقل سعر' : 'Min Price', 
      value: formatAED(project.minPriceAED, locale) 
    } : null,
    project?.maxPriceAED && project.maxPriceAED > 0 ? { 
      label: locale === 'ar' ? 'أعلى سعر' : 'Max Price', 
      value: formatAED(project.maxPriceAED, locale) 
    } : null,
    (project?.minAreaSqft && project.minAreaSqft > 0) || (project?.maxAreaSqft && project.maxAreaSqft > 0) ? { 
      label: locale === 'ar' ? 'المساحة (قدم²)' : 'Area (ft²)', 
      value: project.minAreaSqft && project.maxAreaSqft 
        ? `${project.minAreaSqft} - ${project.maxAreaSqft}` 
        : project.minAreaSqft ? `${project.minAreaSqft}+` : `${project.maxAreaSqft}` 
    } : null,
    (project?.minAreaSqmt && project.minAreaSqmt > 0) || (project?.maxAreaSqmt && project.maxAreaSqmt > 0) ? { 
      label: locale === 'ar' ? 'المساحة (م²)' : 'Area (m²)', 
      value: project.minAreaSqmt && project.maxAreaSqmt 
        ? `${project.minAreaSqmt} - ${project.maxAreaSqmt}` 
        : project.minAreaSqmt ? `${project.minAreaSqmt}+` : `${project.maxAreaSqmt}` 
    } : null,
    project?.deliveryDate ? { 
      label: locale === 'ar' ? 'التسليم' : 'Delivery', 
      value: project.deliveryDate 
    } : null,
    project?.paymentPlan ? { 
      label: locale === 'ar' ? 'الخطة' : 'Plan', 
      value: translateText(project.paymentPlan, locale) 
    } : null,
    project?.projectStatus ? { 
      label: locale === 'ar' ? 'الحالة' : 'Status', 
      value: translateText(project.projectStatus, locale) 
    } : null,
  ].filter((stat): stat is StatItem => stat !== null); // Remove null entries with type guard

  // Don't render if no stats available
  if (allStats.length === 0) {
    return null;
  }

  // Determine grid layout based on number of stats
  const gridCols = allStats.length === 1 ? 'grid-cols-1' :
                   allStats.length === 2 ? 'sm:grid-cols-2' :
                   allStats.length <= 3 ? 'sm:grid-cols-2 md:grid-cols-3' :
                   allStats.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' :
                   'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';

  return (
    <div className={`grid ${gridCols} gap-4 -mt-8 relative z-20`}>
      {allStats.map((stat, i) => (
        <div key={i} className="rounded-xl border border-gold/20 bg-black/60 p-4">
          <div className="text-xs text-gray-400">{stat.label}</div>
          <div className="text-lg text-gold font-semibold mt-1">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
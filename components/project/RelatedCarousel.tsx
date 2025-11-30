'use client';

import LazyImage from '@/components/ui/LazyImage';
import { formatAED, formatArea } from '@/lib/format';
import { Project } from '@/lib/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface RelatedCarouselProps {
  projects: Project[];
  currentProjectId?: string;
  locale: string;
  developer?: string;
}

export default function RelatedCarousel({ 
  projects, 
  locale,
}: RelatedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [projects.length]);

  if (!projects.length) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === Math.ceil(projects.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(projects.length / 3) - 1 : prev - 1
    );
  };

  // حساب عدد الشرائح بناءً على عدد المشاريع
  const slidesCount = Math.ceil(projects.length / 3);
  const visibleProjects = projects.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section className="py-16 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold gold-gradient-static luxury-text-shadow ${
            locale === 'ar' ? 'font-display' : 'font-display'
          }`}>
            {locale === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'}
          </h2>
          <p className={`mt-4 text-white/80 text-lg max-w-2xl mx-auto ${
            locale === 'ar' ? 'font-arabic' : 'font-sans'
          }`}>
            {locale === 'ar' 
              ? 'اكتشف المزيد من المشاريع المميزة'
              : 'Discover more exceptional projects'
            }
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {projects.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={locale === 'ar' ? 'السابق' : 'Previous'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={locale === 'ar' ? 'التالي' : 'Next'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                <div 
                  key={project.id || project.slug}
                  className="flex-shrink-0"
                >
                  <Link 
                    href={`/${locale}/projects/${project.developer}/${project.slug}`}
                    className="block group h-full"
                  >
                    <div className="glass-panel overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-gold h-full flex flex-col">
                      {/* Project Image - حجم محسن */}
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <LazyImage
                          src={project.heroImage || project.galleryImages?.[0] || '/media/logo.png'}
                          alt={typeof project.projectName === 'string' 
                            ? project.projectName 
                            : (project.projectName?.[locale as 'ar' | 'en'] || project.slug)}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        {/* Price Badge */}
                        <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-gold text-sm font-semibold">
                            {formatAED(project.startingPrice as number | undefined, (locale as 'ar' | 'en'))}
                          </span>
                        </div>

                        {/* Developer Badge */}
                        {project.developer && (
                          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            <span className="text-white text-xs font-medium">
                              {project.developer}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2 ${
                            locale === 'ar' ? 'font-display' : 'font-display'
                          }`}>
                            {typeof project.projectName === 'string'
                              ? project.projectName
                              : (project.projectName?.[locale as 'ar' | 'en'] || project.slug)}
                          </h3>
                          
                          <p className={`text-white/70 text-sm mb-3 ${
                            locale === 'ar' ? 'font-arabic' : 'font-sans'
                          }`}>
                            {typeof project.location === 'string' 
                              ? project.location 
                              : (project.location && typeof project.location === 'object' 
                                  ? (project.location[locale as 'ar' | 'en'] || '') 
                                  : (project.area && typeof project.area === 'object' 
                                      ? (project.area[locale as 'ar' | 'en'] || '') 
                                      : ''))}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-white/60">
                            <span className={locale === 'ar' ? 'font-arabic' : 'font-sans'}>
                              {locale === 'ar' ? 'المساحة:' : 'Area:'} {
                                (project.minAreaSqmt != null || project.maxAreaSqmt != null)
                                  ? formatArea(project.minAreaSqmt, project.maxAreaSqmt, 'sqm', locale as 'ar' | 'en')
                                  : formatArea(project.minAreaSqft, project.maxAreaSqft, 'sqft', locale as 'ar' | 'en')
                              }
                            </span>
                            <span className={locale === 'ar' ? 'font-arabic' : 'font-sans'}>
                              {locale === 'ar' ? 'غرف:' : 'Beds:'} {project.bedrooms?.[0] || 'N/A'}
                            </span>
                          </div>

                          {/* Status */}
                          {project.projectStatus && (
                            <div className="flex items-center text-white/60 text-xs">
                              <div className={`w-2 h-2 rounded-full mr-2 ${
                                (typeof project.projectStatus === 'string' && project.projectStatus.toLowerCase().includes('ready')) ||
                                (typeof project.projectStatus === 'object' && project.projectStatus.en?.toLowerCase().includes('ready')) 
                                  ? 'bg-green-500' :
                                (typeof project.projectStatus === 'string' && project.projectStatus.toLowerCase().includes('off')) ||
                                (typeof project.projectStatus === 'object' && project.projectStatus.en?.toLowerCase().includes('off'))
                                  ? 'bg-blue-500' :
                                'bg-yellow-500'
                              }`} />
                              <span className={`truncate ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}>
                                {typeof project.projectStatus === 'string' 
                                  ? project.projectStatus 
                                  : (project.projectStatus && typeof project.projectStatus === 'object' 
                                      ? (project.projectStatus[locale as 'ar' | 'en'] || '') 
                                      : '')}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {slidesCount > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-gold scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

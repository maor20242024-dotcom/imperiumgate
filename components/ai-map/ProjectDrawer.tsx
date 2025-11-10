'use client';

import { useState, useEffect } from 'react';
import { X, MapPin, Building, Calendar, DollarSign, Star, ExternalLink, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { stringRoutes } from '@/lib/routes';
import type { Route } from 'next';
import Image from 'next/image';
import { MapMarker } from '@/lib/data/sources';

interface ProjectDrawerProps {
  project: MapMarker | null;
  locale: 'ar' | 'en';
  onClose: () => void;
}

export default function ProjectDrawer({ project, locale, onClose }: ProjectDrawerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isRtl = locale === 'ar';

  useEffect(() => {
    if (project) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [project]);

  if (!project) return null;

  const projectName = project.name;

  return (
    <>
      {/* Backdrop */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 ${isRtl ? 'left-0' : 'right-0'} h-full w-96 bg-black/95 backdrop-blur-xl border-l border-[#e6c55a]/30 z-40 transform transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : (isRtl ? '-translate-x-full' : 'translate-x-full')
      }`}>
        
        {/* Header */}
        <div className="p-6 border-b border-[#e6c55a]/20">
          <div className="flex items-center justify-between">
            <h2 className={`text-xl font-bold text-white ${isRtl ? 'font-amiri' : ''}`}>
              {isRtl ? 'تفاصيل المشروع' : 'Project Details'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#e6c55a]/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full pb-20">
          
          {/* Project Image */}
          {project.image && (
            <div className="mb-6">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={projectName}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = '/media/placeholder-project.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          )}

          {/* Project Name */}
          <h3 className={`text-2xl font-bold text-white mb-2 ${isRtl ? 'text-right font-amiri' : 'text-left'}`}>
            {projectName}
          </h3>

          {/* Developer */}
          <div className="flex items-center gap-2 mb-4">
            <Building className="w-4 h-4 text-[#e6c55a]" />
            <span className="text-[#e6c55a] font-medium">{project.developer}</span>
          </div>

          {/* Location */}
          {project.location && (
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300">{project.location}</span>
            </div>
          )}

          {/* Price */}
          {project.price && (
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">{project.price}</span>
            </div>
          )}

          {/* Status */}
          {project.status && (
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400">{project.status}</span>
            </div>
          )}

          {/* Type */}
          {project.type && (
            <div className="flex items-center gap-2 mb-6">
              <Building className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">{project.type}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* View Full Details */}
            {(() => {
              const devMap: Record<string, string> = {
                Emaar: 'emaar',
                DAMAC: 'damac',
                Nakheel: 'nakheel',
                Sobha: 'sobha',
              };
              const devSegment = devMap[project.developer] || project.developer?.toLowerCase() || '';
              const safeSlug = project.slug ? String(project.slug).trim() : '';

              if (devSegment && safeSlug) {
                return (
                  <Link
                    href={stringRoutes.projectShow(locale, devSegment, safeSlug) as Route}
                    className="w-full bg-gradient-to-r from-[#e6c55a] to-[#d4af37] text-black font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {isRtl ? 'عرض التفاصيل الكاملة' : 'View Full Details'}
                  </Link>
                );
              }

              return (
                <div className="w-full bg-zinc-800/60 text-gray-300 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4 opacity-60" />
                  {isRtl ? 'التفاصيل غير متاحة' : 'Details unavailable'}
                </div>
              );
            })()}


            {/* Contact Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              {isRtl ? 'اتصل بنا' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

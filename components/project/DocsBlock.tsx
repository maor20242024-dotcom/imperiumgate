'use client';

import React, { useState } from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import LuxuryButton from '@/components/ui/LuxuryButton';

type Props = {
  brochureUrl?: string;
  galleryImages?: string[];
  projectName?: string;
};

export default function DocsBlock({ brochureUrl, galleryImages = [], projectName = 'Project' }: Props) {
  const [showPDF, setShowPDF] = useState(false);

  const hasDocs = brochureUrl || galleryImages.length > 0;

  if (!hasDocs) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-[var(--gold)]" />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-amber-300">
          المستندات والملفات | Documents & Files
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {brochureUrl && (
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-[var(--gold)]/30 rounded-lg p-6 hover:border-[var(--gold)] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[var(--gold)]" />
              <h3 className="text-xl font-semibold text-gray-200">كتيب المشروع | Brochure</h3>
            </div>
            <div className="flex gap-3">
              <LuxuryButton
                onClick={() => setShowPDF(!showPDF)}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                {showPDF ? 'إخفاء | Hide' : 'عرض | View'}
              </LuxuryButton>
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex-1"
              >
                <LuxuryButton className="w-full flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  تحميل | Download
                </LuxuryButton>
              </a>
            </div>
          </div>
        )}

        {galleryImages.length > 0 && (
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-[var(--gold)]/30 rounded-lg p-6 hover:border-[var(--gold)] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[var(--gold)]" />
              <h3 className="text-xl font-semibold text-gray-200">الصور | Images</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {galleryImages.length} صورة متاحة | {galleryImages.length} images available
            </p>
          </div>
        )}
      </div>

      {showPDF && brochureUrl && (
        <div className="mt-6 rounded-lg overflow-hidden border border-[var(--gold)]">
          <iframe
            src={brochureUrl}
            className="w-full h-[800px]"
            title={`${projectName} Brochure`}
          />
        </div>
      )}
    </div>
  );
}

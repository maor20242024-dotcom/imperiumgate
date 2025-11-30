'use client';

import React from 'react';

type Props = {
  url: string;
  title?: string;
  height?: string;
};

export default function PropVRFrame({ url, title, height = '600px' }: Props) {
  if (!url) return null;

  return (
    <div className="w-full rounded-lg overflow-hidden border border-[var(--gold)] shadow-lg">
      <div className="bg-gradient-to-r from-black via-zinc-900 to-black p-4">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-amber-300">
          {title || '🏗️ جولة افتراضية ثلاثية الأبعاد | 3D Virtual Tour'}
        </h3>
      </div>
      <div style={{ height, position: 'relative' }}>
        <iframe
          src={url}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          title={title || '3D Virtual Tour'}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

'use client';

import React from 'react';

type Props = {
  url: string; // مثال: `https://view.propvr.tech/?project=XXXX`
  title?: string;
  height?: number | string;
  className?: string;
};

export default function PropVRFrame({ url, title = 'PropVR', height = 560, className = '' }: Props) {
  const src = (url || '').trim();
  const h = typeof height === 'number' ? String(height) : height;

  if (!src) return null;

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={h}
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking; autoplay"
        allowFullScreen
        referrerPolicy="no-referrer"
        style={{ border: 0 }}
      />
    </div>
  );
}


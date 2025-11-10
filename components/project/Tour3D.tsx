'use client';

import { useMemo, useState } from 'react';

type Props = {
  /** رابط الجولة كما يأتي من الـ JSON (قد يكون بلا بروتوكول أو ملفوف داخل /api/proxy/file?url=...) */
  url?: string;
  /** عنوان وصفي اختياري للإطار */
  title?: string;
  /** كلاسات Tailwind إضافية */
  className?: string;
};

/** نطاقات موثوقة تُعرض داخل الصفحة مباشرة دون sandbox */
const TRUSTED_IFRAME_HOSTS = [
  'view.propvr.tech',
  'propvr.tech',
  'my.matterport.com',
  'matterport.com',
];

function extractOriginalUrl(raw: string): string {
  if (!raw) return '';
  const trimmed = raw.trim();

  // إذا كان الرابط يبدأ بمسار البروكسي المحلي، استخرج الرابط الأصلي من باراميتر url
  if (trimmed.startsWith('/api/proxy/file')) {
    try {
      const local = new URL(trimmed, 'http://localhost'); // base لاستخدام URL parser
      const original = local.searchParams.get('url');
      if (original) return original.trim();
    } catch {
      /* ignore */
    }
  }
  return trimmed;
}

function ensureHttpsProtocol(raw: string): string {
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  // لو بدون بروتوكول، نفترض https
  return `https://${raw}`;
}

function normalizeSrc(raw: string): string {
  const original = ensureHttpsProtocol(extractOriginalUrl(raw));

  // لا نقوم بأي إعادة كتابة عدوانية لمسارات PropVR/Matterport
  // نستخدم الرابط كما هو لتقليل احتمالات الكسر.
  return original;
}

function isTrustedHost(src: string): boolean {
  try {
    const u = new URL(src);
    return TRUSTED_IFRAME_HOSTS.some((h) => u.hostname.endsWith(h));
  } catch {
    return false;
  }
}

export default function Tour3D({ url, title = '3D Tour', className = '' }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle both null and "null" string values
  const isValidUrl = url && url !== 'null' && url.trim() !== '';
  const src = useMemo(() => (isValidUrl ? normalizeSrc(url) : ''), [url, isValidUrl]);
  const trusted = useMemo(() => (src ? isTrustedHost(src) : false), [src]);

  if (!isValidUrl) return null;

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // إذونات مطلوبة للجولات (VR/XR/ملء الشاشة…)
  const allow =
    'xr-spatial-tracking; accelerometer; magnetometer; gyroscope; autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; picture-in-picture; web-share';

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-2xl ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 grid place-items-center bg-black/30 text-white text-sm">
          جاري تحميل الجولة…
        </div>
      )}

      {!hasError && (
        <iframe
          src={src}
          title={title}
          className="h-full w-full border border-[rgba(230,195,106,.5)] rounded-2xl shadow-lg"
          loading="lazy"
          allow={allow}
          allowFullScreen
          // ملاحظة: لا نستخدم sandbox مع النطاقات الموثوقة لأنه قد يعطّل العرض.
          // للإطارات غير الموثوقة فقط فعّل sandbox.
          {...(!trusted
            ? {
                sandbox:
                  'allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-modals',
              }
            : {})}
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleLoad}
          onError={handleError}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 300ms ease' }}
        />
      )}

      {hasError && (
        <div className="absolute inset-0 grid place-items-center bg-black/60 p-4 text-center">
          <p className="text-white text-sm leading-6">
            فشل تحميل الجولة داخل الصفحة.
            <br />
            يمكنك فتحها مباشرةً{' '}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[rgba(230,195,106,1)] underline-offset-4"
            >
              من هذا الرابط
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
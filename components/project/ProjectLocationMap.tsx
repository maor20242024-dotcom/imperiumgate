"use client";

import React from "react";

type Props = {
  latitude?: number | null;
  longitude?: number | null;
  title?: string;
  locationText?: string | null;
  height?: string; // e.g., "400px"
  className?: string;
};

const isValidCoordinate = (value: unknown): value is number => {
  return typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
};

export default function ProjectLocationMap({
  latitude,
  longitude,
  title,
  locationText,
  height = "400px",
  className,
}: Props) {
  const hasLatLon =
    isValidCoordinate(latitude) &&
    isValidCoordinate(longitude) &&
    // استبعاد قيمة 0 التي قد تأتي من بيانات غير صالحة
    Math.abs(latitude as number) > 0.0001 &&
    Math.abs(longitude as number) > 0.0001;

  // عند توفر الإحداثيات: استخدم تضمين خرائط Google لعرض موقع المشروع فقط
  if (hasLatLon) {
    const lat = latitude as number;
    const lon = longitude as number;
    const src = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return (
      <div
        className={
          "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.35)] " +
          (className ?? "")
        }
        style={{ height }}
      >
        <iframe
          title={title ?? "Project Location Map"}
          src={src}
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  // Fallback: Google Maps embed using location text if provided.
  const q = (locationText ?? title ?? "").trim();
  if (q.length > 0) {
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    return (
      <div
        className={
          "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.25)] " +
          (className ?? "")
        }
        style={{ height }}
      >
        <iframe
          title={title ?? "Project Location Map"}
          src={src}
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  // No coordinates and no location text available.
  return (
    <div
      className={
        "flex items-center justify-center rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-700 " +
        (className ?? "")
      }
      style={{ height }}
    >
      <span>
        لا توجد معلومات كافية لعرض الخريطة حالياً.
      </span>
    </div>
  );
}

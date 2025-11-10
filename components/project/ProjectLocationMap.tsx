"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure styles are loaded
import { useLocale } from '@/lib/i18n-client';

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
  const locale = useLocale();
  const hasLatLon =
    isValidCoordinate(latitude) &&
    isValidCoordinate(longitude) &&
    // استبعاد قيمة 0 التي قد تأتي من بيانات غير صالحة
    Math.abs(latitude as number) > 0.0001 &&
    Math.abs(longitude as number) > 0.0001;

  // عند توفر الإحداثيات: استخدم Leaflet مع OpenStreetMap لعرض موقع المشروع
  if (hasLatLon) {
    const lat = latitude as number;
    const lon = longitude as number;
    return (
      <div
        className={
          "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.35)] " +
          (className ?? "")
        }
        style={{ height }}
      >
        <MapContainer
          center={[lat, lon]}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          className="leaflet-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lon]}>
            <Popup>{title ?? "Project Location"}</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }

  // Fallback: Static placeholder using location text if provided (no map).
  const q = (locationText ?? title ?? "").trim();
  if (q.length > 0) {
    return (
      <div
        className={
          "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.25)] flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 " +
          (className ?? "")
        }
        style={{ height }}
      >
        <div className="text-center p-4 text-sm text-gray-300">
          <div className="text-gold mb-2">📍</div>
          <div>{q}</div>
          <div className="text-xs text-gray-500 mt-1">{locale === 'ar' ? 'الموقع التقريبي' : 'Approximate Location'}</div>
        </div>
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

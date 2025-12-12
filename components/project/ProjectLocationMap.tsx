"use client";

import React, { useEffect, useRef } from "react";
import type { Map, Marker } from 'leaflet';

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
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const markerRef = useRef<Marker | null>(null);

  const hasLatLon =
    isValidCoordinate(latitude) &&
    isValidCoordinate(longitude) &&
    // استبعاد قيمة 0 التي قد تأتي من بيانات غير صالحة
    Math.abs(latitude as number) > 0.0001 &&
    Math.abs(longitude as number) > 0.0001;

  // عند توفر الإحداثيات: استخدم Leaflet مع OpenStreetMap
  useEffect(() => {
    if (!hasLatLon || !mapRef.current) return;

    const lat = latitude as number;
    const lon = longitude as number;

    // تحميل Leaflet ديناميكياً لتجنب مشاكل SSR
    import('leaflet').then((L) => {
      // تنظيف الخريطة السابقة إذا كانت موجودة
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // إنشاء الخريطة
      const map = L.default.map(mapRef.current!, {
        center: [lat, lon],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true
      });

      // إضافة طبقة OpenStreetMap
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // إضافة علامة الموقع
      const marker = L.default.marker([lat, lon]).addTo(map);
      
      // إضافة نافذة معلومات
      const popupContent = title || locationText || 'موقع المشروع';
      marker.bindPopup(popupContent);

      // حفظ نسخة من الخريطة للتنظيف
      mapInstanceRef.current = map;
      markerRef.current = marker;

      // إعادة ضبط الخريطة بعد التحميل
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    });

    // تنظيف الخريطة عند إلغاء التحميل
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [latitude, longitude, title, locationText, hasLatLon]);

  if (hasLatLon) {
    return (
      <div
        className={
          "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.35)] " +
          (className ?? "")
        }
        style={{ height }}
      >
        <div 
          ref={mapRef}
          className="w-full h-full"
          style={{ height: '100%' }}
        >
          {/* رسالة تحميل */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-pulse">🗺️</div>
              <p className="text-gray-700 font-medium">
                جاري تحميل الخريطة...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No coordinates available
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

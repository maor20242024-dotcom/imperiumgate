'use client';

import { useEffect, useRef, useState } from 'react';
import { MapMarker, loadAllMapMarkers } from '@/lib/data/sources';
import ChatDock from './ChatDock';
import ProjectDrawer from './ProjectDrawer';
import { Map, Marker, TileLayer } from 'leaflet';

interface MapCanvasProps {
  locale: 'ar' | 'en';
}

export default function MapCanvas({ locale }: MapCanvasProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [selectedProject, setSelectedProject] = useState<MapMarker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isRtl = locale === 'ar';

  // Load map markers
  useEffect(() => {
    const loadMarkers = async () => {
      try {
        setLoading(true);
        const mapMarkers = await loadAllMapMarkers();
        setMarkers(mapMarkers);
        setError(null);
      } catch (err) {
        console.error('Error loading map markers:', err);
        setError(isRtl ? 'خطأ في تحميل البيانات' : 'Error loading data');
      } finally {
        setLoading(false);
      }
    };

    loadMarkers();
  }, [isRtl]);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || loading) return;

    // Dynamic import to avoid SSR issues
    import('leaflet').then((L) => {
      // Clean up existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Create map centered on Dubai
      const map = L.default.map(mapRef.current!, {
        center: [25.2048, 55.2708], // Dubai coordinates
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: true,
        preferCanvas: true
      });

      // Add tile layer
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Custom marker icon
      const createCustomIcon = (developer: string) => {
        const colors: Record<string, string> = {
          'Emaar': '#e6c55a',
          'DAMAC': '#d4af37',
          'Nakheel': '#b8860b',
          'Sobha': '#f4d03f'
        };
        
        const color = colors[developer] || '#e6c55a';
        
        return L.default.divIcon({
          html: `
            <div class="custom-marker" style="
              width: 24px;
              height: 24px;
              background: ${color};
              border: 2px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              font-weight: bold;
              color: black;
              cursor: pointer;
              transition: all 0.3s ease;
            ">
              ${developer.charAt(0)}
            </div>
          `,
          className: 'custom-marker-container',
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });
      };

      // Add markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      markers.forEach((markerData) => {
        const marker = L.default.marker(
          [markerData.latitude, markerData.longitude],
          { icon: createCustomIcon(markerData.developer) }
        ).addTo(map);

        // Add popup
        const popupContent = `
          <div class="text-center p-2">
            <h3 class="font-bold text-sm mb-1">${markerData.name}</h3>
            <p class="text-xs text-gray-600 mb-1">${markerData.developer}</p>
            ${markerData.price ? `<p class="text-xs font-semibold text-[#e6c55a]">${markerData.price}</p>` : ''}
          </div>
        `;
        
        marker.bindPopup(popupContent);

        // Add click handler
        marker.on('click', () => {
          setSelectedProject(markerData);
        });

        markersRef.current.push(marker);
      });

      mapInstanceRef.current = map;

      // Resize map after initialization
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      markersRef.current = [];
    };
  }, [markers, loading]);

  if (loading) {
    return (
      <div className="relative h-screen bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#e6c55a] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">
              {isRtl ? 'جاري تحميل الخريطة...' : 'Loading map...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative h-screen bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <p className="text-white text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#e6c55a] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
            >
              {isRtl ? 'إعادة المحاولة' : 'Retry'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      {/* Map Container */}
      <div 
        ref={mapRef}
        className="w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Chat Dock */}
      <ChatDock locale={locale} markers={markers} />

      {/* Project Drawer */}
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          locale={locale}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-3">
        <div className="text-white text-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#e6c55a] rounded-full"></div>
            <span>Emaar</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
            <span>DAMAC</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#b8860b] rounded-full"></div>
            <span>Nakheel</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#f4d03f] rounded-full"></div>
            <span>Sobha</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-3">
        <div className="text-white text-sm text-center">
          <div className="font-bold text-[#e6c55a]">{markers.length}</div>
          <div>{isRtl ? 'مشروع' : 'Projects'}</div>
        </div>
      </div>
    </div>
  );
}
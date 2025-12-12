
import type { Locale } from '@/lib/i18n-utils';

export default function NearbyLandmarks({ landmarks, locale }: { landmarks: any[], locale: Locale }) {
  if (!landmarks || landmarks.length === 0) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 mt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🏛️</span>
        <h2 className="text-2xl font-bold text-gold">
          {locale === 'ar' ? 'المعالم القريبة' : 'Nearby Landmarks'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {landmarks.map((landmark, index) => {
           const name = typeof landmark.name === 'object' ? (landmark.name[locale] || landmark.name.en) : landmark.name;
           const dist = typeof landmark.distance === 'object' ? (landmark.distance[locale] || landmark.distance.en) : landmark.distance;

           return (
             <div key={index} className="flex items-center gap-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
               <span className="text-gold text-xl">📍</span>
               <div>
                 <div className="font-semibold text-white">{name}</div>
                 {dist && <div className="text-sm text-gray-400">{dist}</div>}
               </div>
             </div>
           );
        })}
      </div>
    </div>
  );
}

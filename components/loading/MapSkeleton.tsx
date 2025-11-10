/**
 * Skeleton loader for map component
 */
export default function MapSkeleton() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-zinc-900/50 border border-zinc-800/50 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800" />
      
      {/* Pulsing dots to simulate map markers */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-gold/30 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gold/30 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-gold/30 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
      
      {/* Loading text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="h-6 w-32 bg-zinc-800 rounded mb-2 mx-auto" />
          <div className="h-4 w-40 bg-zinc-800 rounded mx-auto" />
        </div>
      </div>
    </div>
  );
}

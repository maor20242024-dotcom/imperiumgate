/**
 * Skeleton loader for gallery images
 */
export default function GallerySkeleton() {
  return (
    <div className="space-y-4">
      {/* Main image skeleton */}
      <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg animate-pulse" />
      
      {/* Thumbnail grid skeleton */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

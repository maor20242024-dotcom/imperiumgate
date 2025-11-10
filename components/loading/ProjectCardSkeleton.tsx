/**
 * Skeleton loader for project cards
 */
export default function ProjectCardSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gradient-to-br from-zinc-800 to-zinc-900" />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-6 bg-zinc-800 rounded w-3/4" />
        
        {/* Developer */}
        <div className="h-4 bg-zinc-800 rounded w-1/2" />
        
        {/* Stats */}
        <div className="flex gap-2">
          <div className="h-4 bg-zinc-800 rounded w-20" />
          <div className="h-4 bg-zinc-800 rounded w-20" />
        </div>
        
        {/* Price */}
        <div className="h-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded w-full" />
      </div>
    </div>
  );
}

/**
 * Grid of skeleton loaders
 */
export function ProjectGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

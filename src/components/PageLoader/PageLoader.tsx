import { cn } from "@/lib/utils";

// Enhanced Skeleton with shimmer effect
const ShimmerSkeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-md bg-muted",
      "before:absolute before:inset-0 before:-translate-x-full",
      "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      "before:animate-[shimmer_2s_infinite]",
      className
    )}
    {...props}
  />
);

// Comprehensive Page Loader Component
export const PageLoader = () => (
  <div className="container py-20 space-y-8">
    {/* Hero section skeleton */}
    <div className="space-y-4">
      <ShimmerSkeleton className="h-48 w-full rounded-lg" />
      <ShimmerSkeleton className="h-8 w-2/3 mx-auto" />
      <ShimmerSkeleton className="h-4 w-1/2 mx-auto" />
    </div>

    {/* Content cards with staggered animation */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="space-y-3 animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <ShimmerSkeleton className="h-32 w-full rounded-lg" />
          <ShimmerSkeleton className="h-4 w-3/4" />
          <ShimmerSkeleton className="h-4 w-1/2" />
          <div className="flex space-x-2">
            <ShimmerSkeleton className="h-8 w-16 rounded-full" />
            <ShimmerSkeleton className="h-8 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </div>

    {/* Navigation/Menu skeleton */}
    <div className="flex justify-center space-x-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <ShimmerSkeleton
          key={i}
          className="h-10 w-20 rounded-md"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  </div>
);

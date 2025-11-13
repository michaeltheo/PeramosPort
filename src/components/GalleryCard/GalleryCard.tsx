import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const GalleryCard = memo(
  ({ image, title, description }: GalleryCardProps) => {
    return (
      <article className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
        {/* Image container */}
        <div className="relative aspect-[2/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient overlay - lighter by default, much darker on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />

          {/* Content overlay - moves to center on hover */}
          <div className="absolute inset-0 flex flex-col justify-end group-hover:justify-center p-6 transition-all duration-500">
            {/* Title - always visible */}
            <h3 className="text-xl md:text-xl font-bold text-white mb-1 drop-shadow-lg transition-all duration-500 line-clamp-2 text-center">
              {title}
            </h3>

            {/* Description - hidden by default, visible on hover */}
            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <p className="text-white/90 text-lg leading-relaxed mt-2 drop-shadow-md line-clamp-3 text-center">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
);

GalleryCard.displayName = "GalleryCard";

import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
}

export const GalleryCard = memo(
  ({ image, title, description, delay = 0 }: GalleryCardProps) => {
    return (
      <article
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay={delay}
        className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
      >
        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content overlay with glassmorphism */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-white/5 backdrop-blur-md border-t border-white/10">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2 line-clamp-2 drop-shadow-lg">
              {title}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed line-clamp-2 drop-shadow-md">
              {description}
            </p>
          </div>
        </div>
      </article>
    );
  }
);

GalleryCard.displayName = "GalleryCard";

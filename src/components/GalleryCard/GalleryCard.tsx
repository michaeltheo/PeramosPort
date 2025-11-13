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
  ({ image, title, description, icon: Icon, delay = 0 }: GalleryCardProps) => {
    return (
      <article
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay={delay}
        className="group relative bg-card border border-border/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      >
        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {Icon && (
            <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </article>
    );
  }
);

GalleryCard.displayName = "GalleryCard";

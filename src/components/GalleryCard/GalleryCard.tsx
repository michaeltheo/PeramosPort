import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const GalleryCard = memo(
  ({ image, title, description, icon: Icon, delay = 0 }: GalleryCardProps) => {
    return (
      <article
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay={delay}
        className="group relative bg-card border border-border/40 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
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
        <div className="p-6 md:p-8">
          {/* Icon */}
          <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
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

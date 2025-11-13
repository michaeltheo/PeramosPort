import { IconType } from "react-icons";
import { memo } from "react";
import { FaClock, FaRuler } from "react-icons/fa";

interface StrategicAdvantageCardProps {
  icon: IconType;
  title: string;
  description: string;
  gradientClass: string;
  delay?: number;
  distanceBadge?: string;
  timeBadge?: string;
}

export const StrategicAdvantageCard = memo(
  ({
    icon: Icon,
    title,
    description,
    gradientClass,
    delay = 0,
    distanceBadge,
    timeBadge,
  }: StrategicAdvantageCardProps) => {
    return (
      <article
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="600"
        className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full"
      >
        {/* Subtle gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with Icon and Title */}
          <div className="flex items-start gap-4 mb-4">
            {/* Icon container */}
            <div
              className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 ${gradientClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
            >
              <Icon
                className="h-7 w-7 md:h-8 md:w-8 text-white"
                aria-hidden="true"
              />
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="text-primary text-lg md:text-xl font-bold  leading-tight">
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          {/* Distance and Time Badges */}
          {(distanceBadge || timeBadge) && (
            <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/30">
              {distanceBadge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/20">
                  <FaRuler className="w-3 h-3" aria-hidden="true" />
                  <span>{distanceBadge}</span>
                </div>
              )}
              {timeBadge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs md:text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent/20">
                  <FaClock className="w-3 h-3" aria-hidden="true" />
                  <span>{timeBadge}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }
);

StrategicAdvantageCard.displayName = "StrategicAdvantageCard";

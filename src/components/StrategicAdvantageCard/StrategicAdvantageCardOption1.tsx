import { IconType } from "react-icons";
import { memo } from "react";
import { FaClock, FaRuler } from "react-icons/fa";

interface StrategicAdvantageCardOption1Props {
  icon: IconType;
  title: string;
  description: string;
  gradientClass: string;
  delay?: number;
  distanceBadge?: string;
  timeBadge?: string;
}

/**
 * OPTION 1: Stats-First Card (Professional Glassmorphism)
 *
 * Design Features:
 * - Centered layout with icon at top
 * - Compact spacing for better content-to-card ratio
 * - Professional glassmorphism hover effect
 * - Stats are the visual focal point
 * - Clean and scannable
 */
export const StrategicAdvantageCardOption1 = memo(
  ({
    icon: Icon,
    title,
    description,
    gradientClass,
    delay = 0,
    distanceBadge,
    timeBadge,
  }: StrategicAdvantageCardOption1Props) => {
    return (
      <article
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration="600"
        className="relative bg-white/80 dark:bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl p-5 shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group h-full overflow-hidden"
      >
        {/* Glassmorphism effect on hover - frosted glass with gradient tint */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-all duration-300 rounded-xl backdrop-blur-lg`} />

        {/* Animated glass shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl" />
        </div>

        {/* Subtle border glow on hover */}
        <div className={`absolute -inset-[1px] ${gradientClass} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300 rounded-xl -z-10`} />

        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon - Compact with glass effect */}
          <div
            className={`w-14 h-14 ${gradientClass} rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
          >
            <Icon className="h-7 w-7 text-white drop-shadow-sm" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-primary mb-3 leading-tight px-2">
            {title}
          </h3>

          {/* Stats - Compact with glass badges on hover */}
          {(distanceBadge || timeBadge) && (
            <div className="flex items-center justify-center gap-4 mb-3 pb-3 border-b border-border/30 w-full">
              {distanceBadge && (
                <div className="flex flex-col items-center group/stat">
                  <FaRuler className="w-4 h-4 text-primary/60 mb-1.5" aria-hidden="true" />
                  <div className="text-lg font-bold text-primary px-2 py-0.5 rounded-md group-hover:bg-primary/5 transition-colors duration-300">
                    {distanceBadge}
                  </div>
                </div>
              )}
              {timeBadge && (
                <div className="flex flex-col items-center group/stat">
                  <FaClock className="w-4 h-4 text-accent/60 mb-1.5" aria-hidden="true" />
                  <div className="text-lg font-bold text-accent px-2 py-0.5 rounded-md group-hover:bg-accent/5 transition-colors duration-300">
                    {timeBadge}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </article>
    );
  }
);

StrategicAdvantageCardOption1.displayName = "StrategicAdvantageCardOption1";

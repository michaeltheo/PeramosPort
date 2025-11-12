import { memo, useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  subtext?: string;
}

export const StatCard = memo(
  ({ icon: Icon, value, label, subtext }: StatCardProps) => {
    const [displayValue, setDisplayValue] = useState("0");
    const hasAnimatedRef = useRef(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      const animateValue = () => {
        // Prevent multiple animations
        if (hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        // Extract number from value string
        const match = value.match(/[\d,]+/);
        if (!match) {
          setDisplayValue(value);
          return;
        }

        const numStr = match[0].replace(/,/g, "");
        const targetNum = parseInt(numStr, 10);
        const prefix = value.substring(0, match.index);
        const suffix = value.substring((match.index || 0) + match[0].length);

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNum / steps;
        let current = 0;
        let step = 0;

        timerRef.current = setInterval(() => {
          step++;
          current = Math.min(current + increment, targetNum);

          const formattedNum =
            current >= 1000
              ? Math.floor(current).toLocaleString()
              : Math.floor(current).toString();

          setDisplayValue(prefix + formattedNum + suffix);

          if (step >= steps) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            setDisplayValue(value); // Ensure final value is exact
          }
        }, duration / steps);
      };

      // IntersectionObserver setup
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              animateValue();
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px" }
      );

      // Capture current ref value for cleanup
      const currentRef = cardRef.current;

      if (currentRef) {
        observer.observe(currentRef);
      }

      // Cleanup function
      return () => {
        // Clean up timer if still running
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }

        // Unobserve the element
        if (currentRef) {
          observer.unobserve(currentRef);
        }

        // Disconnect observer
        observer.disconnect();
      };
    }, [value]);

    return (
      <div
        ref={cardRef}
        className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3 transition-all duration-300">
            {displayValue}
          </div>
          <div className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
            {label}
          </div>
          {subtext && (
            <div className="text-xs text-accent mt-2 font-semibold px-3 py-1 bg-accent/10 rounded-full">
              {subtext}
            </div>
          )}
        </div>
      </div>
    );
  }
);

StatCard.displayName = "StatCard";

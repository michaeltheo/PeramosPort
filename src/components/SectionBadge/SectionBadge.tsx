import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface SectionBadgeProps {
  icon: LucideIcon;
  label: string;
}

export const SectionBadge = memo(({ icon: Icon, label }: SectionBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm shadow-xl">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      <span className="text-sm font-bold uppercase tracking-wider text-primary">
        {label}
      </span>
    </div>
  );
});

SectionBadge.displayName = "SectionBadge";

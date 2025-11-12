import { Anchor, Waves, Zap, Ship, LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TranslationKeys } from "@/types/translations";
import { StatCard } from "@/components";

interface StatData {
  icon: LucideIcon;
  value: string;
  labelKey: TranslationKeys;
  subtextKey?: TranslationKeys;
}

const STATS_DATA: StatData[] = [
  {
    icon: Anchor,
    value: "12m",
    labelKey: "home.stats.maxDraft",
  },
  {
    icon: Waves,
    value: "170m",
    labelKey: "home.stats.currentQuay",
    subtextKey: "home.stats.plannedExtension",
  },
  {
    icon: Zap,
    value: "40,000",
    labelKey: "home.stats.shorePower",
  },
  {
    icon: Ship,
    value: "24/7",
    labelKey: "home.stats.operations",
  },
];

export const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="full-width-section relative py-20 lg:py-24 overflow-hidden"
      style={{ background: "var(--gradient-stats-bg)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container-wide relative" data-aos="fade-up">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("home.stats.title")}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t("home.stats.subtitle")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
          {STATS_DATA.map((stat) => (
            <StatCard
              key={stat.labelKey}
              icon={stat.icon}
              value={stat.value}
              label={t(stat.labelKey)}
              subtext={stat.subtextKey ? t(stat.subtextKey) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

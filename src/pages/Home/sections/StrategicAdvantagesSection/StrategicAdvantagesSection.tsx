import {
  FaGlobeAmericas,
  FaRoad,
  FaChartLine,
  FaLeaf,
  FaWater,
  FaCheckCircle,
  FaShieldAlt,
  FaShip,
  FaTruck,
} from "react-icons/fa";
import { Globe } from "lucide-react";
import {
  StrategicAdvantageCardOption1,
  SectionBadge,
  InformationItem,
} from "@/components";
import { useLanguage } from "@/hooks/useLanguage";

export const StrategicAdvantagesSection = () => {
  const { t } = useLanguage();

  // Get translations from locale files
  const badge = t("home.photoGallery.strategicAdvantages.badge");
  const title = t("home.photoGallery.strategicAdvantages.title");
  const subtitle = t("home.photoGallery.strategicAdvantages.subtitle");
  const ctaButton = t("home.photoGallery.strategicAdvantages.ctaButton");
  const whyLocationTitle = t(
    "home.photoGallery.strategicAdvantages.whyLocationTitle"
  );

  // Advantages data structure
  const advantages = [
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.nearThessaloniki.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.nearThessaloniki.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.nearThessaloniki.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.nearThessaloniki.timeBadge"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.bulgariaGateway.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.bulgariaGateway.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.bulgariaGateway.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.bulgariaGateway.timeBadge"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.europeAsia.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.europeAsia.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.europeAsia.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.europeAsia.timeBadge"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.threeContinents.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.threeContinents.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.threeContinents.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.threeContinents.timeBadge"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.sustainable.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.sustainable.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.sustainable.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.sustainable.timeBadge"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.advantages.multiModal.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.advantages.multiModal.description"
      ),
      distanceBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.multiModal.distanceBadge"
      ),
      timeBadge: t(
        "home.photoGallery.strategicAdvantages.advantages.multiModal.timeBadge"
      ),
    },
  ];

  // Benefits data structure
  const benefits = [
    {
      title: t(
        "home.photoGallery.strategicAdvantages.benefits.shelteredGulf.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.benefits.shelteredGulf.description"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.benefits.roadNetwork.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.benefits.roadNetwork.description"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.benefits.isoCertified.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.benefits.isoCertified.description"
      ),
    },
    {
      title: t(
        "home.photoGallery.strategicAdvantages.benefits.ispsSecurity.title"
      ),
      description: t(
        "home.photoGallery.strategicAdvantages.benefits.ispsSecurity.description"
      ),
    },
  ];
  const advantageIcons = [
    FaRoad,
    FaChartLine,
    FaGlobeAmericas,
    FaShip,
    FaLeaf,
    FaTruck,
  ];
  const advantageGradients = [
    "gradient-primary",
    "gradient-accent",
    "gradient-ocean",
    "gradient-primary",
    "gradient-green",
    "gradient-accent",
  ];
  const benefitIcons = [FaWater, FaRoad, FaCheckCircle, FaShieldAlt];
  const benefitColors = ["accent", "primary", "green-500", "accent"] as const;

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <SectionBadge icon={Globe} label={badge} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Strategic Advantages */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(
              (
                advantage: {
                  title: string;
                  description: string;
                  distanceBadge?: string;
                  timeBadge?: string;
                },
                index: number
              ) => (
                <StrategicAdvantageCardOption1
                  key={index}
                  icon={advantageIcons[index]}
                  title={advantage.title}
                  description={advantage.description}
                  gradientClass={advantageGradients[index]}
                  delay={index * 100}
                  distanceBadge={advantage.distanceBadge}
                  timeBadge={advantage.timeBadge}
                />
              )
            )}
          </div>
        </div>

        {/* Why Location Matters */}
        <div
          className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-14 shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            {whyLocationTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map(
              (
                benefit: { title: string; description: string },
                index: number
              ) => (
                <InformationItem
                  key={index}
                  icon={benefitIcons[index]}
                  title={benefit.title}
                  description={benefit.description}
                  accentColor={benefitColors[index]}
                />
              )
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button content */}
            <span className="relative z-10">{ctaButton}</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

import { FaAward, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";
import { CertificateButton, SectionBadge } from "@/components";
import { AwardIcon } from "lucide-react";

const certificationConfig = [
  {
    key: "iso14001" as const,
    icon: FaAward,
    gradient: "gradient-ocean" as const,
    link: "https://www.iso.org/standard/60857.html",
  },
  {
    key: "iso22301" as const,
    icon: FaShieldAlt,
    gradient: "gradient-ocean" as const,
    link: "https://www.iso.org/standard/75106.html",
  },
  {
    key: "iso27001" as const,
    icon: FaShieldAlt,
    gradient: "gradient-ocean" as const,
    link: "https://www.iso.org/standard/27001",
  },
  {
    key: "iso9001" as const,
    icon: FaCheckCircle,
    gradient: "gradient-ocean" as const,
    link: "https://www.iso.org/standard/88431.html",
  },
];

export const CertificateSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background" />
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container relative">
        <div data-aos="fade-up">
          <SectionBadge
            icon={AwardIcon}
            label={t("home.certifications.badge")}
          />

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            {t("home.certifications.title")}
          </h2>

          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            {t("home.certifications.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
          {certificationConfig.map(({ key, icon, gradient, link }) => (
            <CertificateButton
              key={key}
              icon={icon}
              name={t(`home.certifications.items.${key}.name`)}
              category={t(`home.certifications.items.${key}.category`)}
              gradient={gradient}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

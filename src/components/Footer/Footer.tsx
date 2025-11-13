import { memo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Anchor, Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const Footer = memo(() => {
  const { t } = useLanguage();

  const companyLinks = [
    { to: "/about", labelKey: "footer.company.about" },
    { to: "/infrastructure", labelKey: "footer.company.infrastructure" },
    { to: "/sustainability", labelKey: "footer.company.sustainability" },
    { to: "/careers", labelKey: "footer.company.careers" },
    { to: "/news", labelKey: "footer.company.news" },
    { to: "/contact", labelKey: "footer.company.contact" },
  ];

  const servicesLinks = [
    { to: "/services/container", labelKey: "footer.services.container" },
    { to: "/services/bulk", labelKey: "footer.services.bulk" },
    { to: "/services/vessel", labelKey: "footer.services.vessel" },
    { to: "/services/customs", labelKey: "footer.services.customs" },
    { to: "/services/storage", labelKey: "footer.services.storage" },
  ];

  const legalLinks = [
    { to: "/terms", labelKey: "footer.legal.terms" },
    { to: "/cookies", labelKey: "footer.legal.cookies" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-maritime-deep text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* About Section - Spanning 4 columns on large screens */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg backdrop-blur-sm">
                <Anchor className="h-8 w-8 text-accent" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block">
                  {t("footer.brand.name")}
                </span>
                <span className="text-xs text-primary-foreground/70">
                  {t("footer.brand.tagline")}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm group">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">
                    {t("footer.contact.address.line1")}
                  </p>
                  <p className="opacity-80">
                    {t("footer.contact.address.line2")}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${CONTACT_INFO.phone.number}`}
                className="flex items-center gap-3 text-sm group hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <span>{CONTACT_INFO.phone.display}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-sm group hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">
                    {t("footer.contact.hours.label")}
                  </p>
                  <p className="opacity-80">
                    {t("footer.contact.hours.value")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-6 relative inline-block">
              {t("footer.sections.company")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all group flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{t(link.labelKey as keyof typeof t)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-6 relative inline-block">
              {t("footer.sections.services")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all group flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{t(link.labelKey as keyof typeof t)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-6 relative inline-block">
              {t("footer.sections.legal")}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all group flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    <span>{t(link.labelKey as keyof typeof t)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

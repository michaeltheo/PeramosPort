import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-lg text-primary hover:text-primary-hover transition-colors"
        >
          <span className="text-2xl">⚓</span>
          <span className="hidden sm:inline">
            {t("home.hero.title", "Nea Peramos Port")}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.services")}
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />

          {/* Mobile menu button (for future implementation) */}
          <Button variant="ghost" size="sm" className="md:hidden">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

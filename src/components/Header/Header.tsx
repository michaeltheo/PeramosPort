import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, Anchor } from "lucide-react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import { useHeaderState } from "./useHeaderState";
import { LanguageToggle } from "./LanguageToggle";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { mobileMenuOpen, closeMobileMenu, toggleMobileMenu } =
    useHeaderState();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "el" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl"
          aria-label="Nea Peramos Port - Home"
        >
          <Anchor className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="hidden md:inline-block">Nea Peramos Port</span>
          <span className="md:hidden">NP Port</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation t={t} />

        {/* Right Side Actions */}
        <div className="flex items-center p-4 w-[fit]">
          <LanguageToggle language={language} onToggle={toggleLanguage} />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} t={t} />
    </header>
  );
};

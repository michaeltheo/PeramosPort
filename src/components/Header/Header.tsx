import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, Anchor } from "lucide-react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";
import { useHeaderState } from "./useHeaderState";
import { LanguageDropdown } from "./LanguageDropdown";

export const Header = () => {
  const { t } = useLanguage();
  const { mobileMenuOpen, isScrolled, closeMobileMenu, toggleMobileMenu } =
    useHeaderState();

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300"
      >
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
          <div className="flex items-center gap-2 p-4 w-[fit]">
            <LanguageDropdown />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative group hover:bg-primary/10 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-primary transition-transform duration-300 rotate-90" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                )}
                {/* Active indicator dot */}
                {!mobileMenuOpen && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Outside header to avoid stacking context issues */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} t={t} />
    </>
  );
};

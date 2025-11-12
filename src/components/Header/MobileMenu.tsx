import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICE_LINKS, MAIN_NAV_LINKS } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

export const MobileMenu = ({ isOpen, onClose, t }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 w-[280px] bg-background backdrop-blur-lg border-l border-border z-50 md:hidden transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="py-6 px-3 flex flex-col gap-1 text-foreground">
          {/* Services Section */}
          <div
            className="px-3 py-2 font-semibold text-xs text-foreground/70 uppercase tracking-wider"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            {t("nav.services")}
          </div>
          {SERVICE_LINKS.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative px-3 py-3 ml-2 text-sm text-foreground transition-all hover:text-accent hover:translate-x-1 group rounded-lg"
              onClick={onClose}
              data-aos="fade-left"
              data-aos-delay={50 * (index + 1)}
            >
              {link.title}
              <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Divider */}
          <div
            className="h-px bg-border my-3 mx-3"
            data-aos="fade-left"
            data-aos-delay="250"
          />

          {/* Main Navigation Links */}
          {MAIN_NAV_LINKS.map(({ key, href }, index) => (
            <Link
              key={href}
              to={href}
              className="relative px-3 py-3 text-sm font-medium text-foreground transition-all hover:text-accent hover:translate-x-1 group rounded-lg"
              onClick={onClose}
              data-aos="fade-left"
              data-aos-delay={300 + index * 50}
            >
              {t(`nav.${key}`)}
              <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </Link>
          ))}

          {/* CTA Button */}
          <Button
            asChild
            className="mt-6 mx-3"
            size="lg"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <Link to="/contact?form=rfq" onClick={onClose}>
              {t("cta.rfq")}
            </Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

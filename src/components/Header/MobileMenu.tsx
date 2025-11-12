import { Link } from "react-router-dom";
import { SERVICE_LINKS, MAIN_NAV_LINKS } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

export const MobileMenu = ({ isOpen, onClose, t }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-screen w-[280px] bg-background border-l border-border z-50 md:hidden overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="pt-20 pb-6 px-3 flex flex-col gap-1 text-foreground">
          {/* Services Section */}
          <div
            className="px-3 py-2 font-semibold text-xs text-foreground/70 uppercase tracking-wider"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            {t("nav.services")}
          </div>
          {SERVICE_LINKS.map((link, index) => (
            <div key={link.href} className="group">
              <Link
                to={link.href}
                className="relative block px-3 py-3 ml-2 text-sm text-foreground transition-all hover:text-accent hover:translate-x-1 rounded-lg"
                onClick={onClose}
                data-aos="fade-left"
                data-aos-delay={50 * (index + 1)}
              >
                {link.title}
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            </div>
          ))}

          {/* Divider */}
          <div
            className="h-px bg-border my-3 mx-3"
            data-aos="fade-left"
            data-aos-delay="250"
          />

          {/* Main Navigation Links */}
          {MAIN_NAV_LINKS.map(({ key, href }, index) => (
            <div key={href} className="group">
              <Link
                to={href}
                className="relative block px-3 py-3 text-sm font-medium text-foreground transition-all hover:text-accent hover:translate-x-1 rounded-lg"
                onClick={onClose}
                data-aos="fade-left"
                data-aos-delay={300 + index * 50}
              >
                {t(`nav.${key}`)}
                <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

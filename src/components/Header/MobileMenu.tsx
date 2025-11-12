import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVICE_LINKS, MAIN_NAV_LINKS } from "./constants";
import {
  Container,
  Package,
  Ship,
  FileCheck,
  Info,
  Building2,
  DollarSign,
  Mail,
  X,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import AOS from "aos";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const serviceIcons = [Container, Package, Ship, FileCheck];
const navIcons = [Info, Building2, DollarSign, Mail];

export const MobileMenu = ({ isOpen, onClose, t }: MobileMenuProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  // Refresh AOS when menu opens to trigger animations
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-[85vw] max-w-[380px] bg-white z-50 md:hidden overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white border-b border-border/50"
          data-aos="fade-down"
          data-aos-duration="400"
        >
          <div>
            <h2 className="text-lg font-bold text-foreground">Menu</h2>
            <p className="text-xs text-muted-foreground">Nea Peramos Port</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Navigation Content */}
        <nav className="p-5">
          {/* Services Section */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-1 mb-3 group"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t("nav.services")}
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="space-y-1">
                {SERVICE_LINKS.map((link, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={onClose}
                      className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                      data-aos="fade-left"
                      data-aos-delay={150 + (index * 50)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 text-sm font-medium text-foreground">
                        {link.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-6" data-aos="fade-up" data-aos-delay="300" />

          {/* Main Navigation */}
          <div data-aos="fade-up" data-aos-delay="350">
            <h3 className="px-1 mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Navigation
            </h3>
            <div className="space-y-1">
              {MAIN_NAV_LINKS.map(({ key, href }, index) => {
                const Icon = navIcons[index];
                return (
                  <Link
                    key={href}
                    to={href}
                    onClick={onClose}
                    className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                    data-aos="fade-left"
                    data-aos-delay={400 + (index * 50)}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">
                      {t(`nav.${key}`)}
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

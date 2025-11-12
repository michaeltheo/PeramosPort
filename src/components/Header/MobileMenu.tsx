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
  X
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const serviceIcons = [Container, Package, Ship, FileCheck];
const navIcons = [Info, Building2, DollarSign, Mail];

export const MobileMenu = ({ isOpen, onClose, t }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Enhanced Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modern Drawer with Maritime Theme */}
      <div
        className="fixed top-0 right-0 h-screen w-[320px] bg-gradient-to-br from-background via-background to-maritime-sky/10 border-l-2 border-primary/20 z-50 md:hidden overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="pt-6 pb-6 px-4 flex flex-col gap-2">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          {/* Services Section */}
          <div className="mb-2">
            <div
              className="px-3 py-2 font-bold text-xs text-primary uppercase tracking-widest flex items-center gap-2"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <Ship className="w-4 h-4" />
              {t("nav.services")}
            </div>
            <div className="space-y-1 mt-2">
              {SERVICE_LINKS.map((link, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div key={link.href} className="group">
                    <Link
                      to={link.href}
                      className="relative flex items-center gap-3 px-4 py-3.5 ml-2 text-sm font-medium text-foreground bg-white hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-xl border border-transparent hover:border-primary/20 transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                      onClick={onClose}
                      data-aos="fade-left"
                      data-aos-delay={50 * (index + 1)}
                    >
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-sm group-hover:shadow-md transition-shadow">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="flex-1">{link.title}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4 mx-3"
            data-aos="fade-left"
            data-aos-delay="250"
          />

          {/* Main Navigation Links */}
          <div className="space-y-1">
            {MAIN_NAV_LINKS.map(({ key, href }, index) => {
              const Icon = navIcons[index];
              return (
                <div key={href} className="group">
                  <Link
                    to={href}
                    className="relative flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-foreground bg-white hover:bg-gradient-to-r hover:from-accent/5 hover:to-primary/5 rounded-xl border border-transparent hover:border-accent/20 transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                    onClick={onClose}
                    data-aos="fade-left"
                    data-aos-delay={300 + index * 50}
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 text-accent group-hover:from-accent/20 group-hover:to-primary/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="flex-1">{t(`nav.${key}`)}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Footer Section */}
          <div
            className="mt-6 pt-6 px-3 border-t border-border/50"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 border border-primary/10">
              <p className="text-xs text-foreground/60 font-medium">
                Connecting commerce with the sea
              </p>
              <p className="text-xs text-primary font-semibold mt-1">
                © 2024 Nea Peramos Port
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

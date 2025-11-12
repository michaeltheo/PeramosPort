import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const serviceIcons = [Container, Package, Ship, FileCheck];
const navIcons = [Info, Building2, DollarSign, Mail];

export const MobileMenu = ({ isOpen, onClose, t }: MobileMenuProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Focus trap effect
  useEffect(() => {
    if (!isOpen) return;

    // Store the currently focused element to restore later
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Get all focusable elements within the menu
    const getFocusableElements = () => {
      if (!menuRef.current) return [];

      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ');

      return Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
      );
    };

    // Focus the first element (close button)
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle keyboard events for focus trapping
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      // Shift + Tab: Move focus backwards
      if (e.shiftKey) {
        if (activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      }
      // Tab: Move focus forwards
      else {
        if (activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Handle Escape key to close menu
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);

    // Cleanup and restore focus when menu closes
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);

      // Restore focus to the previously focused element
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

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
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85vw] max-w-[380px] bg-white z-50 md:hidden overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="sticky top-0 z-10  py-2 flex justify-end bg-white border-b border-border/50">
          <button
            onClick={onClose}
            className="p-2 px-5 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Navigation Content */}
        <nav className="p-5">
          {/* Services Section */}
          <div className="mb-6">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-1 mb-3 group"
            >
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t("nav.services")}
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
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
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 text-sm font-medium text-foreground">
                        {link.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-6" />

          {/* Main Navigation */}
          <div>
            <div className="space-y-1">
              {MAIN_NAV_LINKS.map(({ key, href }, index) => {
                const Icon = navIcons[index];
                return (
                  <Link
                    key={href}
                    to={href}
                    onClick={onClose}
                    className="group flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">
                      {t(`nav.${key}`)}
                    </span>
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

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { LanguageDropdown } from "./LanguageDropdown";
import { LanguageProvider } from "@/hooks/useLanguage/Provider/LanguageProvider";
import { Language } from "@/types/language";

// Mock translations
vi.mock("@/locales/en.json", () => ({
  default: {
    nav: {
      language: "Language",
      about: "About",
      services: "Services",
    },
  },
}));

vi.mock("@/locales/el.json", () => ({
  default: {
    nav: {
      language: "Γλώσσα",
      about: "Σχετικά",
      services: "Υπηρεσίες",
    },
  },
}));

vi.mock("@/locales/bg.json", () => ({
  default: {
    nav: {
      language: "Език",
      about: "За нас",
      services: "Услуги",
    },
  },
}));

/**
 * Helper function to render LanguageDropdown with LanguageProvider
 */
const renderWithLanguageProvider = (defaultLanguage: Language = "en") => {
  return render(
    <LanguageProvider defaultLanguage={defaultLanguage}>
      <LanguageDropdown />
    </LanguageProvider>
  );
};

describe("LanguageDropdown Component", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe("Rendering", () => {
    it("renders without crashing", () => {
      const { container } = renderWithLanguageProvider();
      expect(container).toBeTruthy();
    });

    it("displays ChevronDown icon in trigger button", () => {
      const { container } = renderWithLanguageProvider();

      // Check for svg element (ChevronDown renders as SVG)
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
    });
  });
});

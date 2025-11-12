import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    it("displays the current language code badge and native name", () => {
      renderWithLanguageProvider("en");

      // Check for language code badge and native name
      expect(screen.getByText("EN")).toBeInTheDocument();
      expect(screen.getByText(/English/)).toBeInTheDocument();
    });

    it("displays the globe icon", () => {
      renderWithLanguageProvider();

      // Globe icon should be present (aria-label)
      const button = screen.getByRole("button", { name: /select language/i });
      expect(button).toBeInTheDocument();
    });

    it("displays ChevronDown icon in trigger button", () => {
      const { container } = renderWithLanguageProvider();

      // Check for svg element (ChevronDown renders as SVG)
      const svgs = container.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
    });
  });

  describe("Dropdown Menu Interaction", () => {
    it("opens dropdown menu when trigger button is clicked", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      // Wait for dropdown to appear with language options
      await waitFor(() => {
        expect(screen.getByText("Greek")).toBeInTheDocument();
      });
    });

    it("displays all enabled languages in the dropdown", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      // Wait for all languages to be displayed
      await waitFor(() => {
        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("Ελληνικά")).toBeInTheDocument();
        expect(screen.getByText("Български")).toBeInTheDocument();
      });
    });

    it("shows language code badges for all languages", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        // Check for language code badges (multiple EN due to trigger + dropdown)
        expect(screen.getAllByText("EN").length).toBeGreaterThan(0);
        expect(screen.getByText("EL")).toBeInTheDocument();
        expect(screen.getByText("BG")).toBeInTheDocument();
      });
    });

    it("displays both native name and English name for each language", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        // Native names
        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("Ελληνικά")).toBeInTheDocument();
        expect(screen.getByText("Български")).toBeInTheDocument();

        // English names
        expect(screen.getByText("Greek")).toBeInTheDocument();
        expect(screen.getByText("Bulgarian")).toBeInTheDocument();
      });
    });
  });

  describe("Language Selection", () => {
    it("changes language when a language option is clicked", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider("en");

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      // Open dropdown
      await user.click(triggerButton);

      // Wait for Greek option and click it
      await waitFor(() => {
        expect(screen.getByText("Ελληνικά")).toBeInTheDocument();
      });

      const greekOption = screen.getByText("Ελληνικά");
      await user.click(greekOption);

      // Wait for dropdown to close and language to change
      await waitFor(() => {
        // The trigger button should now show Greek language code
        expect(screen.getByText("EL")).toBeInTheDocument();
      });
    });

    it("highlights the currently selected language", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider("en");

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        // The active language should have a highlighted background
        const englishOption = screen.getAllByText("English")[0].closest('[role="menuitem"]');
        expect(englishOption).toHaveClass(expect.stringContaining("bg-primary"));
      });
    });

    it("updates highlight when language is changed", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider("en");

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      // Open dropdown
      await user.click(triggerButton);

      // Click Bulgarian option
      await waitFor(() => {
        expect(screen.getByText("Български")).toBeInTheDocument();
      });

      const bulgarianOption = screen.getByText("Български");
      await user.click(bulgarianOption);

      // Reopen dropdown to verify highlight
      await user.click(triggerButton);

      await waitFor(() => {
        const bulgarianItem = screen
          .getByText("Български")
          .closest('[role="menuitem"]');
        expect(bulgarianItem).toHaveClass(expect.stringContaining("bg-primary"));
      });
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA labels on trigger button", () => {
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      expect(triggerButton).toHaveAttribute("aria-label", "Select language");
    });

    it("uses menu items for language selection", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        const menuItems = screen.getAllByRole("menuitem");
        expect(menuItems).toHaveLength(3); // en, el, bg
      });
    });
  });

  describe("Styling and Visual States", () => {
    it("applies hover styles to trigger button", () => {
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      // Check for hover classes
      expect(triggerButton).toHaveClass("hover:bg-primary/10");
    });

    it("applies highlight to selected language option", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider("en");

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        const activeOption = screen
          .getAllByText("English")[0]
          .closest('[role="menuitem"]');

        // Check for background classes on active item
        expect(activeOption).toHaveClass(expect.stringContaining("bg-primary"));
      });
    });
  });

  describe("Responsive Behavior", () => {
    it("hides native name on small screens and shows only badge", () => {
      const { container } = renderWithLanguageProvider("en");

      // Check for sm:hidden class on badge-only span
      const badgeOnlySpan = container.querySelector(".sm\\:hidden");
      expect(badgeOnlySpan).toBeInTheDocument();

      // Check for hidden sm:flex class on full name span
      const fullNameSpan = container.querySelector(".hidden.sm\\:flex");
      expect(fullNameSpan).toBeInTheDocument();
    });
  });

  describe("Integration with useLanguage Hook", () => {
    it("initializes with correct default language", () => {
      renderWithLanguageProvider("el");

      // Should display Greek language code and name
      expect(screen.getByText("EL")).toBeInTheDocument();
      expect(screen.getByText(/Ελληνικά/)).toBeInTheDocument();
    });

    it("retrieves language info correctly for all enabled languages", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      await user.click(triggerButton);

      await waitFor(() => {
        // Verify all language metadata is displayed correctly
        expect(screen.getByText("English")).toBeInTheDocument();
        expect(screen.getByText("Ελληνικά")).toBeInTheDocument();
        expect(screen.getByText("Български")).toBeInTheDocument();
        expect(screen.getByText("Greek")).toBeInTheDocument();
        expect(screen.getByText("Bulgarian")).toBeInTheDocument();
      });
    });
  });

  describe("Edge Cases", () => {
    it("handles rapid clicks on trigger button gracefully", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider();

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      // Rapidly click the button
      await user.click(triggerButton);
      await user.click(triggerButton);
      await user.click(triggerButton);

      // Component should still be functional
      expect(triggerButton).toBeInTheDocument();
    });

    it("maintains state when switching between multiple languages", async () => {
      const user = userEvent.setup();
      renderWithLanguageProvider("en");

      const triggerButton = screen.getByRole("button", {
        name: /select language/i,
      });

      // Switch to Greek
      await user.click(triggerButton);
      await waitFor(() => screen.getByText("Ελληνικά"));
      await user.click(screen.getByText("Ελληνικά"));

      // Switch to Bulgarian
      await user.click(triggerButton);
      await waitFor(() => screen.getByText("Български"));
      await user.click(screen.getByText("Български"));

      // Verify Bulgarian language code is now displayed
      expect(screen.getByText("BG")).toBeInTheDocument();
    });
  });
});

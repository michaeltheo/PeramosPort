import { ReactNode, useState, useEffect, useCallback } from "react";
import {
  Language,
  ENABLED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  AVAILABLE_LANGUAGES,
} from "@/types/language";
import { translations } from "@/locales";
import { LanguageContext, LanguageContextValue } from "../Context";

export interface LanguageProviderProps {
  children: ReactNode;
  /** Override default language */
  defaultLanguage?: Language;
  /** Override storage key */
  storageKey?: string;
}

/**
 * Language Provider Component
 *
 * Manages language state globally and provides translation functionality
 * Automatically persists language preference to localStorage
 *
 * Features:
 * - Multi-language support (currently EN/EL, ready for more)
 * - localStorage persistence
 * - HTML lang attribute updates
 * - Type-safe translation keys
 * - Fallback support
 * - Language metadata access
 *
 * @example
 * // In App.tsx
 * import { LanguageProvider } from '@/hooks/useLanguage';
 *
 * function App() {
 *   return (
 *     <LanguageProvider defaultLanguage="en">
 *       <YourApp />
 *     </LanguageProvider>
 *   );
 * }
 */
export const LanguageProvider = ({
  children,
  defaultLanguage = DEFAULT_LANGUAGE,
  storageKey = LANGUAGE_STORAGE_KEY,
}: LanguageProviderProps) => {
  // Initialize language from localStorage or use default
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Language;

      // Validate stored language is enabled
      if (stored && ENABLED_LANGUAGES.includes(stored)) {
        return stored;
      }
    }
    return defaultLanguage;
  });

  // Persist language changes to localStorage and HTML lang attribute
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, language);
      document.documentElement.lang = language;

      // Set text direction (for RTL languages like Arabic)
      document.documentElement.dir = AVAILABLE_LANGUAGES[language].direction;
    }
  }, [language, storageKey]);

  /**
   * Change the active language
   * Validates that the language is enabled before switching
   */
  const setLanguage = useCallback((lang: Language) => {
    if (ENABLED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
    } else {
      console.warn(
        `Language "${lang}" is not enabled. ` +
          `Enabled languages: ${ENABLED_LANGUAGES.join(", ")}`
      );
    }
  }, []);

  /**
   * Translation function with nested key support and fallback
   *
   * Supports:
   * - Dot notation: t('nav.about')
   * - Nested objects: t('welcome.hero.title')
   * - Fallback text: t('missing.key', 'Default text')
   * - Missing key warnings in development
   *
   * @param key - Translation key using dot notation
   * @param fallback - Optional fallback text if translation not found
   * @returns Translated string or fallback/key
   */
  const t = useCallback(
    (key: string, fallback?: string): string => {
      try {
        // Split the key by dots to support nested objects
        const keys = key.split(".");
        let value: unknown =
          translations[language as keyof typeof translations];

        // Traverse the nested object
        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = (value as Record<string, unknown>)[k];
          } else {
            value = undefined;
            break;
          }
        }

        // Return the value if it's a string
        if (typeof value === "string") {
          return value;
        }

        // If translation not found, warn in development
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `Translation missing for key "${key}" in language "${language}"`
          );
        }

        // Return fallback or key
        return fallback || key;
      } catch (error) {
        console.error(`Error translating key "${key}":`, error);
        return fallback || key;
      }
    },
    [language]
  );

  /**
   * Get metadata for a specific language
   */
  const getLanguageInfo = useCallback((lang: Language) => {
    return AVAILABLE_LANGUAGES[lang];
  }, []);

  /**
   * Check if a language is currently enabled
   */
  const isLanguageEnabled = useCallback((lang: Language): boolean => {
    return ENABLED_LANGUAGES.includes(lang);
  }, []);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t,
    enabledLanguages: ENABLED_LANGUAGES,
    getLanguageInfo,
    isLanguageEnabled,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

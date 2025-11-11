/**
 * Supported languages in the application
 * Add more language codes here as you expand
 */
export type Language = "en" | "el" | "de" | "fr" | "it" | "es";

/**
 * Language metadata for display and configuration
 */
export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string; // Emoji flag
  direction: "ltr" | "rtl"; // Text direction
}

/**
 * Available languages with their metadata
 * Currently active: English (en) and Greek (el)
 */
export const AVAILABLE_LANGUAGES: Record<Language, LanguageInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    direction: "ltr",
  },
  el: {
    code: "el",
    name: "Greek",
    nativeName: "Ελληνικά",
    flag: "🇬🇷",
    direction: "ltr",
  },
  // Placeholder entries for future languages
} as const;

/**
 * Languages that are currently enabled in the application
 * To enable more languages:
 * 1. Add translation files in /locales
 * 2. Add the language code here
 * 3. The language will automatically appear in language switcher
 */
export const ENABLED_LANGUAGES: Language[] = ["en", "el"];

/**
 * Default language fallback
 */
export const DEFAULT_LANGUAGE: Language = "en";

/**
 * localStorage key for persisting language preference
 */
export const LANGUAGE_STORAGE_KEY = "nea-peramos-port-language";

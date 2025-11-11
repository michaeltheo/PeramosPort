import { createContext } from "react";
import { Language, LanguageInfo } from "@/types/language";

/**
 * Context value shape
 */
export interface LanguageContextValue {
  /** Current active language */
  language: Language;

  /** Change the active language */
  setLanguage: (lang: Language) => void;

  /** Translation function - get translated text by key */
  t: (key: string, fallback?: string) => string;

  /** Get all enabled languages */
  enabledLanguages: Language[];

  /** Get metadata for a specific language */
  getLanguageInfo: (lang: Language) => LanguageInfo;

  /** Check if a language is enabled */
  isLanguageEnabled: (lang: Language) => boolean;
}

/**
 * Language Context
 *
 * Provides language state and functionality across the application
 */
export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

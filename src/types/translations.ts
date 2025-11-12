import { en } from "@/locales/en";

/**
 * Translation keys type - derived from English translations
 * This provides full type safety and autocomplete for translation keys
 */
export type TranslationKeys = DeepKeys<typeof en>;

/**
 * Helper type to get all possible deep key paths of an object
 * e.g., { a: { b: { c: string } } } => "a" | "a.b" | "a.b.c"
 */
type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${DeepKeys<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

/**
 * Translation object type
 */
export type Translations = typeof en;

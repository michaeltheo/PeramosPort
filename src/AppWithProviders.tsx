import { LanguageProvider } from "@/hooks/useLanguage";
import App from "./App";

/**
 * App wrapper with Language Provider
 *
 * This component wraps the main App with the LanguageProvider to enable
 * internationalization throughout the application.
 *
 * Features:
 * - Provides language context to all components
 * - Handles language switching
 * - Persists language preference
 * - Updates HTML lang attribute
 */
export const AppWithProviders = () => {
  return (
    <LanguageProvider defaultLanguage="en">
      <App />
    </LanguageProvider>
  );
};

export default AppWithProviders;

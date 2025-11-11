import React, { useContext } from "react";
import { LanguageContext, LanguageContextValue } from "./Context";

/**
 * Hook to access language context
 *
 * Must be used within a LanguageProvider
 *
 * @throws Error if used outside LanguageProvider
 *
 * @example
 * function MyComponent() {
 *   const { language, setLanguage, t } = useLanguage();
 *
 *   return (
 *     <div>
 *       <p>Current language: {language}</p>
 *       <p>{t('welcome.title')}</p>
 *     </div>
 *   );
 * }
 */
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider. " +
        "Wrap your app with <LanguageProvider>...</LanguageProvider>"
    );
  }

  return context;
};

/**
 * HOC to provide language context to class components
 * (Optional - use only if you have class components)
 *
 * @example
 * class MyClassComponent extends React.Component<WithLanguageProps> {
 *   render() {
 *     const { t } = this.props.language;
 *     return <h1>{t('welcome.title')}</h1>;
 *   }
 * }
 *
 * export default withLanguage(MyClassComponent);
 */
export interface WithLanguageProps {
  language: LanguageContextValue;
}

export const withLanguage = <P extends WithLanguageProps>(
  Component: React.ComponentType<P>
) => {
  return (props: Omit<P, "language">) => {
    const language = useLanguage();
    return <Component {...(props as P)} language={language} />;
  };
};
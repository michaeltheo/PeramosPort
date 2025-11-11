import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Language Switcher Component
 *
 * Provides a UI for switching between available languages
 */
export const LanguageSwitcher = () => {
  const { language, setLanguage, enabledLanguages, getLanguageInfo, t } =
    useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground hidden sm:inline">
        {t("nav.language")}:
      </span>
      <div className="flex space-x-1">
        {enabledLanguages.map((lang) => {
          const langInfo = getLanguageInfo(lang);
          return (
            <Button
              key={lang}
              variant={language === lang ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage(lang)}
              className={cn(
                "px-3 py-1 text-xs font-medium transition-all",
                language === lang
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
              title={`Switch to ${langInfo.name}`}
            >
              {langInfo.flag} {langInfo.code.toUpperCase()}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

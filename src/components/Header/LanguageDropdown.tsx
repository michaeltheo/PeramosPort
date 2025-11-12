import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Language } from "@/types/language";

/**
 * Simple Language Dropdown Component
 *
 * A clean dropdown menu for language selection with language codes and native names.
 *
 * Features:
 * - Language code badges (EN, EL, BG)
 * - Native language names
 * - Smooth animations and transitions
 * - Fully accessible with ARIA labels
 * - Responsive design
 *
 * @example
 * ```tsx
 * <LanguageDropdown />
 * ```
 */
export const LanguageDropdown = () => {
  const { language, setLanguage, enabledLanguages, getLanguageInfo } =
    useLanguage();

  const currentLangInfo = getLanguageInfo(language);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative group hover:bg-primary/10 transition-all duration-300 gap-2 px-3"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden sm:flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-bold text-white bg-primary rounded">
              {currentLangInfo.code.toUpperCase()}
            </span>
            <span className="text-sm font-medium text-foreground">
              {currentLangInfo.nativeName}
            </span>
          </span>
          <span className="px-2 py-0.5 text-xs font-bold text-white bg-primary rounded sm:hidden">
            {currentLangInfo.code.toUpperCase()}
          </span>
          <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[180px] bg-white border border-border shadow-lg"
      >
        {enabledLanguages.map((lang) => {
          const langInfo = getLanguageInfo(lang);
          const isActive = language === lang;

          return (
            <DropdownMenuItem
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors",
                "hover:bg-primary/5 focus:bg-primary/5",
                isActive && "bg-primary/10 font-medium"
              )}
            >
              {/* Language Code Badge */}
              <span className="px-2 py-0.5 text-xs font-bold text-white bg-gradient-to-br from-primary to-accent rounded shadow-sm">
                {langInfo.code.toUpperCase()}
              </span>

              {/* Language Names */}
              <div className="flex flex-col flex-1">
                <span className="text-sm font-medium text-foreground">
                  {langInfo.nativeName}
                </span>
                <span className="text-xs text-muted-foreground">
                  {langInfo.name}
                </span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

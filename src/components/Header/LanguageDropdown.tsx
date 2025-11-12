import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Language } from "@/types/language";

/**
 * Professional Language Dropdown Component
 *
 * A maritime-themed dropdown menu for language selection with flags and native names.
 * Integrates with the language context to provide seamless language switching.
 *
 * Features:
 * - Displays flag emoji and native language name
 * - Radio group for single selection
 * - Check indicator for active language
 * - Smooth animations and transitions
 * - Fully accessible with ARIA labels
 * - Responsive design for all screen sizes
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
          <span className="text-sm font-medium text-foreground hidden sm:inline">
            {currentLangInfo.flag} {currentLangInfo.nativeName}
          </span>
          <span className="text-sm font-medium text-foreground sm:hidden">
            {currentLangInfo.flag}
          </span>
          <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-[200px] bg-white border-2 border-primary/10 shadow-xl"
      >
        <DropdownMenuLabel className="flex items-center gap-2 text-primary">
          <Globe className="h-4 w-4" />
          Select Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary/20" />

        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          {enabledLanguages.map((lang) => {
            const langInfo = getLanguageInfo(lang);
            const isActive = language === lang;

            return (
              <DropdownMenuRadioItem
                key={lang}
                value={lang}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-3 cursor-pointer rounded-md transition-all duration-300",
                  "hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5",
                  "focus:bg-gradient-to-r focus:from-primary/5 focus:to-accent/5",
                  isActive &&
                    "bg-gradient-to-r from-primary/10 to-accent/10 font-semibold"
                )}
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* Flag Icon */}
                  <span className="text-2xl" role="img" aria-label={langInfo.name}>
                    {langInfo.flag}
                  </span>

                  {/* Language Names */}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {langInfo.nativeName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {langInfo.name}
                    </span>
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="ml-auto">
                    <Check className="h-4 w-4 text-primary animate-in fade-in zoom-in duration-200" />
                  </div>
                )}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

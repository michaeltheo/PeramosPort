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
import { FlagIcon } from "@/components/icons/FlagIcons";

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
          <span className="hidden sm:flex items-center gap-2">
            <FlagIcon
              countryCode={currentLangInfo.flagCode}
              className="w-5 h-5 rounded-sm shadow-sm"
            />
            <span className="text-sm font-medium text-foreground">
              {currentLangInfo.nativeName}
            </span>
          </span>
          <FlagIcon
            countryCode={currentLangInfo.flagCode}
            className="w-5 h-5 sm:hidden rounded-sm shadow-sm"
          />
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
                  <FlagIcon
                    countryCode={langInfo.flagCode}
                    className="w-8 h-6 rounded-sm shadow-sm border border-border"
                  />

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

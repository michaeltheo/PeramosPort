import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: string;
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="hover:bg-accent"
      style={{ width: "4rem" }}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-1 text-xs font-semibold">
        {language.toUpperCase()}
      </span>
    </Button>
  );
};

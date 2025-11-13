import { IconType } from "react-icons";
import { memo } from "react";

interface InformationItemProps {
  icon: IconType;
  title: string;
  description: string;
  accentColor: string;
}

// InformationItem component
export const InformationItem = memo(
  ({ icon: Icon, title, description, accentColor }: InformationItemProps) => {
    // Define color scheme based on accent color
    const getColorScheme = () => {
      if (accentColor.includes("green")) {
        return {
          iconBg: "bg-gradient-to-br from-green-500/20 to-green-600/10",
          iconColor: "text-green-500",
          hoverBorder: "hover:border-green-500/20",
        };
      } else if (accentColor.includes("primary")) {
        return {
          iconBg: "bg-gradient-to-br from-primary/20 to-primary/10",
          iconColor: "text-primary",
          hoverBorder: "hover:border-primary/20",
        };
      } else {
        return {
          iconBg: "bg-gradient-to-br from-accent/20 to-accent/10",
          iconColor: "text-accent",
          hoverBorder: "hover:border-accent/20",
        };
      }
    };

    const colorScheme = getColorScheme();

    return (
      <article
        className={`flex items-start gap-5 p-4 rounded-xl border border-transparent ${colorScheme.hoverBorder} transition-all duration-300 group`}
      >
        {/* Icon container */}
        <div
          className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl ${colorScheme.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}
        >
          <Icon
            className={`w-6 h-6 md:w-7 md:h-7 ${colorScheme.iconColor}`}
            aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-base md:text-lg mb-2 text-primary group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    );
  }
);

InformationItem.displayName = "InformationItem";

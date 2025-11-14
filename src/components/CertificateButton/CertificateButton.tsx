import { IconType } from "react-icons";

export interface CertificateButtonProps {
  icon: IconType;
  name: string;
  category: string;
  gradient?:
    | "gradient-green"
    | "gradient-primary"
    | "gradient-accent"
    | "gradient-ocean";
  delay?: number;
  link?: string;
  onClick?: () => void;
}

export const CertificateButton = ({
  icon: Icon,
  name,
  category,
  gradient = "gradient-primary",
  delay = 0,
  link,
  onClick,
}: CertificateButtonProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
    if (onClick) {
      onClick();
    }
  };

  const isClickable = link || onClick;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className={`flex flex-col items-center p-6 bg-card/50 backdrop-blur rounded-xl border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:border-accent/40 relative overflow-hidden group ${
        isClickable ? "cursor-pointer" : ""
      }`}
      onClick={isClickable ? handleClick : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <Icon className="h-12 w-12 text-accent mb-3 group-hover:scale-125 transition-transform duration-300" />

      <span className="font-semibold text-sm relative z-10 text-center">
        {name}
      </span>

      <span className="text-xs text-muted-foreground mt-1 relative z-10 text-center">
        {category}
      </span>

      {link && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

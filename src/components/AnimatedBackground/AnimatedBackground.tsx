import { ReactNode } from "react";
import { FaShip, FaAnchor, FaCompass } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  children: ReactNode;
  /** Show floating maritime icons (ship, anchor, compass) */
  showIcons?: boolean;
  /** Show grid pattern overlay */
  showGrid?: boolean;
  /** Show gradient overlay */
  showGradient?: boolean;
  /** Show decorative blur circles */
  showBlurCircles?: boolean;
  /** Show wave decoration at bottom */
  showWave?: boolean;
  /** Additional className for the container */
  className?: string;
  /** Variant of the background */
  variant?: "default" | "ocean" | "primary" | "accent";
}

export const AnimatedBackground = ({
  children,
  showIcons = false,
  showGrid = true,
  showGradient = true,
  showBlurCircles = true,
  showWave = false,
  className,
  variant = "default",
}: AnimatedBackgroundProps) => {
  const variantClasses = {
    default: "from-background via-primary/5 to-accent/5",
    ocean: "from-blue-950 via-blue-900/20 to-cyan-900/20",
    primary: "from-background via-primary/10 to-primary/5",
    accent: "from-background via-accent/10 to-accent/5",
  };

  return (
    <div
      className={cn(
        "min-h-screen relative overflow-hidden bg-gradient-to-br",
        variantClasses[variant],
        className
      )}
    >
      {/* Grid Pattern Background */}
      {showGrid && <div className="absolute inset-0 bg-grid-white/[0.02]" />}

      {/* Gradient Overlay */}
      {showGradient && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
      )}

      {/* Blur Circles */}
      {showBlurCircles && (
        <>
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        </>
      )}

      {/* Animated Maritime Icons */}
      {showIcons && (
        <>
          <div className="absolute top-20 left-10 opacity-10 animate-float pointer-events-none">
            <FaShip className="w-24 h-24 text-primary" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-10 animate-float-delayed pointer-events-none">
            <FaAnchor className="w-20 h-20 text-accent" />
          </div>
          <div className="absolute top-1/2 left-1/4 opacity-10 animate-spin-slow pointer-events-none">
            <FaCompass className="w-16 h-16 text-primary" />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Decorative Wave at Bottom */}
      {showWave && (
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="0.3"
              className="text-primary"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { FaAnchor, FaShip, FaCompass } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { AnimatedBackground } from "@/components";

// Not Found (404) Page Component
export const NotFound = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <AnimatedBackground
      showIcons
      showGrid
      showGradient
      showBlurCircles
      showWave
    >
      <div className="container flex flex-col items-center justify-center min-h-screen py-16">
        {/* 404 Number with Maritime Theme */}
        <div
          className="mb-8 relative"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-bold gradient-text opacity-20 leading-none select-none">
            {t("notFound.title")}
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FaShip className="w-32 h-32 md:w-40 md:h-40 text-primary animate-bounce-slow" />
          </div>
        </div>

        {/* Heading & Description */}
        <div
          className="text-center max-w-2xl mb-12 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
            {t("notFound.heading")}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t("notFound.subheading")}
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t("notFound.description")}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <FaAnchor className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            {t("notFound.primaryButton")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/services")}
            className="px-8 py-6 text-lg border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FaCompass className="mr-2" />
            {t("notFound.secondaryButton")}
          </Button>
        </div>
      </div>
    </AnimatedBackground>
  );
};

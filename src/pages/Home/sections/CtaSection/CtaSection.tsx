import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import portOperations from "@/assets/icons/port-operations.jpg";

export const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portOperations})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

      <div className="container text-center relative">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="group">
            <Link to="/contact?form=rfq" className="flex items-center gap-2">
              {t("home.cta.primaryButton")}
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="default">
            <Link to="/pricing" className="flex items-center gap-2">
              {t("home.cta.secondaryButton")}
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

import { memo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks";
import { ArrowRight } from "lucide-react";

interface VideoHeroProps {
  tagline: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  showCTA?: boolean;
}

const VideoHero = memo(
  ({
    tagline,
    subtitle,
    backgroundImage,
    backgroundVideo,
    showCTA = true,
  }: VideoHeroProps) => {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay - Parallax Effect */}
        <div
          className="absolute inset-0"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          {backgroundVideo ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ transform: "translateZ(0)" }}
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            </>
          ) : backgroundImage ? (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <div className="absolute inset-0 image-placeholder gradient-hero" />
          )}
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-grid-white/5" />
        </div>

        {/* Content - Full-width layout with asymmetric positioning */}
        <div className="container-wide relative z-10 px-4 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-left" data-aos="fade-right" data-aos-delay="0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl max-w-[18ch]">
                {tagline}
              </h1>

              {subtitle && (
                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-[30ch] drop-shadow-lg leading-relaxed">
                  {subtitle}
                </p>
              )}

              {showCTA && (
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-lg h-14 px-8 bg-accent hover:bg-accent-hover shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
                  >
                    <Link to="/contact?form=rfq">
                      {t("home.videoHero.cta")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg h-14 px-8 bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-105 transition-all"
                  >
                    <Link to="/about">{t("home.videoHero.learn")}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

VideoHero.displayName = "VideoHero";

export default VideoHero;

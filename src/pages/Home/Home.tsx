import { useLanguage } from "@/hooks/useLanguage";
import { VideoHero } from "@/components/VideoHero";
import { StatsSection, PhotoGallerySection } from "./sections/";
import MainVideoNeaPeramos from "@/assets/MainVideoNeaPeramos.mp4";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Main hero Section - Full screen video */}
      <VideoHero
        tagline={t("home.videoHero.tagline")}
        subtitle={t("home.videoHero.subtitle")}
        backgroundVideo={MainVideoNeaPeramos}
        showCTA={true}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Photo Gallery Section */}
      <PhotoGallerySection />
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(210 100% 12%), hsl(210 100% 25%))"
        }}
        data-aos="slide-left"
        data-aos-duration="1000"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal stripe pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)",
              backgroundSize: "56px 56px"
            }}
          />

          {/* Gradient orbs matching primary colors */}
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(210 100% 30%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(210 100% 20%) 0%, transparent 70%)" }}
          />
        </div>

        <div className="container relative">
          <div className="text-white">Testrwilgrewoigheroig</div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">{t("home.about.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("home.about.description")}
            </p>

            {/* Translation Keys Demo */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Translation Keys Demo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Navigation:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>nav.home: {t("nav.home")}</li>
                    <li>nav.about: {t("nav.about")}</li>
                    <li>nav.services: {t("nav.services")}</li>
                  </ul>
                </div>
                <div>
                  <strong>Common:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>common.welcome: {t("common.welcome")}</li>
                    <li>common.loading: {t("common.loading")}</li>
                    <li>common.error: {t("common.error")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

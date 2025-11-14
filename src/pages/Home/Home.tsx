import { useLanguage } from "@/hooks/useLanguage";
import { VideoHero } from "@/components/VideoHero";
import {
  StatsSection,
  PhotoGallerySection,
  StrategicAdvantagesSection,
  CertificateSection,
  CtaSection,
} from "./sections/";
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
      {/* Gateway Section - Strategic Location */}
      <StrategicAdvantagesSection />
      {/* Certificate Section */}
      <CertificateSection />
      {/* Call to Action Section */}
      <CtaSection />
    </div>
  );
};

export default Home;

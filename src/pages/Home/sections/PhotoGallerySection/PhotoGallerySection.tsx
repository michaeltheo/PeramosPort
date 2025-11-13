import { useLanguage } from "@/hooks/useLanguage";
import { GalleryCard } from "@/components";
import { TranslationKeys } from "@/types/translations";
import { Globe } from "lucide-react";

// Import images - replace these with your actual image imports
import portAerial1 from "@/assets/icons/port-aerial-1.jpg";
import portAerial2 from "@/assets/icons/port-aerial-2.jpg";
import portAerial3 from "@/assets/icons/port-aerial-3.jpg";
import portOperations from "@/assets/icons/port-operations.jpg";

interface GalleryItem {
  image: string;
  titleKey: TranslationKeys;
  descriptionKey: TranslationKeys;
  icon?: typeof Globe;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: portAerial1,
    titleKey: "home.photoGallery.strategicLocation.title",
    descriptionKey: "home.photoGallery.strategicLocation.description",
  },
  {
    image: portAerial2,
    titleKey: "home.photoGallery.modernTerminal.title",
    descriptionKey: "home.photoGallery.modernTerminal.description",
  },
  {
    image: portAerial3,
    titleKey: "home.photoGallery.excellence.title",
    descriptionKey: "home.photoGallery.excellence.description",
  },
  {
    image: portOperations,
    titleKey: "home.photoGallery.expansion.title",
    descriptionKey: "home.photoGallery.expansion.description",
  },
];

export const PhotoGallerySection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(210 60% 97%) 50%, hsl(210 50% 96%) 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(210 100% 85%) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(200 100% 88%) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(210 100% 25%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(210 100% 25%) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Scrolling vertical text "NEA PERAMOS" */}
        <div className="absolute inset-y-0 left-8 md:left-16 flex flex-col justify-start overflow-hidden opacity-[0.04]">
          <div className="animate-scroll-vertical whitespace-nowrap">
            <div
              className="text-[12rem] md:text-[16rem] font-black text-primary uppercase tracking-tighter"
              style={{ writingMode: "vertical-rl" }}
            >
              NEA PERAMOS PORT
            </div>
          </div>
        </div>
      </div>

      <div className="container relative">
        {/* Section header */}
        <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t("home.photoGallery.badge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("home.photoGallery.title")}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("home.photoGallery.subtitle")}
          </p>
        </div>

        {/* Gallery grid - horizontal row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-aos="fade-up"
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard
              key={item.titleKey}
              image={item.image}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

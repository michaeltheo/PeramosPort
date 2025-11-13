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
  direction: "left" | "right";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: portAerial1,
    titleKey: "home.photoGallery.strategicLocation.title",
    descriptionKey: "home.photoGallery.strategicLocation.description",
    direction: "right",
  },
  {
    image: portAerial2,
    titleKey: "home.photoGallery.modernTerminal.title",
    descriptionKey: "home.photoGallery.modernTerminal.description",
    direction: "left",
  },
  {
    image: portAerial3,
    titleKey: "home.photoGallery.excellence.title",
    descriptionKey: "home.photoGallery.excellence.description",
    direction: "right",
  },
  {
    image: portOperations,
    titleKey: "home.photoGallery.expansion.title",
    descriptionKey: "home.photoGallery.expansion.description",
    direction: "left",
  },
];

export const PhotoGallerySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/90">
      <div className="container">
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

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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

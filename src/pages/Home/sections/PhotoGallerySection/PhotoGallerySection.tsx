import { useLanguage } from "@/hooks/useLanguage";
import { GalleryCard } from "@/components";
import { TranslationKeys } from "@/types/translations";
import { Globe, TrendingUp, Sparkles, Building2 } from "lucide-react";

// Import images - replace these with your actual image imports
// import portAerial1 from "@/assets/port-aerial-1.jpg";
// import portAerial2 from "@/assets/port-aerial-2.jpg";
// import portAerial3 from "@/assets/port-aerial-3.jpg";
// import portOperations from "@/assets/port-operations.jpg";

interface GalleryItem {
  image: string;
  titleKey: TranslationKeys;
  descriptionKey: TranslationKeys;
  icon: typeof Globe;
  direction: "left" | "right";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop",
    titleKey: "home.photoGallery.strategicLocation.title",
    descriptionKey: "home.photoGallery.strategicLocation.description",
    icon: Globe,
    direction: "right",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    titleKey: "home.photoGallery.modernTerminal.title",
    descriptionKey: "home.photoGallery.modernTerminal.description",
    icon: Building2,
    direction: "left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605731414904-67ce785d4b5f?w=800&h=600&fit=crop",
    titleKey: "home.photoGallery.excellence.title",
    descriptionKey: "home.photoGallery.excellence.description",
    icon: Sparkles,
    direction: "right",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop",
    titleKey: "home.photoGallery.expansion.title",
    descriptionKey: "home.photoGallery.expansion.description",
    icon: TrendingUp,
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
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard
              key={item.titleKey}
              image={item.image}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
              icon={item.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

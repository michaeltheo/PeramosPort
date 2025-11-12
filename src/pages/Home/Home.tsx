import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 lg:py-32">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            {t("home.hero.subtitle")}
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              {t("nav.services")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              {t("nav.about")}
            </Button>
          </div>
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

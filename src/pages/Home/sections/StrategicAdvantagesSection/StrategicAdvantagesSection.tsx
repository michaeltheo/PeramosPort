import {
  FaGlobeAmericas,
  FaRoad,
  FaChartLine,
  FaLeaf,
  FaWater,
  FaCheckCircle,
  FaShieldAlt,
  FaShip,
  FaTruck,
} from "react-icons/fa";
import { Globe } from "lucide-react";
import {
  StrategicAdvantageCard,
  SectionBadge,
  InformationItem,
} from "@/components";
import { useLanguage } from "@/hooks/useLanguage";

export const StrategicAdvantagesSection = () => {
  const { language } = useLanguage();

  // Map language codes
  const lang = language === "el" ? "gr" : language === "bg" ? "en" : language;
  const content = {
    en: {
      badge: "Strategic Location",
      title: "Your Gateway to Europe & Asia",
      subtitle:
        "Positioned at the crossroads of continents. Connect Europe to Asia by road. Minutes from Thessaloniki and Kavala. Bulgaria's direct export gateway.",
      advantages: [
        {
          title: "Near Thessaloniki & Kavala",
          description:
            "Minutes from two major Greek cities with international airports and established logistics networks.",
          distanceBadge: "60-80 km",
          timeBadge: "< 1 hour",
        },
        {
          title: "Bulgaria's Export Gateway",
          description:
            "Closest Greek port to Bulgaria. Direct road connection enables rapid land-sea freight transfer for Bulgarian exports.",
          distanceBadge: "120 km",
          timeBadge: "90 min",
        },
        {
          title: "Europe-Asia Land Bridge",
          description:
            "Strategic position on the European road network connecting to Asia via Turkey. Road freight meets maritime logistics.",
          distanceBadge: "Via E90",
          timeBadge: "Direct route",
        },
        {
          title: "Three Continents Connected",
          description:
            "Direct maritime access to Europe, Asia, and Africa. Strategic Mediterranean position enables seamless global trade connections.",
          distanceBadge: "3 Continents",
          timeBadge: "24/7 Access",
        },
        {
          title: "Sustainable Port Operations",
          description:
            "Zero carbon emissions target by 2030. Committed to eco-friendly practices and green maritime logistics.",
          distanceBadge: "0% Target",
          timeBadge: "By 2030",
        },
        {
          title: "Multi-Modal Transport Hub",
          description:
            "Seamless integration of road, rail, and maritime transport. Efficient cargo transfer between land and sea logistics.",
          distanceBadge: "Road + Sea",
          timeBadge: "2-4h Transfer",
        },
      ],
      ctaButton: "Explore Our Capabilities",
      stats: {
        continents: "Continents Connected",
        crossBorder: "Cross-Border Ready",
        carbon: "Carbon Emissions Target",
      },
      whyLocationTitle: "Why Location Matters",
      benefits: [
        {
          title: "Sheltered Natural Gulf",
          description: "Very low wind exposure - safe operations year-round",
        },
        {
          title: "Road Network Access",
          description: "Direct connection to European highways and Turkey",
        },
        {
          title: "ISO Certified Operations",
          description: "ISO 14001, 22301, 27001, 9001 standards",
        },
        {
          title: "ISPS Security Compliant",
          description:
            "International port security standards fully implemented",
        },
      ],
    },
    gr: {
      badge: "Στρατηγική Τοποθεσία",
      title: "Η Πύλη σας για Ευρώπη & Ασία",
      subtitle:
        "Στη διασταύρωση των ηπείρων. Συνδέστε την Ευρώπη με την Ασία οδικώς. Λίγα λεπτά από Θεσσαλονίκη και Καβάλα. Άμεση πύλη εξαγωγών της Βουλγαρίας.",
      advantages: [
        {
          title: "Κοντά σε Θεσσαλονίκη & Καβάλα",
          description:
            "Λίγα λεπτά από δύο μεγάλες ελληνικές πόλεις με διεθνή αεροδρόμια και καθιερωμένα δίκτυα logistics.",
          distanceBadge: "60-80 χλμ",
          timeBadge: "< 1 ώρα",
        },
        {
          title: "Πύλη Εξαγωγών Βουλγαρίας",
          description:
            "Πλησιέστερο ελληνικό λιμάνι στη Βουλγαρία. Άμεση οδική σύνδεση για ταχεία μεταφορά οδικού-θαλάσσιου φορτίου βουλγαρικών εξαγωγών.",
          distanceBadge: "120 χλμ",
          timeBadge: "90 λεπτά",
        },
        {
          title: "Χερσαία Γέφυρα Ευρώπης-Ασίας",
          description:
            "Στρατηγική θέση στο ευρωπαϊκό οδικό δίκτυο που συνδέεται με την Ασία μέσω Τουρκίας. Οδικό φορτίο συναντά θαλάσσια logistics.",
          distanceBadge: "Μέσω E90",
          timeBadge: "Άμεση διαδρομή",
        },
        {
          title: "Τρεις Ήπειροι Συνδεδεμένες",
          description:
            "Άμεση θαλάσσια πρόσβαση σε Ευρώπη, Ασία και Αφρική. Στρατηγική θέση Μεσογείου για απρόσκοπτες παγκόσμιες εμπορικές συνδέσεις.",
          distanceBadge: "3 Ήπειροι",
          timeBadge: "Πρόσβαση 24/7",
        },
        {
          title: "Βιώσιμες Λιμενικές Λειτουργίες",
          description:
            "Στόχος μηδενικών εκπομπών άνθρακα έως το 2030. Δέσμευση σε φιλικές προς το περιβάλλον πρακτικές και πράσινη θαλάσσια logistics.",
          distanceBadge: "Στόχος 0%",
          timeBadge: "Έως 2030",
        },
        {
          title: "Πολυτροπικός Κόμβος Μεταφορών",
          description:
            "Απρόσκοπτη ολοκλήρωση οδικών, σιδηροδρομικών και θαλάσσιων μεταφορών. Αποδοτική μεταφορά φορτίου μεταξύ χερσαίας και θαλάσσιας logistics.",
          distanceBadge: "Οδικό + Θαλάσσιο",
          timeBadge: "Μεταφορά 2-4ω",
        },
      ],
      ctaButton: "Εξερευνήστε τις Δυνατότητές μας",
      stats: {
        continents: "Ηπείροι Συνδεδεμένες",
        crossBorder: "Διασυνοριακή Ετοιμότητα",
        carbon: "Στόχος Εκπομπών Άνθρακα",
      },
      whyLocationTitle: "Γιατί Μετράει η Τοποθεσία",
      benefits: [
        {
          title: "Προστατευμένος Φυσικός Κόλπος",
          description:
            "Ελάχιστη έκθεση σε άνεμο - ασφαλείς λειτουργίες όλο το χρόνο",
        },
        {
          title: "Πρόσβαση σε Οδικό Δίκτυο",
          description:
            "Άμεση σύνδεση με ευρωπαϊκούς αυτοκινητόδρομους και Τουρκία",
        },
        {
          title: "Πιστοποιημένες Λειτουργίες ISO",
          description: "Πρότυπα ISO 14001, 22301, 27001, 9001",
        },
        {
          title: "Συμβατό με Ασφάλεια ISPS",
          description: "Διεθνή πρότυπα ασφαλείας λιμένων πλήρως εφαρμοσμένα",
        },
      ],
    },
  };

  const t = content[lang as keyof typeof content];
  const advantageIcons = [
    FaRoad,
    FaChartLine,
    FaGlobeAmericas,
    FaShip,
    FaLeaf,
    FaTruck,
  ];
  const advantageGradients = [
    "gradient-primary",
    "gradient-accent",
    "gradient-ocean",
    "gradient-primary",
    "gradient-green",
    "gradient-accent",
  ];
  const benefitIcons = [FaWater, FaRoad, FaCheckCircle, FaShieldAlt];
  const benefitColors = ["accent", "primary", "green-500", "accent"] as const;

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <SectionBadge icon={Globe} label={t.badge} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Strategic Advantages - Full Width Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.advantages.map(
              (
                advantage: {
                  title: string;
                  description: string;
                  distanceBadge?: string;
                  timeBadge?: string;
                },
                index: number
              ) => (
                <StrategicAdvantageCard
                  key={index}
                  icon={advantageIcons[index]}
                  title={advantage.title}
                  description={advantage.description}
                  gradientClass={advantageGradients[index]}
                  delay={index * 100}
                  distanceBadge={advantage.distanceBadge}
                  timeBadge={advantage.timeBadge}
                />
              )
            )}
          </div>
        </div>

        {/* Why Location Matters */}
        <div
          className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-14 shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            {t.whyLocationTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.benefits.map(
              (
                benefit: { title: string; description: string },
                index: number
              ) => (
                <InformationItem
                  key={index}
                  icon={benefitIcons[index]}
                  title={benefit.title}
                  description={benefit.description}
                  accentColor={benefitColors[index]}
                />
              )
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button content */}
            <span className="relative z-10">{t.ctaButton}</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

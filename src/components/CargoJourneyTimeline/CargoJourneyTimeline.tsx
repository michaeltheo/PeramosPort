import { memo } from "react";
import {
  FaShip,
  FaAnchor,
  FaGlobeEurope,
  FaGlobeAsia,
  FaGlobeAfrica,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface DestinationRoute {
  icon: IconType;
  titleEn: string;
  titleGr: string;
  descriptionEn: string;
  descriptionGr: string;
  distance: string;
  distanceGr: string;
  color: string;
}

const DESTINATION_ROUTES: DestinationRoute[] = [
  {
    icon: FaGlobeEurope,
    titleEn: "Mediterranean Europe",
    titleGr: "Μεσογειακή Ευρώπη",
    descriptionEn: "Italy, Spain, France - Major European ports via Aegean Sea",
    descriptionGr:
      "Ιταλία, Ισπανία, Γαλλία - Μεγάλα ευρωπαϊκά λιμάνια μέσω Αιγαίου",
    distance: "2-4 days",
    distanceGr: "2-4 μέρες",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaAnchor,
    titleEn: "Black Sea Region",
    titleGr: "Περιοχή Μαύρης Θάλασσας",
    descriptionEn: "Romania, Ukraine, Russia - Direct access via Bosporus",
    descriptionGr: "Ρουμανία, Ουκρανία, Ρωσία - Άμεση πρόσβαση μέσω Βοσπόρου",
    distance: "3-5 days",
    distanceGr: "3-5 μέρες",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: FaGlobeAfrica,
    titleEn: "North Africa & Middle East",
    titleGr: "Βόρεια Αφρική & Μέση Ανατολή",
    descriptionEn:
      "Egypt, Libya, Israel, Lebanon - Strategic Mediterranean access",
    descriptionGr:
      "Αίγυπτος, Λιβύη, Ισραήλ, Λίβανος - Στρατηγική πρόσβαση Μεσογείου",
    distance: "2-3 days",
    distanceGr: "2-3 μέρες",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: FaGlobeAsia,
    titleEn: "Asia via Suez Canal",
    titleGr: "Ασία μέσω Διώρυγας Σουέζ",
    descriptionEn: "UAE, India, Singapore, China - Global shipping routes",
    descriptionGr:
      "ΗΑΕ, Ινδία, Σιγκαπούρη, Κίνα - Παγκόσμιες θαλάσσιες διαδρομές",
    distance: "10-15 days",
    distanceGr: "10-15 μέρες",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaShip,
    titleEn: "Atlantic & Beyond",
    titleGr: "Ατλαντικός & Πέραν",
    descriptionEn: "Americas, West Africa - Trans-oceanic connections",
    descriptionGr: "Αμερική, Δυτική Αφρική - Διωκεάνιες συνδέσεις",
    distance: "15-20 days",
    distanceGr: "15-20 μέρες",
    color: "from-teal-500 to-teal-600",
  },
];

interface CargoJourneyTimelineProps {
  language: "en" | "el" | "bg";
}

export const CargoJourneyTimeline = memo(
  ({ language }: CargoJourneyTimelineProps) => {
    const content = {
      en: {
        title: "Maritime Cargo Destinations",
        subtitle: "Global reach from the heart of the Mediterranean",
      },
      el: {
        title: "Θαλάσσιοι Προορισμοί Φορτίου",
        subtitle: "Παγκόσμια εμβέλεια από την καρδιά της Μεσογείου",
      },
    };

    const t = content[language === "el" ? "el" : "en"];

    return (
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
            {t.title}
          </h3>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>

        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-6 md:left-10 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500  to-teal-500 opacity-30" />

          {/* Destination routes */}
          <div className="space-y-8">
            {DESTINATION_ROUTES.map((route, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-8 group"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${route.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <route.icon
                      className="w-6 h-6 md:w-8 md:h-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Pulsing ring animation */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${route.color} opacity-0 group-hover:opacity-30 animate-ping`}
                  />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                      {language === "el" ? route.titleGr : route.titleEn}
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-semibold text-accent whitespace-nowrap">
                        {language === "el" ? route.distanceGr : route.distance}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "el"
                      ? route.descriptionGr
                      : route.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">
              {language === "el"
                ? "Προορισμοί παγκοσμίως"
                : "Global Destinations"}
            </div>
          </div>
          <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-1">3</div>
            <div className="text-sm text-muted-foreground">
              {language === "el"
                ? "Ηπείροι συνδεδεμένες"
                : "Continents Connected"}
            </div>
          </div>
          <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-600 mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">
              {language === "el"
                ? "Θαλάσσιες αναχωρήσεις"
                : "Maritime Departures"}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CargoJourneyTimeline.displayName = "CargoJourneyTimeline";

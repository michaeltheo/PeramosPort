import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ServiceDropdown } from "./ServiceDropdown";
import { NavLink } from "./NavLink";
import { MAIN_NAV_LINKS } from "./constants";
import { TranslationKeys } from "@/types/translations";

interface DesktopNavigationProps {
  t: (key: TranslationKeys, fallback?: string) => string;
}

export const DesktopNavigation = ({ t }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      <NavigationMenu>
        <NavigationMenuList className="!text-foreground">
          <ServiceDropdown label={t("nav.services")} />

          {MAIN_NAV_LINKS.map(({ key, href }) => (
            <NavigationMenuItem key={href}>
              <NavLink to={href}>{t(`nav.${key}`)}</NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

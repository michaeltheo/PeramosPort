import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SERVICE_LINKS } from "./constants";

interface ServiceDropdownProps {
  label: string;
}
interface ServiceLink {
  href: string;
  title: string;
}

export const ServiceDropdown = ({ label }: ServiceDropdownProps) => {
  return (
    <NavigationMenuItem className="group">
      <NavigationMenuTrigger className="relative hover:text-accent bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent px-3 ">
        {label}
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-data-[state=open]:scale-x-100" />
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-background/95 backdrop-blur-md border-accent/10">
        <ul className="grid w-[280px] gap-2 p-3 bg-background/95">
          {(SERVICE_LINKS as ServiceLink[]).map((link: ServiceLink) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  to={link.href}
                  className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-accent/10 hover:text-accent hover:translate-x-1"
                >
                  <div className="text-sm font-medium">{link.title}</div>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

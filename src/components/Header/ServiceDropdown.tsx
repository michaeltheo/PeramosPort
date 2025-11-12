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
    <NavigationMenuItem className="group/dropdown">
      <NavigationMenuTrigger className="relative border-none !bg-transparent hover:!bg-transparent data-[state=open]:!bg-transparent focus:!bg-transparent active:!bg-transparent px-3 py-2 transition-colors duration-300 hover:text-accent !data-[state=open]:text-accent ">
        {label}
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover/dropdown:scale-x-100 group-data-[state=open]/dropdown:scale-x-100" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[280px] gap-2 p-3 bg-background/95">
          {(SERVICE_LINKS as ServiceLink[]).map((link: ServiceLink) => (
            <li key={link.href} className="group/item">
              <NavigationMenuLink asChild>
                <Link
                  to={link.href}
                  className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all group-hover/item:bg-accent/10 group-hover/item:text-accent group-hover/item:translate-x-1"
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

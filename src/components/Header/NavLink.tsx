import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "data-aos"?: string;
  "data-aos-delay"?: number;
}

export const NavLink = ({
  to,
  children,
  onClick,
  className,
  ...props
}: NavLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "group/navlink relative inline-block px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-accent",
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent scale-x-0 transition-transform duration-300 origin-left group-hover/navlink:scale-x-100" />
    </Link>
  );
};

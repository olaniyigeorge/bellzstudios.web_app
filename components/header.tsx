'use client';

import { useUser } from "@/services/stores.user";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const NavLink = ({ href, children, className = "", isActive = false }: NavLinkProps) => {
  const baseClasses = "text-sm px-6 py-2 rounded-full font-medium transition-all duration-500";
  const activeClasses = "text-orange-400";
  const inactiveClasses = "text-white hover:animate-wigggle hover:text-orange-400";
  
  return (
    <Link 
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const pathname = usePathname();
  const user = useUser(state => state.user);

  // Only show header on specific routes
  const showHeader = pathname === "/" || 
                    pathname.startsWith("/notes") || 
                    pathname.startsWith("/dev-stories");

  if (!showHeader) return null;

  // Helper function to check if a path is active
  const isActiveRoute = (route: string): boolean => {
    if (route === "/") return pathname === "/";
    return pathname.startsWith(route);
  };

  return (
    <header className="font-poppins px-6 py-2 w-full border-none bg-black max-w-[1440px] shadow sticky top-0 right-0 z-[100]">
      <nav className="w-full gap-4 py-3 md:gap-10 lg:gap-14 flex justify-center items-center px-3 md:px-5 mx-auto">
        {/* About Me Link */}
        <NavLink 
          href="/about-me" 
          isActive={isActiveRoute("/about-me")}
        >
          About Me
        </NavLink>

        {/* Contact Link */}
        <NavLink 
          href="/contact" 
          isActive={isActiveRoute("/contact")}
        >
          Contact
        </NavLink>

        {/* Home Icon and Hire Me Button */}
        <div className="font-medium flex justify-end items-center gap-2">
          <Link 
            href="/"
           
            aria-label="Home"
          >
            <HomeIcon className={`w-4 h-4 ${isActiveRoute("/") ? "text-orange-400" : "text-orange-400"}`} />
          </Link>
          
          <a
            href="mailto:olaniyigeorge77@gmail.com"
            className="orange-gradient-bg font-kanit text-sm text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            aria-label="Hire me via email"
          >
            Hire Me
          </a>
        </div>

        {/* Dev Stories Link */}
        <NavLink 
          href="/dev-stories" 
          isActive={isActiveRoute("/dev-stories")}
        >
          Dev Stories
        </NavLink>

        {/* Notes Link */}
        <NavLink 
          href="/notes" 
          isActive={isActiveRoute("/notes")}
        >
          Notes
        </NavLink>
      </nav>
    </header>
  );
}
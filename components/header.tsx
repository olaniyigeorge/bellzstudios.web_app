'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-close sidebar when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const showHeader = pathname === "/" || pathname.startsWith("/notes") || pathname.startsWith("/dev-stories");

  if (!showHeader) return null;

  const isActiveRoute = (route: string): boolean => {
    if (route === "/") return pathname === "/";
    return pathname.startsWith(route);
  };

  return (
    <header className="font-poppins px-4 py-2 w-full bg-black max-w-[1440px] shadow sticky top-0 z-[100]">
      <div className="flex justify-between items-center">
        {/* Hamburger menu button - only on mobile */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {/* Centered Home and Hire Me */}
        <div className="flex items-center justify-center gap-3 w-full md:w-auto">
          <Link href="/" aria-label="Home">
            <HomeIcon className={`w-5 h-5 ${isActiveRoute("/") ? "text-orange-400" : "text-orange-400"}`} />
          </Link>

          <a
            href="mailto:olaniyigeorge77@gmail.com"
            className="orange-gradient-bg font-medium text-sm text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
            aria-label="Hire me via email"
          >
            Hire Me
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-4 md:gap-6 items-center">
          <NavLink href="/about-me" isActive={isActiveRoute("/about-me")}>About Me</NavLink>
          <NavLink href="/#contact" className="text-white hover:text-orange-400">Contact</NavLink>
          <NavLink href="/dev-stories" isActive={isActiveRoute("/dev-stories")}>Dev Stories</NavLink>
          <NavLink href="/notes" isActive={isActiveRoute("/notes")}>Notes</NavLink>
        </nav>
      </div>

      {/* Sidebar Drawer for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] bg-black shadow-lg z-[200] transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
          <span className="text-white font-semibold text-lg">Where to?</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4 px-4">
          <NavLink href="/about-me" isActive={isActiveRoute("/about-me")} className="w-full">About Me</NavLink>
          <Link href="/#contact" className="text-white text-sm px-6 py-2 hover:text-orange-400">Contact</Link>
          <NavLink href="/dev-stories" isActive={isActiveRoute("/dev-stories")} className="w-full">Dev Stories</NavLink>
          <NavLink href="/notes" isActive={isActiveRoute("/notes")} className="w-full">Notes</NavLink>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-[150]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

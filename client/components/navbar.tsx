"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type NavLink = {
  title: string;
  href: string;
  external?: boolean;
};

const navLinks: Record<string, NavLink[]> = {
  about: [
    { title: "About III", href: "/about" },
    { title: "Governing Council", href: "/governing-council" },
    { title: "Advisory Board Team", href: "/advisory" },
    { title: "Team", href: "/team" },
    { title: "Recognition", href: "/recognition" },
    { title: "Our Partners", href: "/partners" },
  ],
  programs: [
    { title: "Incubation Programs", href: "/incubation-program" },
  ],
  scheme: [
    { title: "Funding", href: "/funding" },
  ],
  events: [
    { title: "Photos", href: "/photos" },
    { title: "Videos", href: "/videos" },
  ],
  impact: [
    { title: "Patents Filed", href: "/patents" },
    { title: "Success Stories", href: "/success" },
  ],
  community: [
    { 
      title: "Startup Registration", 
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform?usp=sharing&ouid=105351415346587374700",
      external: true
    },
    { 
      title: "Join as Mentor", 
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfc9f0Lcxcv3cirTZBhzupM0rs1z-o_5UcHKMA2WFHuu9NVLg/viewform?usp=publish-editor",
      external: true
    },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled 
            ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200" 
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group flex items-center"
            >
              <div className="relative h-12 w-24 sm:h-14 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/incub-logo.png"
                  alt="Invertis Innovation & Incubation"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {Object.entries(navLinks).slice(0, 5).map(([key, links]) => (
                <div key={key} className="group relative">
                  <button className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                    <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-3 min-w-[280px] overflow-hidden">
                      {links.map((link, index) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="group/item flex items-center justify-between px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-indigo-50 hover:to-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                          style={{ 
                            animationDelay: `${index * 30}ms`,
                          }}
                        >
                          <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                            {link.title}
                          </span>
                          {link.external && (
                            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Join Community CTA */}
              <div className="group relative ml-2">
                <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                  Join Community
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 py-3 min-w-[280px] overflow-hidden">
                    {navLinks.community.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group/item flex items-center justify-between px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:via-indigo-50 hover:to-blue-50 hover:text-blue-700 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                        style={{ 
                          animationDelay: `${index * 30}ms`,
                        }}
                      >
                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                          {link.title}
                        </span>
                        {link.external && (
                          <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative h-10 w-10 rounded-xl hover:bg-gray-100"
                >
                  <MenuIcon className="h-5 w-5 text-gray-700" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[320px] sm:w-[400px] p-0 border-l-0 shadow-2xl"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full bg-gradient-to-b from-white via-gray-50 to-gray-100">
                  <nav className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 mt-8">
                    <div className="space-y-3">
                      {Object.entries(navLinks).slice(0, 5).map(([key, links], sectionIndex) => (
                        <div 
                          key={key} 
                          className="space-y-2 animate-slideInRight"
                          style={{
                            animationDelay: `${sectionIndex * 50}ms`,
                          }}
                        >
                          <button
                            onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                            className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 group"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </span>
                            <ChevronDown 
                              className={cn(
                                "h-4 w-4 transition-transform duration-300",
                                openDropdown === key && "rotate-180"
                              )} 
                            />
                          </button>
                          <div 
                            className={cn(
                              "overflow-hidden transition-all duration-500 ease-in-out",
                              openDropdown === key ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <div className="space-y-1.5 pt-2 pl-2">
                              {links.map((link, linkIndex) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  target={link.external ? "_blank" : undefined}
                                  rel={link.external ? "noopener noreferrer" : undefined}
                                  className="group/link flex items-center justify-between pl-6 pr-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 font-medium"
                                  onClick={() => setMobileOpen(false)}
                                  style={{
                                    animationDelay: `${linkIndex * 30}ms`
                                  }}
                                >
                                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                    {link.title}
                                  </span>
                                  {link.external && (
                                    <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Community Section */}
                      <div 
                        className="pt-4 border-t border-gray-300 space-y-2 animate-slideInRight"
                        style={{
                          animationDelay: '250ms',
                        }}
                      >
                        <button
                          onClick={() => setOpenDropdown(openDropdown === "community" ? null : "community")}
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] group hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            Join Community
                          </span>
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              openDropdown === "community" && "rotate-180"
                            )} 
                          />
                        </button>
                        <div 
                          className={cn(
                            "overflow-hidden transition-all duration-500 ease-in-out",
                            openDropdown === "community" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                            <div className="space-y-1.5 pt-2 pl-2">
                              {navLinks.community.map((link, linkIndex) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  target={link.external ? "_blank" : undefined}
                                  rel={link.external ? "noopener noreferrer" : undefined}
                                  className="group/link flex items-center justify-between pl-6 pr-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 font-medium"
                                onClick={() => setMobileOpen(false)}
                                style={{
                                  animationDelay: `${linkIndex * 30}ms`
                                }}
                              >
                                <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                                  {link.title}
                                </span>
                                {link.external && (
                                  <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div className="px-4 py-4 sm:px-6 border-t border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm">
                    <p className="text-xs text-gray-600 font-medium text-center">
                      © {new Date().getFullYear()} Invertis Incubation
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}

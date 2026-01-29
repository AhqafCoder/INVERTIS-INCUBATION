"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, ChevronDown, ExternalLink, X } from "lucide-react";

const navLinks = {
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="relative h-10 w-20 sm:h-12 sm:w-24">
              <Image
                src="/assets/incub-logo.png"
                alt="Invertis Innovation & Incubation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* About */}
            <div className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                About
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.about.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Programs
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.programs.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Scheme */}
            <div className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Scheme
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.scheme.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Events
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.events.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                Impact
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.impact.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Join Community */}
            <div className="group relative ml-2">
              <button className="flex items-center gap-1 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-md hover:shadow-lg transition-all">
                Join Community
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]">
                  {navLinks.community.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium"
                    >
                      {link.title}
                      {link.external && <ExternalLink className="h-3.5 w-3.5 ml-2" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-5 max-h-[calc(100vh-64px)] overflow-y-auto">
            {/* About Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">About</h3>
              <div className="space-y-1">
                {navLinks.about.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Programs</h3>
              <div className="space-y-1">
                {navLinks.programs.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Scheme Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Scheme</h3>
              <div className="space-y-1">
                {navLinks.scheme.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Events Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Events</h3>
              <div className="space-y-1">
                {navLinks.events.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Impact Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Impact</h3>
              <div className="space-y-1">
                {navLinks.impact.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Community Section */}
            <div className="border-t pt-5">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Join Community</h3>
              <div className="space-y-1">
                {navLinks.community.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                    {link.external && <ExternalLink className="h-4 w-4" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, Facebook, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="space-y-6 lg:col-span-1">
              <div className="bg-white/95 rounded-2xl p-4 w-fit shadow-lg shadow-black/20">
                <div className="relative h-32 w-32">
                  <Image
                    src="/assets/incub-logo.png"
                    alt="Invertis Incubation Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Empowering innovation and entrepreneurship through world-class incubation services and mentorship.
              </p>
              
              {/* Social Media */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Connect With Us</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full border-slate-700 bg-slate-800/60 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href="https://www.instagram.com/invertisincubation"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full border-slate-700 bg-slate-800/60 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href="https://x.com/InvertisUni"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full border-slate-700 bg-slate-800/60 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href="https://www.facebook.com/profile.php?id=61565390027580"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full border-slate-700 bg-slate-800/60 hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300"
                  >
                    <Link
                      href="https://chat.whatsapp.com/GEWqTxZ7l2GDFSy61heHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/incubation-program" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    Incubation Program
                  </Link>
                </li>
                <li>
                  <Link href="/funding" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    Funding
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-lg font-semibold text-white border-b border-slate-800 pb-2">Get In Touch</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Contact Methods */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                      <Link href="tel:+917217011240" className="text-sm text-slate-200 hover:text-blue-400 transition-colors">
                        +91 72170 11240
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Email</p>
                      <Link href="mailto:invertis.incubation@invertis.org" className="text-sm text-slate-200 hover:text-blue-400 transition-colors break-all">
                        invertis.incubation@invertis.org
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <MapPin className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 mb-1">Campus</p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Invertis Village, Delhi Lucknow Highway NH-24, Bareilly, UP 243123
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <Building2 className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 mb-1">City Office</p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        B-186, Civil Lines, Opposite Bareilly GPO, Bareilly, UP 243001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-900">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400 text-center md:text-left">
                © {new Date().getFullYear()} Invertis Innovation & Incubation. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Powered by</span>
                <div className="relative h-8 w-24">
                  <Image
                    src="/assets/main logo.png"
                    alt="Powered By Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Desktop Footer Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
          {/* Left - Logo & Contact Icons */}
          <div className="space-y-6">
            <div className="relative h-24 w-40">
              <Image
                src="/assets/incub-logo.png"
                alt="Invertis Incubation Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-blue-900" />
                </div>
                <p className="text-sm">+91 72170 11240</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-blue-900" />
                </div>
                <p className="text-sm break-all">invertis.incubation@invertis.org</p>
              </div>
            </div>
          </div>

          {/* Middle - Contact Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div>
              <p className="font-semibold mb-2">Campus</p>
              <p className="text-sm text-blue-100">
                Invertis Village, Delhi Lucknow Highway NH-24, Bareilly, Uttar Pradesh Pin - 243 123, India
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">City Office</p>
              <p className="text-sm text-blue-100">
                B-186, Civil Lines, Opposite Bareilly GPO, Bareilly, Uttar Pradesh, Pin - 243 001, India
              </p>
            </div>
          </div>

          {/* Right - About & Social */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">This Website</h2>
              <p className="text-sm text-blue-100 mb-3">III is Powered By</p>
              <div className="relative h-12 w-32">
                <Image
                  src="/assets/main logo.png"
                  alt="Powered By Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Handles</h2>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/invertisincubation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://x.com/InvertisUni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61565390027580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://chat.whatsapp.com/GEWqTxZ7l2GDFSy61heHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer Layout */}
        <div className="lg:hidden space-y-8">
          <div className="flex justify-center">
            <div className="relative h-20 w-32">
              <Image
                src="/assets/incub-logo.png"
                alt="Invertis Incubation Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Phone className="h-4 w-4 text-blue-900" />
              </div>
              <p className="text-sm">+91 72170 11240</p>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Mail className="h-4 w-4 text-blue-900" />
              </div>
              <p className="text-xs sm:text-sm break-all">invertis.incubation@invertis.org</p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <div>
              <p className="font-semibold mb-2">Campus</p>
              <p className="text-sm text-blue-100">
                Invertis Village, Delhi Lucknow Highway NH-24, Bareilly, Uttar Pradesh Pin - 243 123, India
              </p>
            </div>
            <div>
              <p className="font-semibold mb-2">City Office</p>
              <p className="text-sm text-blue-100">
                B-186, Civil Lines, Opposite Bareilly GPO, Bareilly, Uttar Pradesh, Pin - 243 001, India
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-xl font-bold">Handles</h2>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://www.instagram.com/invertisincubation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/InvertisUni"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61565390027580"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://chat.whatsapp.com/GEWqTxZ7l2GDFSy61heHub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Invertis Innovation & Incubation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

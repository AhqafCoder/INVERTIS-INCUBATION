import Image from "next/image";
import { partners } from "@/lib/data";

export function PartnersSection() {
  const allPartners = [
    ...partners.knowledge,
    ...partners.certification,
    ...partners.technology
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...allPartners, ...allPartners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

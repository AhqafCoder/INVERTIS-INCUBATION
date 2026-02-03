import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { partners, incubatedStartups } from "@/lib/data";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Collaborating with industry leaders to empower innovation
          </p>
        </div>
      </section>

      {/* Knowledge Partners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Knowledge Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {partners.knowledge.map((partner, index) => (
              <Card 
                key={index}
                className="flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 128px"
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incubated Startups */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Incubated Startups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {incubatedStartups.map((startup, index) => (
              <Card 
                key={index}
                className="flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={startup.logo}
                    alt={startup.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 96px"
                    className="object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Technology Partners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Certification Partners
              </h2>
              <div className="flex justify-center">
                {partners.certification.map((partner, index) => (
                  <Card 
                    key={index}
                    className="p-6 w-64"
                  >
                    <div className="relative h-32">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="256px"
                        className="object-contain"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Technology Providers
              </h2>
              <div className="flex justify-center">
                {partners.technology.map((partner, index) => (
                  <Card 
                    key={index}
                    className="p-6 w-64"
                  >
                    <div className="relative h-32">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="256px"
                        className="object-contain"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

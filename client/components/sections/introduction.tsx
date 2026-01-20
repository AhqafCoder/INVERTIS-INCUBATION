import Image from "next/image";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/lib/data";

export function IntroductionSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Introducing
          </h2>
          <div className="relative h-12 w-32 md:h-16 md:w-40">
            <Image
              src="/assets/incub-logo.png"
              alt="III Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.description.split('\n\n')[0]}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.description.split('\n\n')[1]}
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={aboutContent.image}
              alt="About III"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

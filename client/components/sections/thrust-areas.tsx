import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { thrustAreas } from "@/lib/data";

export function ThrustAreasSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/assets/area.jpg"
                alt="Thrust Areas"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Thrust Areas
              </h2>
              <p className="text-blue-50 text-lg">
                We focus on key sectors driving innovation and sustainable development
              </p>
              <div className="flex flex-wrap gap-3">
                {thrustAreas.map((area, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-white text-blue-700 px-4 py-2 text-sm font-medium"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

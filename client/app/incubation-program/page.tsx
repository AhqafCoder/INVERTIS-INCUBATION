import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { incubationPrograms } from "@/lib/data";

export default function IncubationProgramPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Incubation Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Events, workshops, and programs designed to accelerate your startup journey
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {incubationPrograms.map((program, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {program.date}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Program Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle>Learn from Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gain insights from industry leaders, successful entrepreneurs, and academic experts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🤝</div>
                <CardTitle>Network & Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with fellow entrepreneurs, potential co-founders, and investors
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Accelerate Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access resources, mentorship, and opportunities to scale your startup faster
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/data";

export default function TeamPage() {
  const coreTeam = team.filter(member => member.category === "core");
  const studentTeam = team.filter(member => member.category === "student");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated professionals driving innovation forward
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreTeam.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Student Associates */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Student Associates
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {studentTeam.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {member.title}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

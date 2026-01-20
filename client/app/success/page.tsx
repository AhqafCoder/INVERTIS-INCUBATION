import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { successStories } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating the achievements of our incubated startups
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-600"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    {story.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {story.achievements.map((achievement, idx) => (
                      <Badge 
                        key={idx}
                        className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
                <p className="text-gray-600">Incubated Startups</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">₹2Cr+</div>
                <p className="text-gray-600">Funding Disbursed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Students Mentored</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <p className="text-gray-600">Industry Partners</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { successStories, siteData } from "@/lib/data";
import { CheckCircle2, TrendingUp, Mail, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[2.625rem] md:text-[3.15rem] font-bold mb-4 text-indigo-600">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover inspiring success stories from startups that have made a remarkable impact through innovation, dedication, and strategic support.
          </p>
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => {
              // Define vibrant gradient colors for each card
              const gradients = [
                "from-green-400 to-emerald-500",
                "from-purple-400 to-purple-600",
                "from-orange-400 to-orange-600",
                "from-pink-400 to-pink-600",
                "from-cyan-400 to-blue-500",
                "from-violet-400 to-purple-500"
              ];
              
              return (
                <Card 
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 overflow-hidden group border-0 rounded-2xl scale-[0.99]"
                >
                  {/* Colorful gradient border top */}
                  <div className={`h-3 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-t-2xl`}></div>
                  
                  {/* Image section with gradient background */}
                  <div className={`relative p-6 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
                    <div className="w-full aspect-square flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={story.image}
                          alt={story.company}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <CardContent className="p-6 space-y-4">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {story.company}
                    </CardTitle>
                    
                    <p className="text-gray-600 text-sm leading-relaxed min-h-[100px]">
                      {story.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-green-700 font-semibold pt-2">
                      <TrendingUp className="h-4 w-4" />
                      Funding: {story.funding}
                    </div>
                    
                    {/* Category badge at bottom */}
                    <div className="pt-2">
                      <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-purple-100">
                        {story.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-3xl mx-4 my-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-white mb-10">
            Join our incubation program and transform your innovative idea into a successful venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteData.forms.startupRegistration}
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Apply for Incubation
            </Link>
            <Link
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border-2 border-white shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
                <p className="text-gray-600">Incubated Startups</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">₹2Cr+</div>
                <p className="text-gray-600">Funding Disbursed</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Students Mentored</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
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

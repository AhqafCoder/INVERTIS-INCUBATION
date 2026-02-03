import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { recognition } from "@/lib/data";
import { Award, Download, ExternalLink } from "lucide-react";

export default function RecognitionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recognition & Achievements
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acknowledgments and accolades from government and industry bodies
          </p>
        </div>
      </section>

      {/* StartinUP Recognition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden shadow-xl border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-3xl text-center text-blue-900">
                {recognition.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative h-48 w-64">
                  <Image
                    src={recognition.logo}
                    alt="StartinUP"
                    fill
                    sizes="256px"
                    className="object-contain"
                  />
                </div>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  {recognition.description}
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a 
                    href={recognition.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Recognition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🏆</div>
                <CardTitle>MSME Registered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recognized and registered under the Ministry of Micro, Small & Medium Enterprises
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>DPIIT Recognized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acknowledged by Department for Promotion of Industry and Internal Trade
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">⭐</div>
                <CardTitle>NAAC A+ Accredited</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Part of NAAC A+ accredited Invertis University ecosystem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

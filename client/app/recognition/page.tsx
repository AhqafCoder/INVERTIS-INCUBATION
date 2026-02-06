import Image from "next/image";
import { Button } from "@/components/ui/button";
import { recognition } from "@/lib/data";
import { Download } from "lucide-react";

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              RECOGNITION
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Official recognition from government authorities
            </p>
          </div>

          {/* StartinUP Recognition Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col items-center space-y-8">
                {/* Logo */}
                <div className="relative h-56 w-72 md:h-64 md:w-80">
                  <Image
                    src={recognition.logo}
                    alt="StartinUP"
                    fill
                    sizes="(max-width: 768px) 288px, 320px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  {recognition.title}
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-2xl">
                  {recognition.description}
                </p>

                {/* Certificate Button */}
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

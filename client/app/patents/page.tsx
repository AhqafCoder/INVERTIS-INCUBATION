import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/data";
import { Shield, Leaf, Radio, Droplets, Flame, MapPin, Rocket, Mail } from "lucide-react";
import Link from "next/link";

export default function PatentsPage() {
  const patents = [
    {
      title: "Railway Track Obstruction Detection and Safety Management System",
      category: "Transportation Safety",
      description: "The present invention relates to a railway safety system designed to detect, monitor, and prevent accidents caused by animals, humans, or foreign objects present on railway tracks. The system employs advanced sensor modules to identify obstructions on tracks in real time and accurately determine their geographic location.",
      fullDescription: "Upon detection, the system generates immediate local alerts to warn or deter the obstruction and simultaneously transmits real-time data to nearby railway control rooms as well as a centralized railway management platform. This enables live monitoring, rapid decision-making, and timely intervention by railway authorities. If the obstruction is cleared, the system records confirmation of clearance. In cases where the obstruction persists, the system automatically escalates the incident to relevant railway authorities for emergency action. The invention is powered by a rechargeable energy source, with optional renewable energy integration, and incorporates wireless communication for seamless data transmission. The proposed system offers a cost-effective, scalable, and reliable solution to reduce wildlife collisions, prevent sabotage attempts, and mitigate track-related hazards, thereby significantly enhancing railway safety, operational efficiency, and reliability.",
      features: [
        { icon: Shield, label: "Safety Focused" },
        { icon: Radio, label: "Sensor Tech" },
        { icon: Droplets, label: "Real-Time Alerts" },
        { icon: Leaf, label: "Eco-Friendly" }
      ]
    },
    {
      title: "Pollution Catcher Drone System for Air Purification, Emission Monitoring, and Fire Detection with Real-Time Mapping Integration",
      category: "Environmental Management & Safety",
      description: "The present invention relates to an integrated aerial environmental management system utilizing an autonomous drone platform equipped with multi-layer HEPA/HEPTA air purification filters, air pollution monitoring sensors, thermal imaging modules, and real-time geo-mapping capabilities.",
      fullDescription: "The system is designed to continuously purify ambient air while simultaneously monitoring air quality parameters and detecting fire hazards, including forest fires and stubble burning. Thermal imaging enables early identification of fire incidents, while pollution sensors collect and transmit real-time environmental data. The invention features automated workflows that generate structured alerts containing photographic evidence, precise geo-tagging, and address-level location data through mapping and Saarthi integration. These alerts are transmitted to relevant authorities to enable rapid response and effective decision-making. Powered by rechargeable energy sources and supported by wireless communication modules, the system provides a scalable and cost-efficient solution for urban and rural air purification, emission monitoring, environmental surveillance, and early fire detection. The invention contributes to improved public health, environmental safety, and disaster response effectiveness.",
      features: [
        { icon: Leaf, label: "Air Purification" },
        { icon: Flame, label: "Fire Detection" },
        { icon: MapPin, label: "Real-Time Mapping" },
        { icon: Radio, label: "Autonomous Drone" }
      ]
    }
  ];

  const supportServices = [
    {
      title: "IP Strategy",
      description: "Comprehensive intellectual property strategy development and portfolio management"
    },
    {
      title: "Patent Filing",
      description: "End-to-end patent application support including documentation and legal assistance"
    },
    {
      title: "Commercialization",
      description: "Patent monetization strategies, licensing support, and technology transfer guidance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[2.625rem] md:text-[3.15rem] font-bold mb-4 text-indigo-600">
            Featured Patent Inventions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Groundbreaking innovations developed by our incubatees addressing critical challenges in transportation safety and environmental management.
          </p>
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {patents.map((patent, index) => (
            <Card 
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-600"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="text-2xl text-gray-900">
                    {patent.title}
                  </CardTitle>
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 w-fit">
                  Patent Category: {patent.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Disclosure of the Invention
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {patent.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {patent.fullDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {patent.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patent Support Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Patent Support Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide comprehensive intellectual property support to help our incubatees protect and commercialize their innovations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-600"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-3xl mx-4 my-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Innovation Today
          </h2>
          <p className="text-xl text-white mb-10">
            Have a groundbreaking idea? Let our expert team help you protect your intellectual property and build a strong patent portfolio.
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
              Get Patent Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

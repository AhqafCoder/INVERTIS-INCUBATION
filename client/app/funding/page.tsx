import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fundingSchemes } from "@/lib/data";
import { DollarSign, Rocket, Users, TrendingUp } from "lucide-react";

const icons = [DollarSign, Rocket, TrendingUp, Users, TrendingUp];

export default function FundingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Funding Opportunities
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Financial support to transform your innovative ideas into successful ventures
          </p>
        </div>
      </section>

      {/* Funding Schemes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Funding Schemes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various funding options to support startups at different stages of their journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingSchemes.map((scheme, index) => {
              const Icon = icons[index];
              return (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border-blue-100"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{scheme.title}</CardTitle>
                        <Badge className="bg-blue-600">{scheme.amount}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {scheme.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Application Process */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to Apply
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Register</h4>
                <p className="text-sm text-gray-600">Complete the startup registration form</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Submit</h4>
                <p className="text-sm text-gray-600">Provide your business plan and pitch deck</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Review</h4>
                <p className="text-sm text-gray-600">Our team evaluates your application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Funding</h4>
                <p className="text-sm text-gray-600">Receive funding and mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

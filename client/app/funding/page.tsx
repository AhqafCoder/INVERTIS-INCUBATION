"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { DollarSign, Banknote, Users, Rocket, Gift } from "lucide-react";

export default function FundingPage() {
  const fundingOpportunities = [
    {
      title: "Fund of Funds",
      amount: "INR 1000 Crore",
      description: "UP Startup Fund investing in Daughter Funds that support innovative startups in Uttar Pradesh.",
      icon: DollarSign,
      color: "blue"
    },
    {
      title: "Funding by Banks",
      amount: "Bank Lending",
      description: "Government-backed initiatives to encourage banks to provide lending facilities to startups akin to MSME lending.",
      icon: Banknote,
      color: "green"
    },
    {
      title: "UP Angel Network",
      amount: "Angel Investment",
      description: "A dedicated network of angel investors and HNIs funding promising startups across the state.",
      icon: Users,
      color: "purple"
    },
    {
      title: "Seed Funding & Grants",
      amount: "Up to INR 7.5 Lakhs",
      description: "Includes sustenance allowance, prototype grants, and marketing assistance up to INR 7.5 Lakhs for MVP launches.",
      icon: Rocket,
      color: "orange"
    },
    {
      title: "Support & Incentives",
      amount: "Non-Fiscal Benefits",
      description: "Free incubation, patent filing cost reimbursement, event participation funding, and other non-fiscal incentives.",
      icon: Gift,
      color: "indigo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] as const
      },
    },
  };

  return (
    <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
      <div className="min-h-screen bg-gradient-to-b from-white/80 via-blue-50/20 to-white/80 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Hero Section */}
        <section className="pt-6 pb-6 md:pt-8 md:pb-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                FUNDING
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-snug max-w-4xl mx-auto px-4">
                <Highlight className="text-gray-900 px-2">Funding Opportunities</Highlight> for{" "}
                <span className="inline-flex items-baseline whitespace-nowrap gap-1">
                  <PointerHighlight><span className="text-gray-900">Startups</span></PointerHighlight>
                </span>
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Funding Schemes */}
        <section className="pb-8 md:pb-12">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
            >
              {fundingOpportunities.map((scheme, index) => {
                const Icon = scheme.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-xl h-full bg-white">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {scheme.title}
                            </CardTitle>
                            <Badge className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm">
                              {scheme.amount}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {scheme.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                HOW TO APPLY
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {[
                { step: "1", title: "Register", description: "Complete the startup registration form" },
                { step: "2", title: "Submit", description: "Provide your business plan and pitch deck" },
                { step: "3", title: "Review", description: "Our team evaluates your application" },
                { step: "4", title: "Funding", description: "Receive funding and mentorship" }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl font-black shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </HeroHighlight>
  );
}

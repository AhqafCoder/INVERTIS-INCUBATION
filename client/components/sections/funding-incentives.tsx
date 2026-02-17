"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, IndianRupee } from "lucide-react";
import Link from "next/link";

interface Startup {
  name: string;
  company: string;
  funding: string;
  sector: string;
  description: string;
  color: string;
}

const startups: Startup[] = [
  {
    name: "Aqin Biotech",
    company: "Aqin Biotech Pvt. Ltd.",
    funding: "₹3.5 Lakhs",
    sector: "Biotechnology",
    description: "Received Seed Capital and Market Assistance to strengthen market presence and accelerate early-stage growth.",
    color: "from-pink-500/10 to-rose-500/10 border-pink-500/20 hover:border-pink-500/40",
  },
  {
    name: "Cladbe",
    company: "Cladbe Platforms LLP",
    funding: "₹52,000",
    sector: "SaaS Platform",
    description: "Secured Sustenance Allowance supporting operational stability and focused product development.",
    color: "from-orange-500/10 to-amber-500/10 border-orange-500/20 hover:border-orange-500/40",
  },
  {
    name: "SS Parts Planet",
    company: "SS Parts Planet Pvt. Ltd.",
    funding: "₹3 Lakhs",
    sector: "Automotive",
    description: "Received Seed Capital and Market Assistance, improving operational capabilities and business expansion.",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/40",
  },
  {
    name: "Atheravia",
    company: "Atheravia Pvt. Ltd.",
    funding: "₹2.5 Lakhs",
    sector: "Skincare",
    description: "Achieved growth milestone with investment supporting product development and market expansion initiatives.",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    name: "Fovty",
    company: "Fovty Private Limited",
    funding: "Funded",
    sector: "Technology",
    description: "Shown promising growth developing innovative solutions for digital transformation with significant market traction.",
    color: "from-purple-500/10 to-indigo-500/10 border-purple-500/20 hover:border-purple-500/40",
  },
  {
    name: "Edusphere",
    company: "Edusphere",
    funding: "Funded",
    sector: "EdTech",
    description: "Revolutionized educational technology providing innovative learning solutions across multiple institutions.",
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/40",
  },
];

export function FundingIncentivesSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Startups We've Helped Secure Funding
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering innovative ventures with financial support and mentorship to transform ideas into thriving businesses
          </p>
        </motion.div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${startup.color} backdrop-blur-sm rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col`}>
                {/* Sector Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 mb-4 w-fit">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  {startup.sector}
                </div>

                {/* Company Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {startup.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{startup.company}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {startup.description}
                </p>

                {/* Funding Amount */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <IndianRupee className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Funding</p>
                      <p className="text-lg font-bold text-gray-900">{startup.funding}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/success"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View All Success Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


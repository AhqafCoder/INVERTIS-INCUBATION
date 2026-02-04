"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutContent } from "@/lib/data";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

export default function AboutPage() {
  const paragraphs = aboutContent.description.split('\n\n');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      

      {/* Main Content Section */}
      <section className="py-8 md:py-12 px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16"
          >
            {/* Image Section */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="relative h-[420px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 group-hover:from-blue-600/0 transition-all duration-500" />
                <Image
                  src={aboutContent.image}
                  alt="About III"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
                >
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600">20+</div>
                      <div className="text-xs md:text-sm text-gray-600">Startups</div>
                    </div>
                    <div className="w-px h-10 bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600">10+</div>
                      <div className="text-xs md:text-sm text-gray-600">Mentors</div>
                    </div>
                    <div className="w-px h-10 bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600">₹10.5Lac+</div>
                      <div className="text-xs md:text-sm text-gray-600">Funding</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="heading-font text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Empowering the Next Generation of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Innovators
                </span>
              </h2>
              
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Student-Centric Ecosystem
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-cyan-600" />
                  Industry Partnerships
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Mentorship Programs
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Vision & Mission Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Vision Card */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl h-full bg-gradient-to-br from-white to-blue-50/50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="subheading-font text-xl md:text-2xl font-bold text-gray-900">
                      Our Vision
                    </CardTitle>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                </CardHeader>
                
                <CardContent className="relative pt-2">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                    {aboutContent.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={itemVariants}>
              <Card className="group relative overflow-hidden border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-2xl h-full bg-gradient-to-br from-white to-cyan-50/50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="subheading-font text-xl md:text-2xl font-bold text-gray-900">
                      Our Mission
                    </CardTitle>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full" />
                </CardHeader>
                
                <CardContent className="relative pt-2">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
                    {aboutContent.mission}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="subheading-font text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12">
              Our commitment to excellence and innovation drives everything we do
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Rocket, title: "Innovation First", desc: "Cutting-edge solutions" },
                { icon: Users, title: "Community Driven", desc: "Collaborative ecosystem" },
                { icon: Target, title: "Goal Oriented", desc: "Results that matter" },
                { icon: Lightbulb, title: "Creative Thinking", desc: "Outside the box ideas" },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

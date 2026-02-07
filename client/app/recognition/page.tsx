"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { recognition } from "@/lib/data";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function RecognitionPage() {
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
      <div className="min-h-screen bg-gradient-to-b from-white/80 via-blue-50/20 to-white/80 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="container mx-auto max-w-7xl py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                RECOGNITION
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                We are <Highlight className="text-gray-900 px-2">officially recognized</Highlight> by{" "}
                <span className="inline-flex items-baseline whitespace-nowrap gap-1">
                  government<PointerHighlight><span className="text-gray-900"> authorities</span></PointerHighlight>
                </span>.
              </h2>
            </motion.div>

            {/* Right Side - Logo and Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Logo */}
              <motion.div 
                variants={itemVariants}
                className="relative h-40 w-64 sm:h-48 sm:w-80 md:h-56 md:w-96"
              >
                <Image
                  src={recognition.logo}
                  alt="StartinUP"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  className="object-contain object-left"
                  priority
                />
              </motion.div>

              {/* Title */}
              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                {recognition.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                {recognition.description}
              </motion.p>

              {/* Certificate Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}

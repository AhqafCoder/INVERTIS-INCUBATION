"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function IntroductionSection() {
  return (
    <section className="min-h-screen md:h-screen w-full">
      <div className="grid md:grid-cols-2 gap-0 items-stretch h-full">
        {/* Left Side - Image */}
        <motion.div 
          className="relative h-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/About_image.jpg"
            alt="About III"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div 
          className="space-y-6 p-6 pt-8 md:p-12 bg-white flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            {/* Header */}
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent uppercase leading-none">
                Introducing
              </h2>
              <div className="relative h-10 w-28 md:h-12 md:w-32">
                <Image
                  src="/assets/incub-logo.png"
                  alt="III Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Invertis Innovation and Incubation (III) is a dynamic hub designed to nurture and accelerate entrepreneurial ventures within the Invertis University ecosystem. It is an independent organisation which provides a platform for budding entrepreneurs, students, and faculty to transform innovative ideas into successful businesses.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Incubation is an important activity whose value lies in its ability to help bridge the gap between an idea and the market. III acts as a business incubator that provides fledgling ventures with workspace, seed funding, mentoring, and networking opportunities.
              </p>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 group w-fit"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        </motion.div>
      </div>
    </section>
  );
}

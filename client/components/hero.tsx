"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-[calc(100vh-50px)] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/bg.jpg"
          alt="Invertis Innovation & Incubation Background"
          fill
          sizes="100vw"
          className="object-cover object-center "
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/60"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 sm:mb-8 flex justify-center"
        >
          <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-white/90 ring-1 ring-white/30 hover:ring-white/40 backdrop-blur-sm">
            Empowering Innovation & Entrepreneurship{" "}
            <a href="#" className="font-semibold text-white hover:text-white/80">
              Learn more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mx-auto text-center mt-4 sm:mt-6 relative z-20 py-4 text-white"
        >
          <span className="text-blue-500">I</span>nvertis <span className="text-yellow-400">I</span>nnovation and <span className="text-red-500">I</span>ncubation
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 sm:mt-6 mb-6 sm:mb-10 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-4"
        >
          The Home for the Thriving Community of Invertis&apos; Innovators & Entrepreneurs
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 px-4"
        >
          <Link href="/incubation-program" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto group relative text-sm sm:text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 h-10 sm:h-11 px-6 sm:px-8 rounded-lg shadow-lg"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Programs
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform?usp=sharing&ouid=105351415346587374700"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-sm sm:text-base font-medium bg-white hover:bg-gray-50 text-gray-900 transition-all duration-300 h-10 sm:h-11 px-6 sm:px-8 rounded-lg border-2 border-white shadow-lg"
            >
              Join Community
              <Users className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const heroImages = [
  "/assets/hero/1.png",
  "/assets/hero/2.png",
  "/assets/hero/3.png",
  "/assets/hero/4.png",
  "/assets/hero/5.png",
  "/assets/hero/6.png",
  "/assets/hero/7.png",
  "/assets/hero/8.png",
  "/assets/hero/9.png",
  "/assets/hero/10.png",
  "/assets/hero/11.png",
];

export function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="h-[calc(100vh-50px)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Carousel Background */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
          duration: 30,
        }}
      >
        <CarouselContent className="h-full m-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full p-0 basis-full min-w-full">
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  alt={`Invertis Innovation & Incubation Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center w-full h-full"
                  priority={index === 0}
                  quality={90}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 w-full h-full"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Arrow Buttons with Aceternity UI styling */}
        <CarouselPrevious className="left-4 sm:left-8 h-12 w-12 sm:h-14 sm:w-14 border-2 border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 hover:border-white/40 text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110">
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </CarouselPrevious>
        <CarouselNext className="right-4 sm:right-8 h-12 w-12 sm:h-14 sm:w-14 border-2 border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/20 hover:border-white/40 text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </CarouselNext>
      </Carousel>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 sm:mb-6 flex justify-center"
        >
          <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-white/90 ring-1 ring-white/30 hover:ring-white/40 backdrop-blur-sm transition-all duration-300">
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mx-auto text-center mt-2 sm:mt-4 relative z-20 py-2 sm:py-3 text-white drop-shadow-2xl"
        >
          <span className="text-blue-500">I</span>nvertis <span className="text-yellow-400">I</span>nnovation and <span className="text-red-500">I</span>ncubation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-3 sm:mt-4 mb-5 sm:mb-8 text-sm sm:text-base md:text-lg text-white/90 max-w-xl lg:max-w-3xl mx-auto leading-relaxed px-0 drop-shadow-lg"
        >
          The Home for the Thriving Community of Invertis&apos; Innovators & Entrepreneurs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Link href="/incubation-program" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto group relative text-sm sm:text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 h-10 sm:h-11 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
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
              className="w-full sm:w-auto text-sm sm:text-base font-medium bg-white hover:bg-gray-50 text-gray-900 transition-all duration-300 h-10 sm:h-11 px-6 sm:px-8 rounded-lg border-2 border-white shadow-lg hover:shadow-2xl hover:scale-105"
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

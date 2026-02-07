"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Dr. Rajeev Singh Bhandari",
      title: "Incubation Manager",
      image: "/assets/Team/BhandariSir.jpeg"
    },
    {
      name: "Mr. Aman Choudhary",
      title: "Incubation Associate",
      image: "/assets/Team/amansir.jpeg"
    }
  ];

  const incubationSquad = {
    
    archive: [
      {
        name: "Alaina Khan",
        image: "/assets/Team/alaina.jpeg"
      },
      {
        name: "Pranay Saxena",
        image: "/assets/Team/praney.jpeg"
      }
    ],
    tech: [
      {
        name: "Alok Yadav",
        image: "/assets/Team/Alok.jpeg"
      },
      {
        name: "Ahqaf Ali",
        image: "/assets/Team/Ahqaf.jpeg"
      }
    ],
    media: [
      {
        name: "Aqsa Ahmad",
        image: "/assets/Team/aqsa.jpeg"
      },
      {
        name: "NA",
        image: "/assets/Team/Pranay.jpeg"
      }
    ],
    event: [
      {
        name: "Krishnamani Sharma",
        image: "/assets/Team/krish.jpeg"
      },
      {
        name: "NA",
        image: "/assets/Team/aaina.jpeg"
      }
    ]
  };

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
      <div className="min-h-screen bg-gradient-to-b from-white/80 via-blue-50/20 to-white/80 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Core Team Section */}
        <section className="pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Typography */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">TEAM</h2>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                    We've got an <Highlight className="text-gray-900 px-2">entire dedicated team</Highlight> to supporting you and{" "}
                    <span className="inline-flex items-baseline whitespace-nowrap gap-1">
                      your<PointerHighlight><span className="text-gray-900"> startup</span></PointerHighlight>
                    </span>.
                  </h1>
                </div>
              </motion.div>

              {/* Right Side - Core Team Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {coreTeam.map((member, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-lg h-full bg-white">
                        {/* Image */}
                        <div className="relative h-64 sm:h-72 overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 text-center">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-blue-600">
                            {member.title}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Incubation Squad Section */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 tracking-tight">
                INCUBATION SQUAD
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Tech Associates */}
              {incubationSquad.tech.map((member, index) => (
                <motion.div key={`tech-${index}`} variants={itemVariants} className="flex flex-col items-center">
                  <div className="group relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-blue-600">Tech Associate</p>
                </motion.div>
              ))}

              {/* Archive Associates */}
              {incubationSquad.archive.map((member, index) => (
                <motion.div key={`archive-${index}`} variants={itemVariants} className="flex flex-col items-center">
                  <div className="group relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-blue-600">Archive Associate</p>
                </motion.div>
              ))}

              {/* Media Associates */}
              {incubationSquad.media.map((member, index) => (
                <motion.div key={`media-${index}`} variants={itemVariants} className="flex flex-col items-center">
                  <div className="group relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-blue-600">Media Associate</p>
                </motion.div>
              ))}

              {/* Event Associates */}
              {incubationSquad.event.map((member, index) => (
                <motion.div key={`event-${index}`} variants={itemVariants} className="flex flex-col items-center">
                  <div className="group relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm font-medium text-blue-600">Event Associate</p>
                </motion.div>
              ))}

              
            </motion.div>
          </div>
        </section>
      </div>
    </HeroHighlight>
  );
}

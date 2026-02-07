 "use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { advisoryBoard } from "@/lib/data";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function AdvisoryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        {/* Advisory Board Section */}
        <section className="pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-10"
            >
              <h2 className="subheading-font text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto">
                <Highlight className="text-gray-900 px-2">
                  Advisory Board
                </Highlight>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {advisoryBoard.map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-xl h-full bg-white">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Image */}
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-4 text-center relative">
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-600">
                        {member.title}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </HeroHighlight>
  );
}

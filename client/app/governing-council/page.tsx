"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Crown, Award, Users, Shield } from "lucide-react";

export default function GoverningCouncilPage() {
  // Hardcoded governing council data
  const governingCouncil = {
    leadership: [
      {
        name: "Mr. Parth Gautam",
        title: "Chairman",
        role: "leadership",
        image: "/assets/Governing/Parthsir.jpeg",
        description: "Leads strategic initiatives for the incubation center"
      },
      {
        name: "Mohd Talha Khan",
        title: "Vice Chairman",
        role: "leadership",
        image: "/assets/Governing/Talhasir.jpeg",
        description: "Manages industry collaborations and partnerships"
      },
      {
        name: "Pankaj Rai",
        title: "President of IIC",
        role: "leadership",
        image: "/assets/Governing/Pankajsir.png",
        description: "Oversees Innovation and Incubation Council activities"
      }
    ],
    executiveMembers: [
      {
        name: "Dr. R.K. Shukla",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/shuklaSir.jpg"
      },
      {
        name: "Dr. Manish Gupta",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/manishSir.jpg"
      },
      {
        name: "Dr. P. P. Singh",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/ppsingh.jpg"
      },
      {
        name: "Dr. S.S. Tripathi",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/sstripathi.jpg"
      },
      {
        name: "Prof. Reena Jaiswal",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/reena.jpg"
      },
      {
        name: "Prof. (Dr.) Raju Ch. V. Voleti",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/Rajusir.webp"
      },
      {
        name: "Mr. Jitendra Parashari",
        title: "Executive Member",
        role: "executive",
        image: "/assets/Governing/jitendra_prashari.jpg"
      },
      {
        name: "Mr. Ashutosh Pradhan",
        title: "Member Secretary",
        role: "executive",
        image: "/assets/Governing/pradhanSir.jpg"
      }
    ]
  };

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
        ease: "easeOut"
      },
    },
  };

  const getRoleIcon = (title: string) => {
    if (title.includes("Chairman") && !title.includes("Vice")) return Crown;
    if (title.includes("Vice Chairman")) return Award;
    if (title.includes("President")) return Shield;
    return Users;
  };

  const getRoleBadgeColor = (title: string) => {
    if (title.includes("Chairman") && !title.includes("Vice")) return "bg-gradient-to-r from-amber-500 to-yellow-600";
    if (title.includes("Vice Chairman")) return "bg-gradient-to-r from-blue-600 to-blue-700";
    if (title.includes("President")) return "bg-gradient-to-r from-cyan-600 to-cyan-700";
    return "bg-gradient-to-r from-gray-600 to-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white px-4 sm:px-6 lg:px-12">
      {/* Leadership Tier - Top 3 */}
      <section className="pt-6 pb-8 md:pt-8 md:pb-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="subheading-font text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Leadership Council
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16"
          >
            {governingCouncil.leadership.map((member, index) => {
              const Icon = getRoleIcon(member.title);
              const badgeColor = getRoleBadgeColor(member.title);
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group relative overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl h-full bg-gradient-to-br from-white to-blue-50/50">
                    {/* Decorative blur */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className={`${badgeColor} text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5`}>
                        <Icon className="w-3 h-3" />
                        {member.title.includes("Chairman") ? member.title.split(" ")[0] + " " + member.title.split(" ")[1] : member.title.split(" ")[0]}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-3 text-center relative">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5">
                        {member.name}
                      </h3>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-1.5" />
                      <p className={`font-semibold mb-1.5 text-xs ${badgeColor.replace('bg-gradient-to-r', 'text-transparent bg-clip-text bg-gradient-to-r')}`}>
                        {member.title}
                      </p>
                      {member.description && (
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {member.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Executive Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="subheading-font text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Executive Council Members
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {governingCouncil.executiveMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-xl h-full bg-white">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-4 text-center relative">
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs">
                      {member.title}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

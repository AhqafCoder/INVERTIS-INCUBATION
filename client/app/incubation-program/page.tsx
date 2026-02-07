"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function IncubationProgramPage() {
  const [activeFilter, setActiveFilter] = useState("All Programs");
  const [showVideo, setShowVideo] = useState(false);

  const programs = [
    {
      title: "Webinar on National Startup Day",
      description: "Theme: Ignite Innovation – Start Local, Scale Global. Expert talk by Rahul Naidu on startup growth and innovation strategies.",
      date: "16 January 2025",
      sortDate: new Date("2025-01-16"),
      category: "Special Event",
      image: "/assets/national-startup-day 2025/nationalstartup.jpg",
      slug: "webinar-national-startup-day-2025"
    },
    {
      title: "Expert Talk on Design Thinking in Fashion",
      description: "Revolutionizing Fashion with Design Thinking to enhance creative problem-solving and innovation skills.",
      date: "30th January 2025",
      sortDate: new Date("2025-01-30"),
      category: "Expert Talk",
      image: "/assets/design-thinking-fashion/fashion design workshop.jpeg",
      slug: "expert-talk-design-thinking-fashion"
    },
    {
      title: "Workshop on Startup Scaling & Market Expansion",
      description: "From Startup to Scale-Up: Strategies for Sustainable Growth & Market Expansion. Led by Om Raj Singh focusing on entrepreneurial readiness.",
      date: "16 January 2025",
      sortDate: new Date("2025-01-16"),
      category: "Workshop",
      image: "/assets/National startup day 2026/National Startup Day.png",
      slug: "workshop-startup-scaling-market-expansion"
    },
    {
      title: "Business Development Workshop",
      description: "Strengthening entrepreneurial competencies and market-oriented thinking. Session by Ravi Kumar on brand strategy and customer engagement.",
      date: "10th March 2025",
      sortDate: new Date("2025-03-10"),
      category: "Workshop",
      image: "/assets/Business development/businessdev.jpg",
      slug: "business-development-workshop"
    },
    {
      title: "Interactive Session on Brand Personality for Startups",
      description: "Focus on personal branding, startup identity, and market positioning. Conducted by Raunaq Chawla for student startups.",
      date: "7th March 2025",
      sortDate: new Date("2025-03-07"),
      category: "Workshop",
      image: "/assets/brand-personality/brandpersonality.jpg",
      slug: "brand-personality-startups"
    },
    {
      title: "MoU Signing for Incubation Support",
      description: "MoU signing with Mr. Professional to strengthen incubation, mentorship, and industry collaboration for student startups.",
      date: "Recently Conducted",
      sortDate: new Date("2024-12-01"),
      category: "Partnership",
      image: "/assets/Mou/Mou 1.jpeg",
      slug: "mou-signing-incubation-support"
    },
    {
      title: "Shark Tank Invertis - Season 1",
      description: "An exciting 3-phase event where students present innovative ideas to compete for the chance to turn their concepts into reality.",
      date: "1 - 15 October 2024",
      sortDate: new Date("2024-10-01"),
      category: "Shark Tank Invertis",
      image: "/assets/Shark Tank Season 1/all.JPG",
      slug: "shark-tank-invertis-season-1"
    },
    {
      title: "Shark Tank Invertis - Season 2",
      description: "The second season of our highly successful Shark Tank competition, bringing new opportunities for aspiring entrepreneurs.",
      date: "6th November 2025",
      sortDate: new Date("2025-11-06"),
      category: "Shark Tank Invertis",
      image: "/assets/sharktank season 2/DSC_1960~1.jpg",
      slug: "shark-tank-invertis-season-2"
    },
    {
      title: "Inverthon: The Coding Challenge",
      description: "A dynamic hackathon event bringing together talented coders and developers to develop creative solutions to real-world challenges.",
      date: "28 April 2025",
      sortDate: new Date("2025-04-28"),
      category: "Hackathon",
      image: "/assets/Inverthon/a.jpg",
      slug: "inverthon-coding-challenge"
    },
    {
      title: "HackBhoomi: Smart India Hackathon",
      description: "Internal 36-hour hackathon recognized under Smart India Hackathon with mentorship and real-world problem statements.",
      date: "12-13 September 2025",
      sortDate: new Date("2025-09-12"),
      category: "Hackathon",
      image: "/assets/hackbhoomi/a.jpg",
      slug: "hackbhoomi-smart-india-hackathon"
    },
    {
      title: "Innovation Showcasing",
      description: "A platform to showcase innovative projects and prototypes developed by our incubatees to potential investors and partners.",
      date: "23rd and 24th January 2026",
      sortDate: new Date("2026-01-23"),
      category: "Innovation Event",
      image: "/assets/Innovation Showcase 23rd January 2026/Innovation Showcase Where Ideas Turn into Prototypes (1).png",
      slug: "innovation-showcasing-2026"
    },
    {
      title: "Startup Launching",
      description: "An exclusive event where newly incubated startups are formally launched with media coverage and investor connections.",
      date: "24th January 2026",
      sortDate: new Date("2026-01-24"),
      category: "Innovation Event",
      image: "/assets/Startup Launching 24th January 2026/Edusphere.png",
      slug: "startup-launching-2026"
    },
    {
      title: "Founder's Forum",
      description: "An insightful workshop on startup financing with expert guidance on securing funding, pitching to investors, and managing finances.",
      date: "15 February 2025",
      sortDate: new Date("2025-02-15"),
      category: "Workshop",
      image: "/assets/Founders Forum/banner.png",
      slug: "founders-forum-startup-financing"
    },
    {
      title: "Women's Day Workshop",
      description: "Sustainable entrepreneurship workshop featuring Dr. Megha Saxena on green innovation and eco-conscious business solutions.",
      date: "8 March 2025",
      sortDate: new Date("2025-03-08"),
      category: "Workshop",
      image: "/assets/Womensday/businessdevelopmentworkshop.jpg",
      slug: "womens-day-workshop-2025"
    },
    {
      title: "Faculty Development Program (FDP)",
      description: "Workshop on Business Model Canvas for faculty members to enhance entrepreneurial teaching capabilities.",
      date: "10 April 2025",
      sortDate: new Date("2025-04-10"),
      category: "Workshop",
      image: "/assets/Faculty Development Program/fdp.jpg",
      slug: "faculty-development-program-fdp"
    }
  ].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime()); // Sort by date, newest first

  const filters = [
    "All Programs",
    "Shark Tank Invertis",
    "Special Event",
    "Workshop",
    "Hackathon",
    "Innovation Event"
  ];

  const filteredPrograms = activeFilter === "All Programs" 
    ? programs 
    : programs.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
      <div className="min-h-screen bg-gradient-to-b from-white/80 via-blue-50/20 to-white/80 px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="pt-6 pb-4 md:pt-8 md:pb-6">
          <div className="container mx-auto max-w-7xl">
            {/* Inauguration Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto px-4 md:px-6"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Image Section */}
                <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/Incubation Inaugration/invertisincubation.jpg"
                    alt="Innovation & Incubation Centre Inauguration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                {/* Content Section */}
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug tracking-normal">
                    Innovation & Incubation Centre Inauguration
                  </h2>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>16 September 2024</span>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 leading-7 mb-7 font-normal">
                    On 16 September 2024, Invertis University officially inaugurated its Innovation & Incubation Centre in Bareilly, 
                    marking the launch of a new ecosystem to nurture innovators, researchers, and student-entrepreneurs. The facility 
                    is designed to provide mentorship, workspace, and resources that enable early-stage ideas to be transformed into 
                    viable startups over a period of 6–12 months. It features modern infrastructure and collaborative zones where 
                    creativity and industry meet.
                  </p>
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center gap-2.5 px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-all duration-200 hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 px-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                Incubation Programs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-normal font-normal">
                Explore our diverse range of programs designed to foster innovation, entrepreneurship, and technological excellence
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-4 md:py-6 px-3 md:px-4">
          <div className="container mx-auto max-w-7xl px-4 lg:px-12 xl:px-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeFilter}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {filteredPrograms.map((program, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={`${
                          program.category === 'Workshop' ? 'bg-blue-500' :
                          program.category === 'Expert Talk' ? 'bg-purple-500' :
                          program.category === 'Special Event' ? 'bg-orange-400' :
                          program.category === 'Hackathon' ? 'bg-green-500' :
                          program.category === 'Innovation Event' ? 'bg-pink-500' :
                          program.category === 'Shark Tank Invertis' ? 'bg-red-500' :
                          'bg-indigo-500'
                        } text-white text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-lg border-0`}>
                          {program.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3.5 sm:p-4 flex-grow flex flex-col">
                      <div className="flex items-center gap-1.5 text-indigo-600 text-xs font-medium mb-2.5">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {program.date}
                      </div>
                      
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2.5 line-clamp-2">
                        {program.title}
                      </h3>
                      
                      <p className="text-xs text-gray-600 leading-relaxed mb-3.5 line-clamp-3 flex-grow">
                        {program.description}
                      </p>
                      
                      <Link 
                        href={`/incubation-program/${program.slug}`}
                        className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-6 md:py-8 px-3 md:px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6 md:mb-8 tracking-tight leading-tight"
            >
              Program Benefits
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  icon: "🎓",
                  title: "Learn from Experts",
                  description: "Gain insights from industry leaders, successful entrepreneurs, and academic experts"
                },
                {
                  icon: "🤝",
                  title: "Network & Collaborate",
                  description: "Connect with fellow entrepreneurs, potential co-founders, and investors"
                },
                {
                  icon: "🚀",
                  title: "Accelerate Growth",
                  description: "Access resources, mentorship, and opportunities to scale your startup faster"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 h-full border border-gray-200 hover:border-gray-400 bg-white">
                    <CardHeader className="p-3 sm:p-4">
                      <div className="text-2xl sm:text-3xl mb-2">{benefit.icon}</div>
                      <CardTitle className="text-base sm:text-lg font-bold">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 pt-0">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-8 md:py-12 px-3 md:px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Our Achievements
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Milestones that reflect our commitment to fostering innovation and entrepreneurship
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { number: "50+", label: "Startups Incubated", icon: "🚀" },
                { number: "100+", label: "Events Conducted", icon: "🎯" },
                { number: "500+", label: "Students Impacted", icon: "👥" },
                { number: "15+", label: "Industry Partners", icon: "🤝" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 md:py-12 px-3 md:px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                  Get in Touch
                </h2>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Ready to transform your innovative idea into a successful startup? Connect with us to explore 
                  incubation opportunities, mentorship programs, and funding support.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">7217011248, 7217011240</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">invertis.incubation@invertis.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Campus Address</p>
                      <p className="text-sm text-gray-600">Invertis Village, Delhi Lucknow Highway NH-24, Bareilly, UP - 243 123</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Apply for Incubation
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfc9f0Lcxcv3cirTZBhzupM0rs1z-o_5UcHKMA2WFHuu9NVLg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    Join as Mentor
                  </a>
                </div>
              </motion.div>

              {/* Contact Image/Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                      <div className="bg-green-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Free Workspace</p>
                        <p className="text-xs text-gray-600">Modern facilities & equipment</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                      <div className="bg-blue-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Expert Mentorship</p>
                        <p className="text-xs text-gray-600">Industry professionals guidance</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                      <div className="bg-purple-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Funding Support</p>
                        <p className="text-xs text-gray-600">Access to investors & grants</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setShowVideo(false)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              controls
              autoPlay
              className="w-full aspect-video"
            >
              <source src="/assets/Videos/Video-65.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      )}
    </HeroHighlight>
  );
}

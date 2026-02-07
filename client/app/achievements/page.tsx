"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Trophy, Award, Star, TrendingUp, Users, Lightbulb, Target, Rocket } from "lucide-react";

export default function AchievementsPage() {
  const stats = [
    { number: "50+", label: "Startups Incubated", icon: Rocket, color: "bg-blue-500" },
    { number: "100+", label: "Events Conducted", icon: Target, color: "bg-green-500" },
    { number: "500+", label: "Students Impacted", icon: Users, color: "bg-purple-500" },
    { number: "15+", label: "Industry Partners", icon: TrendingUp, color: "bg-orange-500" },
    { number: "20+", label: "Patents Filed", icon: Lightbulb, color: "bg-pink-500" },
    { number: "₹50L+", label: "Funding Secured", icon: Award, color: "bg-indigo-500" }
  ];

  const achievements = [
    {
      title: "Best Incubation Centre 2025",
      description: "Recognized by Startup India for outstanding contribution to the startup ecosystem",
      icon: Trophy,
      year: "2025",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Smart India Hackathon Champions",
      description: "Multiple teams qualified and won at the national level hackathon",
      icon: Star,
      year: "2025",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Women Entrepreneurship Award",
      description: "Excellence in promoting women-led startups and entrepreneurship",
      icon: Award,
      year: "2025",
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Innovation Excellence Award",
      description: "Outstanding performance in fostering innovation and technology development",
      icon: Lightbulb,
      year: "2024",
      color: "from-green-400 to-teal-500"
    }
  ];

  const successStories = [
    {
      name: "TechVenture Solutions",
      founder: "Rahul Sharma",
      category: "AI & Technology",
      description: "Developed an AI-powered platform serving 10,000+ users",
      image: "/assets/startups/placeholder.jpg",
      funding: "₹25 Lakhs"
    },
    {
      name: "EcoInnovate",
      founder: "Priya Singh",
      category: "Sustainability",
      description: "Green technology startup reducing carbon footprint",
      image: "/assets/startups/placeholder.jpg",
      funding: "₹15 Lakhs"
    },
    {
      name: "HealthTech Pro",
      founder: "Amit Kumar",
      category: "Healthcare",
      description: "Digital health platform connecting rural healthcare",
      image: "/assets/startups/placeholder.jpg",
      funding: "₹20 Lakhs"
    }
  ];

  return (
    <>
      <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
        <div className="min-h-screen bg-white relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-12"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Our <Highlight className="text-white">Achievements</Highlight>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Celebrating milestones, recognizing excellence, and showcasing the impact we've made 
                in the startup and innovation ecosystem
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
                  >
                    <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Awards & Recognition
                </h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  Honored for our dedication to innovation, entrepreneurship, and student empowerment
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-indigo-600 mb-2">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Success Stories
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Meet the innovative startups that emerged from our incubation program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🚀</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                        {story.category}
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        {story.funding}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Founded by {story.founder}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </HeroHighlight>
    </>
  );
}

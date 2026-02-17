"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  TrendingUp,
  Trophy,
  Zap,
  FileCheck,
  Target,
  Star,
} from "lucide-react";

export function QuickStatsSection() {
  const stats = [
    {
      icon: Rocket,
      value: "20+",
      label: "Startups",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: Users,
      value: "10+",
      label: "Mentors",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      icon: TrendingUp,
      value: "₹10.5Lac+",
      label: "Funding",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      border: "border-green-200",
    },
    {
      icon: Trophy,
      value: "SIH 2025",
      label: "Hardware Winner",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      border: "border-yellow-200",
    },
    {
      icon: Zap,
      value: "Top 5",
      label: "FKDC Season 9",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      border: "border-red-200",
    },
    {
      icon: FileCheck,
      value: "2",
      label: "Student Patents",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      border: "border-teal-200",
    },
    {
      icon: Star,
      value: "15+",
      label: "Success Stories",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      border: "border-orange-200",
    },
  ];



  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-b from-white via-gray-50 to-white flex justify-center">
      <div className="w-full px-2 sm:px-3 md:px-4 max-w-7xl">
        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
                className={`${stat.bgColor} ${stat.border} group rounded-xl p-3 md:p-4 backdrop-blur-xl border transition-all duration-300 cursor-pointer relative overflow-hidden w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[140px]`}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${stat.color}`}
                ></div>

                {/* Icon Container */}
                <div className="mb-3 relative z-10">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                {/* Stats Content */}
                <div className="space-y-1 relative z-10">
                  <h3
                    className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent leading-tight`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-gray-700 font-semibold text-xs md:text-sm group-hover:text-gray-900 transition-colors line-clamp-2">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

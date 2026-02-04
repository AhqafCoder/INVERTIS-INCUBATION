"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, TrendingUp, Users, Award, Briefcase, Target } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    icon: Rocket,
    value: 50,
    suffix: "+",
    label: "Startups Incubated",
  },
  {
    icon: TrendingUp,
    value: 10,
    suffix: "+",
    prefix: "₹",
    label: "Lakhs Funding Raised",
  },
  {
    icon: Target,
    value: 6,
    suffix: "+",
    label: "Industry Sectors",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Patents Filed",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Mentors & Advisors",
  },
  {
    icon: Briefcase,
    value: 200,
    suffix: "+",
    label: "Jobs Created",
  },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (value - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ImpactStatsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto">
            Transforming ideas into successful ventures through strategic support and mentorship
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col items-center justify-center text-center hover:scale-105 hover:border-white/40">
                  {/* Icon */}
                  <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      {stat.prefix}
                      <Counter value={stat.value} />
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-blue-100 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/20 rounded-2xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">₹10+ Lakhs</p>
                <p className="text-sm text-blue-100 font-medium">Total Funding Secured</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/20 rounded-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">6 Startups</p>
                <p className="text-sm text-blue-100 font-medium">Recently Funded</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-white/20 rounded-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-blue-100 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

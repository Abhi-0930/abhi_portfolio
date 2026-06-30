"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Tv, Award, Lightbulb } from "lucide-react";

interface CounterProps {
  value: string;
}

function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numbers and non-numeric suffixes (e.g. "5,000+" -> number: 5000, suffix: "+")
    const cleaned = value.replace(/,/g, "");
    const match = cleaned.match(/^(\d+)(.*)$/);
    
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    
    let start = 0;
    const duration = 1800; // 1.8 seconds animation
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic progress
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * target);
      
      const formatted = value.includes(",") 
        ? current.toLocaleString("en-US") 
        : current.toString();

      setDisplayValue(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Leadership() {
  const stats = [
    {
      stat: "5,000+",
      label: "Engineers trained & mentored",
      icon: Users,
    },
    {
      stat: "10+",
      label: "Engineering institutions",
      icon: Tv,
    },
    {
      stat: "Multi",
      label: "Hackathons & innovation runs",
      icon: Award,
    },
    {
      stat: "MVPs",
      label: "Built for early-stage startups",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="leadership" className="py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              05 — LEADERSHIP & COMMUNITY
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              Engineering is a craft <span className="font-serif italic text-zinc-500 dark:text-zinc-400 font-normal">passed down.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
              Beyond shipping code, I invest in the next wave of engineers — through workshops, mentorship, and community-led learning.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-[24px] border border-zinc-200/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900/60 p-6 md:p-8 shadow-sm flex flex-col justify-between items-start h-44 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Icon wrapper badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-700 dark:text-zinc-300 transition-transform group-hover:scale-105">
                  <Icon size={16} />
                </div>

                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 leading-none">
                    <Counter value={item.stat} />
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-450 dark:text-zinc-400 mt-2 block">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bullets Detail Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full border border-zinc-200/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900/60 rounded-[24px] p-6 md:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs md:text-[13px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="text-zinc-400 dark:text-zinc-550 font-mono select-none mt-0.5">•</span>
                <span>Trained and mentored 5,000+ students through online and offline technical programs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-zinc-400 dark:text-zinc-550 font-mono select-none mt-0.5">•</span>
                <span>Participated in hackathons and innovation programs — shipping under pressure.</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <span className="text-zinc-400 dark:text-zinc-550 font-mono select-none mt-0.5">•</span>
                <span>Conducted workshops across 10+ engineering institutions across India.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-zinc-400 dark:text-zinc-550 font-mono select-none mt-0.5">•</span>
                <span>Worked with startups on MVP development, technical consulting, and product engineering.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

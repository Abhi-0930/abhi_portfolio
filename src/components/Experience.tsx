"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  role: string;
  company: string;
  period: string;
  description: string;
  pills: string[];
}

const experiences: TimelineEvent[] = [
  {
    role: "Founder & Full-Stack Engineer",
    company: "CodeLoom",
    period: "JUN 2026 — PRESENT",
    description: "Building web, mobile, AI, and automation solutions for startups and businesses, leading end-to-end product development from requirements and system architecture to deployment and maintenance.",
    pills: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "AWS", "System Design"],
  },
  {
    role: "Open Source Contributor & Project Mentor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "MAY 2022 — FEB 2024",
    description: "Contributed to open-source projects spanning cybersecurity, AI, e-commerce, and food delivery domains while collaborating with distributed engineering teams and shipping production-ready features.",
    pills: ["Open Source", "Full-Stack Development", "System Design", "Cybersecurity", "REST APIs", "Git"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              03 — EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              A timeline of building products, solving problems, and creating impact through software engineering.
            </h2>
          </div>
        </div>

        {/* Alternating Timeline Layout */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200/80 dark:bg-zinc-800/80 -translate-x-1/2 z-0" />

          <div className="space-y-20 md:space-y-32">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? "" : "md:flex-row-reverse"
                  } w-full`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                    <div className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-white" />
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className={`flex flex-col ${
                        isLeft ? "md:items-end md:text-right" : "items-start text-left"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold font-mono text-zinc-400 dark:text-zinc-500 tracking-wider mb-3">
                        ✨ {exp.period}
                      </span>
                      <h3 className="text-[17px] font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-bold text-zinc-450 mt-1 block">
                        {exp.company}
                      </span>
                      <p className="mt-4 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium max-w-xl">
                        {exp.description}
                      </p>
                      
                      {/* Tech Stack Badges */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.pills.map((pill) => (
                          <span
                            key={pill}
                            className="px-2.5 py-1 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-800/10 text-[10px] font-semibold text-zinc-550 dark:text-zinc-350 shadow-sm"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

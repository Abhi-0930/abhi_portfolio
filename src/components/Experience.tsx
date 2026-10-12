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
    role: "Founder",
    company: "PrepPath",
    period: "SEP 2026 — PRESENT",
    description: "Building an industry-focused technical education and engineering readiness platform designed to bridge the gap between academic theory and production-grade software engineering through structured DSA, Full-Stack, DBMS, and System Design roadmaps, technical handbooks, and cohort mentorship.",
    pills: ["Product Architecture", "Next.js", "TypeScript", "System Design (HLD/LLD)", "DSA & Algorithms", "Technical Curriculum", "EdTech"],
  },
  {
    role: "Founder & Full-Stack System Architect",
    company: "CodeLoom",
    period: "FEB 2024 — PRESENT",
    description: "Partnering with startups and enterprises to transform real-world problems into scalable web, mobile, AI, and automation products—leading end-to-end engineering from HLD/LLD system architecture and database design to Kubernetes orchestration, DevSecOps hardening, and observability.",
    pills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "System Design", "AI Agents / MCP"],
  },
  {
    role: "Founder & Lead Full-Stack Architect",
    company: "Arihstour",
    period: "OCT 2023 — JUL 2024",
    description: "Founded and operated a travel metasearch startup unifying real-time flight, hotel, and bus inventory across 7+ global partner APIs (Skyscanner, Booking.com, MakeMyTrip, Air India, AirAsia, Aviasales, Trip.com), complete with CTR/conversion attribution pipelines, an admin analytics portal, and automated Razorpay payouts.",
    pills: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Razorpay", "API Aggregation", "System Design"],
  },
  {
    role: "Technical Trainer & Placement Mentor",
    company: "Freelance (Global)",
    period: "FEB 2023 — PRESENT",
    description: "Trained and mentored 5,000+ students and engineers across the US, UK, India, Netherlands, Italy, and Germany through online and offline bootcamps, university workshops, and placement mentorship covering DSA, Algorithms, MERN/Next.js, App Development, DBMS, and System Design (HLD/LLD).",
    pills: ["5,000+ Students Mentored", "DSA & Algorithms", "Full-Stack (MERN/Next.js)", "System Design", "DBMS", "App Development", "Technical Training"],
  },
  {
    role: "Project Mentor & Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "JUL 2023 — JAN 2024",
    description: "Contributed to and mentored open-source projects across cybersecurity, AI, e-commerce, and full-stack web domains—conducting pull-request code reviews, guiding distributed contributors on Git workflows, and shipping production-ready features and REST API optimizations.",
    pills: ["Open Source", "Code Review", "Full-Stack Development", "System Design", "Cybersecurity", "REST APIs", "Git"],
  },
  {
    role: "Design Team Lead & Member",
    company: "Coding Cubs",
    period: "AUG 2022 — JUL 2023",
    description: "Promoted from Design Team Member to Team Lead based on technical ownership and delivery—leading cross-functional project execution, mentoring team members, and managing end-to-end delivery timelines.",
    pills: ["Technical Leadership", "Project Management", "Team Mentorship", "UI/UX Systems"],
  },
  {
    role: "Web Developer Intern",
    company: "Prodigy InfoTech",
    period: "SEP 2022 — OCT 2022",
    description: "Engineered responsive, accessible frontend interfaces and reusable UI components using modern web standards, focusing on cross-device performance, clean component architecture, and Git-based collaborative workflows.",
    pills: ["Frontend Engineering", "JavaScript", "HTML5 & CSS3", "Responsive UI", "Git"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              03 — EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              A timeline of architecting production systems, launching startup ventures, and mentoring 5,000+ engineers globally.
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
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                  >
                    <div className="h-2 w-2 rounded-full bg-zinc-950 dark:bg-white" />
                  </motion.div>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0"
                  >
                    <div
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
                      <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                        {exp.pills.map((pill) => (
                          <span
                            key={pill}
                            className="px-2.5 py-1 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-800/10 text-[10px] font-semibold text-zinc-550 dark:text-zinc-350 shadow-sm"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

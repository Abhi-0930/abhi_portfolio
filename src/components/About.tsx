"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Cloud, Network, GitBranch, Rocket, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              01 — ABOUT
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              Building technology that solves real-world problems.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
              I work across software engineering, cybersecurity, and product development, focusing on building secure, scalable, and maintainable systems. From mentoring 5,000+ students through online and offline programs to developing AI-powered applications and business solutions, I enjoy creating products that deliver <span className="font-semibold text-zinc-950 dark:text-zinc-50">measurable impact</span> and long-term value.
            </p>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Full-Stack (7/12) + Cyber & Cloud (5/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Full-Stack Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative rounded-[24px] border border-blue-100/50 dark:border-blue-950/40 bg-gradient-to-br from-blue-50/30 via-white to-white dark:from-blue-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200/60 dark:hover:border-blue-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 dark:bg-blue-950/40 p-3 text-blue-600 dark:text-blue-455">
                  <Cpu size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  Full-Stack Engineering
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Building production-grade web and mobile applications using React, Next.js, Node.js, and modern development practices with a strong emphasis on performance, accessibility, and maintainability.
                </p>
              </div>
            </motion.div>

            {/* Cyber & Cloud Stacked Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Cybersecurity Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-[24px] border border-rose-100/50 dark:border-rose-950/40 bg-gradient-to-br from-rose-50/30 via-white to-white dark:from-rose-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-rose-200/60 dark:hover:border-rose-800/40"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-rose-50 dark:bg-rose-950/40 p-3 text-rose-600 dark:text-rose-455">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                    Cybersecurity
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                    Applying secure software development principles, vulnerability assessment, and web application security practices to build products that are reliable, resilient, and secure by design.
                  </p>
                </div>
              </motion.div>

              {/* Cloud & DevOps Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-[24px] border border-amber-100/50 dark:border-amber-950/40 bg-gradient-to-br from-amber-50/30 via-white to-white dark:from-amber-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-amber-200/60 dark:hover:border-amber-800/40"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-amber-50 dark:bg-amber-950/40 p-3 text-amber-600 dark:text-amber-450">
                    <Cloud size={22} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                    Cloud & DevOps
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                    Deploying and managing cloud-native infrastructure using AWS, Docker, Kubernetes, and modern DevOps workflows to deliver scalable, observable, and highly available systems.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Row 2: System Design (6/12) + Open Source (6/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* System Design Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative rounded-[24px] border border-emerald-100/50 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/30 via-white to-white dark:from-emerald-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-emerald-200/60 dark:hover:border-emerald-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-600 dark:text-emerald-450">
                  <Network size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  System Design
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Designing scalable architectures using caching, asynchronous communication, distributed systems principles, and robust HLD/LLD practices for real-world applications.
                </p>
              </div>
            </motion.div>

            {/* Open Source Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 relative rounded-[24px] border border-indigo-100/50 dark:border-indigo-950/40 bg-gradient-to-br from-indigo-50/30 via-white to-white dark:from-indigo-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-indigo-200/60 dark:hover:border-indigo-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 text-indigo-600 dark:text-indigo-455">
                  <GitBranch size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  Open Source
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Contributing to open-source initiatives across AI, cybersecurity, e-commerce, and full-stack development through collaborative engineering and community-driven projects.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Entrepreneurship (Full-Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full relative rounded-[24px] border border-purple-100/50 dark:border-purple-950/40 bg-gradient-to-br from-purple-50/30 via-white to-white dark:from-purple-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-200/60 dark:hover:border-purple-800/40"
          >
            <div>
              <div className="inline-flex rounded-xl bg-purple-50 dark:bg-purple-950/40 p-3 text-purple-600 dark:text-purple-450">
                <Rocket size={22} />
              </div>
              <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                Entrepreneurship
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                Founded CodeLoom to help startups and businesses transform ideas into scalable products through MVP development, technical consulting, and end-to-end software engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

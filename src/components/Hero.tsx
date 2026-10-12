"use client";

import React from "react";
import Link from "next/link";
import { motion as motionFramer } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiKubernetes,
  SiPostgresql,
  SiDocker
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-grid relative min-h-[85vh] flex items-center overflow-hidden py-16 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Subtle Glowing Blobs */}
      <div className="absolute left-[10%] top-[20%] z-0 h-[450px] w-[450px] rounded-full bg-[#387BFF]/8 blur-[100px]" />
      <div className="absolute right-[-5%] top-[5%] z-0 h-[500px] w-[500px] rounded-full bg-[#FFD54F]/18 blur-[95px]" />

      {/* Responsive Grid Layout */}
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Top Status Badge */}
          <motionFramer.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 px-3.5 py-1.5 text-[11px] sm:text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 shadow-sm backdrop-blur-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">[SYS_ONLINE]</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span>2026 Graduate</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span>System Architecture, Startups & Technical Training</span>
          </motionFramer.div>

          {/* Title Group */}
          <motionFramer.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Hi, I'm Abhishek
              <span className="block font-serif italic text-zinc-700 dark:text-zinc-300 font-medium tracking-tight mt-1">
                Jujjuvarapu.
              </span>
            </h1>
          </motionFramer.div>

          {/* Roles Subheader */}
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-zinc-600 dark:text-zinc-400 tracking-normal"
          >
            <span>Full-Stack System Architect</span>
            <span className="text-zinc-300 dark:text-zinc-700 font-normal px-0.5">·</span>
            <span>Cybersecurity & AI Engineer</span>
            <span className="text-zinc-300 dark:text-zinc-700 font-normal px-0.5">·</span>
            <span>Founder & Technical Trainer</span>
          </motionFramer.div>

          {/* Value Proposition / Bio Paragraph */}
          <motionFramer.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 max-w-xl text-sm md:text-base leading-7 md:leading-8 text-zinc-600 dark:text-zinc-400 text-left"
          >
            I architect and build secure, scalable, and high-performance web, mobile, and AI-powered applications from 0 to 1—combining deep HLD/LLD system design, cloud-native DevSecOps, and event-driven architectures to turn real-world problems into viable startup products. Alongside building systems, I work as a Technical Trainer, having mentored 5,000+ students across the US, UK, India, Netherlands, Italy, and Germany.
          </motionFramer.p>

          {/* Action Buttons */}
          <motionFramer.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-zinc-950 dark:bg-white px-6 text-xs font-bold text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-md cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </Link>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer"
            >
              <Download size={14} className="text-zinc-600 dark:text-zinc-400" />
              <span>Download Resume</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 px-4 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </Link>
          </motionFramer.div>
        </div>

        {/* Right Column: Orbiting Circles Component */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] w-full">
          <div className="relative flex h-full w-full max-w-[450px] items-center justify-center overflow-hidden">
            {/* Inner Ring: React, Node, Python */}
            <OrbitingCircles radius={75} duration={25} reverse iconSize={40}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#61DAFB]">
                <SiReact size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#339933]">
                <SiNodedotjs size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#3776AB]">
                <SiPython size={22} />
              </div>
            </OrbitingCircles>

            {/* Outer Ring: Kubernetes, AWS, PostgreSQL, Docker */}
            <OrbitingCircles radius={140} duration={35} iconSize={40}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#326CE5]">
                <SiKubernetes size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#FF9900]">
                <FaAws size={24} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#336791]">
                <SiPostgresql size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-100/80 dark:border-zinc-800/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#2496ED]">
                <SiDocker size={22} />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
}

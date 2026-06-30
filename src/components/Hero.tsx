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
    <section className="bg-grid relative min-h-[85vh] flex items-center overflow-hidden py-16 px-6 md:px-12 bg-white">
      {/* Subtle Glowing Blobs */}
      <div className="absolute left-[10%] top-[20%] z-0 h-[450px] w-[450px] rounded-full bg-[#387BFF]/8 blur-[100px]" />
      <div className="absolute right-[-5%] top-[5%] z-0 h-[500px] w-[500px] rounded-full bg-[#FFD54F]/18 blur-[95px]" />

      {/* Responsive Grid Layout */}
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Title Group */}
          <motionFramer.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
              Hi, I'm Abhishek
              <span className="block font-serif italic text-zinc-700 font-medium tracking-tight mt-1">
                Jujjuvarapu.
              </span>
            </h1>
          </motionFramer.div>

          {/* Roles Subheader */}
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-zinc-500 tracking-normal"
          >
            <span className="text-[#FFB03A]">✨</span>
            <span>Full-Stack Engineer</span>
            <span className="text-zinc-300 font-normal px-0.5">·</span>
            <span>Cybersecurity Professional</span>
            <span className="text-zinc-300 font-normal px-0.5">·</span>
            <span>Founder</span>
          </motionFramer.div>

          {/* Short Value Proposition */}
          <motionFramer.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-xl text-sm md:text-base leading-7 md:leading-8 text-zinc-500 text-left"
          >
            I build secure, scalable, and high-performance web, mobile, and AI-powered applications using modern engineering practices, cloud-native technologies, and thoughtful system design to solve real-world business problems.
          </motionFramer.p>

          {/* Action Buttons */}
          <motionFramer.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-black px-6 text-xs font-bold text-white hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </Link>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer"
            >
              <Download size={14} className="text-zinc-600" />
              <span>Download Resume</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 px-4 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </Link>
          </motionFramer.div>
        </div>

        {/* Right Column: Orbiting Circles Component */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] w-full">
          <div className="relative flex h-full w-full max-w-[450px] items-center justify-center overflow-hidden">
            {/* Center Brand Badge Removed */}

            {/* Inner Ring: React, Node, Python */}
            <OrbitingCircles radius={75} duration={25} reverse iconSize={40}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#61DAFB]">
                <SiReact size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#339933]">
                <SiNodedotjs size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#3776AB]">
                <SiPython size={22} />
              </div>
            </OrbitingCircles>

            {/* Outer Ring: Kubernetes, AWS, PostgreSQL, Docker */}
            <OrbitingCircles radius={140} duration={35} iconSize={40}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#326CE5]">
                <SiKubernetes size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#FF9900]">
                <FaAws size={24} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#336791]">
                <SiPostgresql size={22} />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-zinc-100/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:scale-110 transition-transform cursor-pointer text-[#2496ED]">
                <SiDocker size={22} />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </section>
  );
}

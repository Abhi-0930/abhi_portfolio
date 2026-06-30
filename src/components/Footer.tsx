"use client";

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-none">
              Always shipping.
            </h3>
            <span className="text-3xl md:text-[40px] font-serif italic text-zinc-400 font-normal mt-3 block">
              Sometimes sleeping.
            </span>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:abhishek.j3094@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white text-zinc-650 hover:text-rose-500 hover:border-rose-500/50 shadow-sm transition-all duration-300"
              aria-label="Email Abhishek"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white text-zinc-650 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 shadow-sm transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://github.com/Abhi-0930/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white text-zinc-650 hover:text-black hover:border-black/50 shadow-sm transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={14} />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-zinc-100/80 w-full" />

        {/* Bottom Footer Row */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-[11px] font-semibold text-zinc-400 tracking-tight">
            © {currentYear} Abhishek Jujjuvarapu. Crafted with care.
          </p>
        </div>

      </div>
    </footer>
  );
}

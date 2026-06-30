"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "35e71a2f-cdad-4a8d-ba6b-34c079a757ed",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "Portfolio Contact Message",
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Web3Forms submission error:", result);
      }
    } catch (error) {
      console.error("Web3Forms submission network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-grid relative py-24 border-t border-zinc-100 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side (Header & Info Cards) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold font-mono mb-4 block">
                06 — CONTACT
              </span>
              <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 leading-[1.2]">
                Let's build something <span className="font-serif italic text-zinc-500 font-normal">useful.</span>
              </h2>
              <p className="mt-4 text-sm md:text-[15px] leading-[1.8] text-zinc-500 font-medium">
                Have a product idea, a security concern, or just want to chat about engineering? My inbox is open.
              </p>
            </div>

            {/* Info Cards Stack */}
            <div className="space-y-3.5">
              {/* Email Card */}
              <a
                href="mailto:abhishek.j3094@gmail.com"
                className="group flex items-center justify-between p-4 rounded-[16px] border border-zinc-200/50 bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200/40 text-zinc-700">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 block">EMAIL</span>
                    <span className="text-[13px] font-bold text-zinc-900 mt-0.5 block">abhishek.j3094@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Linkedin Card */}
              <a
                href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-[16px] border border-zinc-200/50 bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200/40 text-zinc-700">
                    <Linkedin size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 block">LINKEDIN</span>
                    <span className="text-[13px] font-bold text-zinc-900 mt-0.5 block">/in/abhishek-jujjuvarapu-556899276</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Github Card */}
              <a
                href="https://github.com/Abhi-0930/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-[16px] border border-zinc-200/50 bg-white hover:shadow-md hover:border-zinc-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200/40 text-zinc-700">
                    <Github size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 block">GITHUB</span>
                    <span className="text-[13px] font-bold text-zinc-900 mt-0.5 block">@Abhi-0930</span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer"
              >
                <Download size={13} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Side (Form Container) */}
          <div className="lg:col-span-7">
            <div className="border border-zinc-200/50 bg-white rounded-[28px] p-8 md:p-10 shadow-sm relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 uppercase block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-zinc-200/60 bg-zinc-50/10 text-sm focus:outline-none focus:border-zinc-400 text-zinc-800 placeholder-zinc-400"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 uppercase block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-zinc-200/60 bg-zinc-50/10 text-sm focus:outline-none focus:border-zinc-400 text-zinc-800 placeholder-zinc-400"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 uppercase block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Building an AI product, exploring engineering work..."
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-zinc-200/60 bg-zinc-50/10 text-sm focus:outline-none focus:border-zinc-400 text-zinc-800 placeholder-zinc-400"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-[9px] font-bold font-mono tracking-wider text-zinc-400 uppercase block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me a little about your project, timeline, and where I can help..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] border border-zinc-200/60 bg-zinc-50/10 text-sm focus:outline-none focus:border-zinc-400 text-zinc-800 placeholder-zinc-400 resize-none h-32"
                  />
                </div>

                {/* Submission Success States / Button Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-100">
                  <p className="text-[11px] font-semibold text-zinc-400 leading-relaxed max-w-sm">
                    Your details stay private and are only used to reply to your message.
                  </p>

                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    {isSubmitted && (
                      <span className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                        <CheckCircle2 size={15} />
                        <span>Sent successfully!</span>
                      </span>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-700 text-white font-bold text-xs px-6 py-3 rounded-full shadow-sm transition-colors cursor-pointer"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

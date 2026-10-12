"use client";

import React from "react";
import {
  Cpu,
  ShieldCheck,
  Cloud,
  Network,
  Bot,
  Rocket,
  GraduationCap
} from "lucide-react";

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
              Engineering resilient systems and startup products that solve real-world problems.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end space-y-4">
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
              I operate at the intersection of full-stack system architecture, cybersecurity, applied AI, and startup execution. Whether I am designing high-level and low-level (HLD/LLD) distributed architectures, hardening cloud-native DevSecOps pipelines, or shipping AI-powered web and mobile products from 0 to 1, my focus is always on turning real-world bottlenecks into scalable, maintainable businesses.
            </p>
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
              Beyond engineering production systems, I work extensively as a Technical Trainer—having mentored 5,000+ students across the US, UK, India, Netherlands, Italy, and Germany through online and offline programs in Full-Stack Development, DSA, DBMS, and System Design.
            </p>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Full-Stack (7/12) + Cyber & Cloud Stacked (5/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Full-Stack & Product Engineering Card */}
            <div
              className="lg:col-span-7 relative rounded-[24px] border border-blue-100/50 dark:border-blue-950/40 bg-gradient-to-br from-blue-50/30 via-white to-white dark:from-blue-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200/60 dark:hover:border-blue-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 dark:bg-blue-950/40 p-3 text-blue-600 dark:text-blue-400">
                  <Cpu size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  Full-Stack & Product Engineering
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Architecting production-grade web and mobile applications using Next.js, React, React Native, TypeScript, Node.js, and PostgreSQL/NeonDB—engineered for low latency, strict type safety, and end-to-end maintainability.
                </p>
              </div>
            </div>

            {/* Cyber & Cloud Stacked Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Cybersecurity & DevSecOps Card */}
              <div
                className="relative rounded-[24px] border border-rose-100/50 dark:border-rose-950/40 bg-gradient-to-br from-rose-50/30 via-white to-white dark:from-rose-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-rose-200/60 dark:hover:border-rose-800/40"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-rose-50 dark:bg-rose-950/40 p-3 text-rose-600 dark:text-rose-400">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                    Cybersecurity & DevSecOps
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                    Enforcing secure-by-design architecture across the stack using OWASP Top 10 standards, OAuth2/JWT authentication, API security, and hardened Kubernetes and cloud security pipelines.
                  </p>
                </div>
              </div>

              {/* Cloud-Native, DevOps & Observability Card */}
              <div
                className="relative rounded-[24px] border border-amber-100/50 dark:border-amber-950/40 bg-gradient-to-br from-amber-50/30 via-white to-white dark:from-amber-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-amber-200/60 dark:hover:border-amber-800/40"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-amber-50 dark:bg-amber-950/40 p-3 text-amber-600 dark:text-amber-400">
                    <Cloud size={22} />
                  </div>
                  <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                    Cloud-Native, DevOps & Observability
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                    Provisioning and orchestrating resilient infrastructure with Docker, Kubernetes, Azure/AWS, Terraform, and GitOps CI/CD workflows—backed by real-time telemetry and log monitoring via Prometheus and Grafana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: System Design (6/12) + AI & Open Source (6/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* System Design & Distributed Systems Card */}
            <div
              className="lg:col-span-6 relative rounded-[24px] border border-emerald-100/50 dark:border-emerald-950/40 bg-gradient-to-br from-emerald-50/30 via-white to-white dark:from-emerald-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-emerald-200/60 dark:hover:border-emerald-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-3 text-emerald-600 dark:text-emerald-400">
                  <Network size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  System Design & Distributed Systems
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Engineering fault-tolerant High-Level and Low-Level (HLD/LLD) architectures powered by microservices, Redis caching layers, and event-driven message brokers including Apache Kafka and RabbitMQ.
                </p>
              </div>
            </div>

            {/* AI Engineering & Open Source Card */}
            <div
              className="lg:col-span-6 relative rounded-[24px] border border-indigo-100/50 dark:border-indigo-950/40 bg-gradient-to-br from-indigo-50/30 via-white to-white dark:from-indigo-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-indigo-200/60 dark:hover:border-indigo-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-indigo-50 dark:bg-indigo-950/40 p-3 text-indigo-600 dark:text-indigo-400">
                  <Bot size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  AI Engineering & Open Source
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Building autonomous AI agents, RAG pipelines, Vector DB integrations, and Model Context Protocol (MCP) tools while contributing to community-driven software across AI, security, and full-stack ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Entrepreneurship (6/12) + Technical Training (6/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Entrepreneurship & Venture Building Card */}
            <div
              className="lg:col-span-6 relative rounded-[24px] border border-purple-100/50 dark:border-purple-950/40 bg-gradient-to-br from-purple-50/30 via-white to-white dark:from-purple-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-200/60 dark:hover:border-purple-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-purple-50 dark:bg-purple-950/40 p-3 text-purple-600 dark:text-purple-400">
                  <Rocket size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  Entrepreneurship & Venture Building
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Founded CodeLoom to turn real-world bottlenecks into scalable businesses—leading 0-to-1 startup product research, MVP architecture, technical consulting, and full-lifecycle software delivery.
                </p>
              </div>
            </div>

            {/* Technical Training & Global Mentorship Card */}
            <div
              className="lg:col-span-6 relative rounded-[24px] border border-cyan-100/50 dark:border-cyan-950/40 bg-gradient-to-br from-cyan-50/30 via-white to-white dark:from-cyan-950/10 dark:via-zinc-900 dark:to-zinc-900 p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-cyan-200/60 dark:hover:border-cyan-800/40"
            >
              <div>
                <div className="inline-flex rounded-xl bg-cyan-50 dark:bg-cyan-950/40 p-3 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap size={22} />
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-zinc-900 dark:text-zinc-50">
                  Technical Training & Global Mentorship
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium">
                  Trained 5,000+ students and engineers across the US, UK, India, Netherlands, Italy, and Germany—delivering intensive online and offline programs in DSA, Algorithms, DBMS, MERN/Next.js, and System Design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

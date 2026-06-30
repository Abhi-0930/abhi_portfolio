"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage(props: ProjectPageProps) {
  const params = use(props.params);
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-grid relative min-h-screen py-16 px-6 bg-zinc-50/20">
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* Visual Banner */}
        <div className="h-64 md:h-96 w-full relative overflow-hidden rounded-[32px] border border-zinc-200/50 shadow-md mb-12">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            project.illustration
          )}
          <span className="absolute bottom-6 left-8 text-[10px] font-bold tracking-wider bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-zinc-800 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Dynamic 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main info (Left Column) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none">
                {project.title}
              </h1>
              <span className="text-sm md:text-base font-serif italic text-zinc-400 mt-3 block">
                {project.subtitle}
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-[10px] font-bold font-mono tracking-wider text-zinc-400 uppercase">
                Project Overview
              </h4>
              <p className="text-sm md:text-[15px] leading-relaxed text-zinc-650 font-medium">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold font-mono tracking-wider text-zinc-400 uppercase">
                Key Highlights & Impact
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 font-medium leading-relaxed">
                    <Sparkles size={16} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Cards (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Card */}
            <div className="border border-zinc-200/50 bg-white rounded-[24px] p-6 shadow-sm space-y-4">
              <h4 className="text-[10px] font-bold font-mono tracking-wider text-zinc-400 uppercase">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full border border-zinc-200/40 bg-zinc-50/20 text-[10px] font-semibold text-zinc-500 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links Card */}
            <div className="border border-zinc-200/50 bg-white rounded-[24px] p-6 shadow-sm">
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-950 font-bold text-xs gap-1.5 transition-colors cursor-pointer"
              >
                <Github size={14} />
                <span>Source Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

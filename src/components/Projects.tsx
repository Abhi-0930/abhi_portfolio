"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleExpanded = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section id="projects" className="bg-grid relative py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              04 — SELECTED WORK
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              Selected projects. Built for real users.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end items-start md:items-end md:text-right">
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium max-w-md">
              A curated selection of work — shipping software that holds up under traffic, scrutiny, and time.
            </p>
            <a
              href="https://github.com/Abhi-0930"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              <Github size={13} />
              <span>View more on GitHub</span>
              <ArrowRight size={12} className="ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = !!expandedProjects[project.id];
            return (
              <div
                key={project.title}
                className="group relative flex flex-col justify-between rounded-[24px] border border-zinc-200/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                {/* Wrap top/body clickable area in Link */}
                <Link href={`/projects/${project.id}`} className="flex-1 flex flex-col justify-between cursor-pointer">
                  {/* Visual Header / Custom Illustration */}
                  <div className="h-56 w-full relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      project.illustration
                    )}
                    {/* Category overlay */}
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 dark:border-zinc-800/40 text-zinc-800 dark:text-zinc-200 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 leading-none">
                            {project.title}
                          </h3>
                          <span className="text-xs font-serif italic text-zinc-400 dark:text-zinc-500 mt-2 block">
                            {project.subtitle}
                          </span>
                        </div>
                        
                        {/* Circle button */}
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">
                          <ArrowRight size={14} className="-rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      <p className="mt-4 text-[13px] leading-[1.7] text-zinc-500 dark:text-zinc-400 font-medium line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Badges with Expandable Button */}
                      <div className="mt-6 flex flex-wrap gap-2 items-center">
                        {(isExpanded ? project.tech : project.tech.slice(0, 6)).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-800/10 text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 6 && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleExpanded(project.id);
                            }}
                            className="px-2.5 py-1 text-[9px] font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 normal-case tracking-tight cursor-pointer transition-colors border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 rounded-full bg-white dark:bg-zinc-900 relative z-25"
                          >
                            {isExpanded ? "Show Less" : `+${project.tech.length - 6} More`}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Source Code link (not wrapping in page link to avoid double navigations) */}
                <div className="px-8 pb-8 flex items-center gap-4">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer relative z-10"
                  >
                    <Github size={13} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

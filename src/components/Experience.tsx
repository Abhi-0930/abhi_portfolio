"use client";

import React from "react";

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
    company: "Preppath · Remote",
    period: "SEP 2026 — PRESENT",
    description: "Building an engineering learning platform helping students develop practical skills and industry-ready expertise through structured project-based curriculums, technical mentorship, hands-on workshops, and collaborative community initiatives.",
    pills: ["EdTech", "System Architecture", "Curriculum Design", "Mentorship", "Community Building"],
  },
  {
    role: "Founder & Principal Engineer",
    company: "CodeLoom · Hybrid (Hyderabad, India)",
    period: "FEB 2024 — PRESENT",
    description: "Leading end-to-end product development for startups and businesses from concept to production. Architecting scalable, secure web, mobile, and automation solutions with a relentless focus on performance, reliability, and system design.",
    pills: ["Next.js", "Node.js", "PostgreSQL", "System Architecture", "DevSecOps", "AWS", "Automation", "Code Review"],
  },
  {
    role: "Technical Trainer & Mentor",
    company: "Freelance · Remote",
    period: "FEB 2023 — PRESENT",
    description: "Trained and mentored 5,000+ students and aspiring engineers across the US, UK, India, and Europe through intensive workshops and bootcamps in Data Structures & Algorithms, Full-Stack Development, DBMS, and System Design.",
    pills: ["Data Structures & Algorithms", "System Design", "MERN Stack", "DBMS", "Technical Interview Prep", "Mentoring"],
  },
  {
    role: "Project Mentor & Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC) · Remote",
    period: "JUN 2022 — MAR 2023",
    description: "Mentored contributors on Git workflows, pull requests, and software engineering best practices. Actively contributed to open-source codebases spanning web development, cybersecurity, AI, and RESTful APIs with distributed teams.",
    pills: ["Open Source", "Code Review", "Git & GitHub", "REST APIs", "Cybersecurity", "Mentorship"],
  },
  {
    role: "Design Team Lead",
    company: "Coding Cubs · On-site",
    period: "AUG 2020 — JAN 2022",
    description: "Promoted from Team Member to Team Lead. Directed cross-functional workflows, coordinated multidisciplinary project deliverables, and mentored members to deliver polished technical and creative solutions.",
    pills: ["Team Leadership", "UI/UX Design", "Project Management", "Mentorship", "Workflow Optimization"],
  },
  {
    role: "Web Developer Intern",
    company: "Prodigy InfoTech · Remote",
    period: "SEP 2021 — OCT 2021",
    description: "Engineered responsive, accessible web interfaces and reusable UI components following industry-standard frontend practices, optimizing cross-device compatibility and page load performance.",
    pills: ["Frontend Development", "JavaScript", "Responsive Design", "HTML5 & CSS3", "Component Design"],
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

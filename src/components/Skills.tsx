"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiKubernetes,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpress,
  SiFastify,
  SiGraphql,
  SiMongodb,
  SiPrisma,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiGit,
  SiGithub,
  SiLinux,
  SiOpenai,
  SiSupabase,
  SiSqlite,
  SiTerraform,
  SiApachekafka,
  SiKalilinux,
  SiApachejmeter
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  Database,
  Key,
  Activity,
  Globe,
  Network,
  Code,
  Bot,
  Plug,
  Shield,
  Search,
  Lock,
  Scale,
  Cpu,
  Server,
  Layers,
  Terminal,
  FileCode,
  Briefcase,
  Rocket,
  LineChart,
  CheckSquare,
  Users,
  Handshake
} from "lucide-react";

const categories = [
  { id: "languages", name: "Programming Languages", index: "01" },
  { id: "frontend", name: "Frontend Development", index: "02" },
  { id: "backend", name: "Backend Development", index: "03" },
  { id: "databases", name: "Databases", index: "04" },
  { id: "cloud", name: "Cloud & DevOps", index: "05" },
  { id: "aws", name: "AWS Services", index: "06" },
  { id: "design", name: "System Design & Architecture", index: "07" },
  { id: "ai", name: "AI & Modern Development", index: "08" },
  { id: "security", name: "Security", index: "09" },
  { id: "testing", name: "Testing & Monitoring", index: "10" },
  { id: "tools", name: "Developer Tools", index: "11" },
  { id: "cs", name: "Computer Science Fundamentals", index: "12" },
  { id: "biz", name: "Professional Competencies", index: "13" },
];

const skills = [
  // Programming Languages
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "C++", category: "languages" },

  // Frontend Development
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend Development
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Fastify", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },

  // Databases
  { name: "MongoDB", category: "databases" },
  { name: "PostgreSQL", category: "databases" },
  { name: "Prisma ORM", category: "databases" },
  { name: "Supabase", category: "databases" },
  { name: "SQLite", category: "databases" },

  // Cloud & DevOps
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "Terraform", category: "cloud" },
  { name: "Jenkins", category: "cloud" },
  { name: "Kafka", category: "cloud" },

  // AWS Services
  { name: "EC2", category: "aws" },
  { name: "S3", category: "aws" },
  { name: "EKS", category: "aws" },
  { name: "ECR", category: "aws" },
  { name: "RDS", category: "aws" },
  { name: "ElastiCache", category: "aws" },
  { name: "IAM", category: "aws" },
  { name: "CloudWatch", category: "aws" },
  { name: "CloudFront", category: "aws" },
  { name: "SQS", category: "aws" },
  { name: "SNS", category: "aws" },
  { name: "SES", category: "aws" },
  { name: "Fargate", category: "aws" },

  // System Design & Architecture
  { name: "System Design", category: "design" },
  { name: "System Architecture", category: "design" },
  { name: "HLD", category: "design" },
  { name: "LLD", category: "design" },
  { name: "Scalable Distributed Systems", category: "design" },

  // AI & Modern Development
  { name: "LLM Integrations", category: "ai" },
  { name: "AI-Powered Applications", category: "ai" },
  { name: "Web Scraping", category: "ai" },
  { name: "Data Extraction", category: "ai" },
  { name: "API Integrations", category: "ai" },

  // Security
  { name: "Web Application Security", category: "security" },
  { name: "Network Security", category: "security" },
  { name: "Penetration Testing", category: "security" },
  { name: "Vulnerability Assessment", category: "security" },
  { name: "Secure Software Development", category: "security" },
  { name: "Kali Linux", category: "security" },

  // Testing & Monitoring
  { name: "JMeter", category: "testing" },
  { name: "Prometheus", category: "testing" },
  { name: "Grafana", category: "testing" },

  // Developer Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Linux", category: "tools" },

  // Computer Science Fundamentals
  { name: "Data Structures & Algorithms", category: "cs" },
  { name: "Operating Systems", category: "cs" },
  { name: "Computer Networks", category: "cs" },
  { name: "DBMS", category: "cs" },
  { name: "Object-Oriented Programming", category: "cs" },

  // Professional Competencies
  { name: "Product Development", category: "biz" },
  { name: "Business Analysis", category: "biz" },
  { name: "Project Management", category: "biz" },
  { name: "Technical Mentoring", category: "biz" },
  { name: "Entrepreneurship", category: "biz" },
  { name: "Client & Stakeholder Management", category: "biz" },
];

const HexagonIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    className="w-[10px] h-[10px] fill-zinc-400 mr-1.5 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon points="12,2 22,7.5 22,18.5 12,24 2,18.5 2,7.5" />
  </svg>
);

const skillIconMap: Record<string, React.ComponentType<any>> = {
  // Programming Languages
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "C++": SiCplusplus,
  
  // Frontend Development
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Tailwind CSS": SiTailwindcss,

  // Backend Development
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Fastify": SiFastify,
  "REST APIs": Plug,
  "GraphQL": SiGraphql,

  // Databases
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Prisma ORM": SiPrisma,
  "Supabase": SiSupabase,
  "SQLite": SiSqlite,

  // Cloud & DevOps
  "AWS": FaAws,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Jenkins": SiJenkins,
  "Kafka": SiApachekafka,

  // AWS Services
  "EC2": FaAws,
  "S3": FaAws,
  "EKS": SiKubernetes,
  "ECR": FaAws,
  "RDS": Database,
  "ElastiCache": Database,
  "IAM": Key,
  "CloudWatch": Activity,
  "CloudFront": Globe,
  "SQS": Plug,
  "SNS": Plug,
  "SES": Plug,
  "Fargate": Server,

  // System Design
  "System Design": Network,
  "System Architecture": Network,
  "HLD": Network,
  "LLD": Code,
  "Scalable Distributed Systems": Network,

  // AI & Modern Development
  "LLM Integrations": SiOpenai,
  "AI-Powered Applications": Cpu,
  "Web Scraping": Search,
  "Data Extraction": Database,
  "API Integrations": Plug,

  // Security
  "Web Application Security": Shield,
  "Network Security": Shield,
  "Penetration Testing": Search,
  "Vulnerability Assessment": Search,
  "Secure Software Development": Lock,
  "Kali Linux": SiKalilinux,

  // Testing & Monitoring
  "JMeter": SiApachejmeter,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,

  // Developer Tools
  "Git": SiGit,
  "GitHub": SiGithub,
  "VS Code": VscCode,
  "Linux": SiLinux,

  // Computer Science Fundamentals
  "Data Structures & Algorithms": Layers,
  "Operating Systems": Terminal,
  "Computer Networks": Network,
  "DBMS": Database,
  "Object-Oriented Programming": FileCode,

  // Professional Competencies
  "Product Development": Rocket,
  "Business Analysis": LineChart,
  "Project Management": CheckSquare,
  "Technical Mentoring": Users,
  "Entrepreneurship": Briefcase,
  "Client & Stakeholder Management": Handshake,
};

// Custom color mapping for individual skill icons to match brand colors
const skillColorMap: Record<string, string> = {
  "Python": "text-[#3776AB]",
  "JavaScript": "text-[#F7DF1E]",
  "TypeScript": "text-[#3178C6]",
  "C++": "text-[#00599C]",
  "React.js": "text-[#61DAFB]",
  "Next.js": "text-[#000000] dark:text-white",
  "React Native": "text-[#61DAFB]",
  "HTML5": "text-[#E34F26]",
  "CSS3": "text-[#1572B6]",
  "Tailwind CSS": "text-[#06B6D4]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-[#000000] dark:text-zinc-300",
  "Fastify": "text-[#000000] dark:text-zinc-300",
  "GraphQL": "text-[#E10098]",
  "MongoDB": "text-[#47A248]",
  "PostgreSQL": "text-[#336791]",
  "Prisma ORM": "text-[#2D3748] dark:text-zinc-200",
  "Supabase": "text-[#3ECF8E]",
  "SQLite": "text-[#003B57]",
  "AWS": "text-[#FF9900]",
  "Docker": "text-[#2496ED]",
  "Kubernetes": "text-[#326CE5]",
  "Terraform": "text-[#844FBA]",
  "Jenkins": "text-[#D24939]",
  "Kafka": "text-[#231F20] dark:text-zinc-300",
  "EC2": "text-[#FF9900]",
  "S3": "text-[#FF9900]",
  "EKS": "text-[#326CE5]",
  "ECR": "text-[#FF9900]",
  "RDS": "text-[#FF9900]",
  "ElastiCache": "text-[#FF9900]",
  "Prometheus": "text-[#E6522C]",
  "Grafana": "text-[#F46800]",
  "Git": "text-[#F05032]",
  "GitHub": "text-[#181717] dark:text-white",
  "VS Code": "text-[#007ACC]",
  "Linux": "text-[#FCC624]",
  "LLM Integrations": "text-[#74AA9C]",
  "Kali Linux": "text-[#557C94]",
  "System Design": "text-[#3B82F6]",
  "HLD": "text-[#8B5CF6]",
  "LLD": "text-[#10B981]",
  "Scalable Distributed Systems": "text-[#06B6D4]",
  "Web Application Security": "text-[#EF4444]",
  "Vulnerability Assessment": "text-[#F59E0B]",
  "Secure Software Development": "text-[#6366F1]",
  
  // AI & Modern Development
  "AI-Powered Applications": "text-[#A855F7]",
  "Web Scraping": "text-[#3B82F6]",
  "Data Extraction": "text-[#6366F1]",
  "API Integrations": "text-[#10B981]",

  // Computer Science Fundamentals
  "Data Structures & Algorithms": "text-[#F59E0B]",
  "Operating Systems": "text-[#64748B]",
  "Computer Networks": "text-[#0EA5E9]",
  "DBMS": "text-[#14B8A6]",
  "Object-Oriented Programming": "text-[#F43F5E]",

  // Professional Competencies
  "Product Development": "text-[#EC4899]",
  "Business Analysis": "text-[#8B5CF6]",
  "Project Management": "text-[#06B6D4]",
  "Technical Mentoring": "text-[#F97316]",
  "Entrepreneurship": "text-[#D97706]",
  "Client & Stakeholder Management": "text-[#EAB308]"
};

export default function Skills() {
  return (
    <section id="skills" className="bg-grid relative py-24 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold font-mono mb-4">
              02 — TECHNICAL SKILLS
            </span>
            <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.2]">
              The toolkit, organized.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm md:text-[15px] leading-[1.8] text-zinc-500 dark:text-zinc-400 font-medium">
              A practical, ever-evolving technology stack built around scalability, security, developer experience, and production-ready software engineering.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const catSkills = skills.filter((s) => s.category === cat.id);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-[24px] border border-zinc-200/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900/60 p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-550 font-bold font-mono tracking-tight">
                      {cat.index}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => {
                      const Icon = skillIconMap[skill.name] || HexagonIcon;
                      const iconColor = skillColorMap[skill.name] || "text-zinc-500 dark:text-zinc-400";
                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-50/20 dark:bg-zinc-800/10 text-[11px] font-semibold text-zinc-650 dark:text-zinc-300 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-zinc-300/80 dark:hover:border-zinc-700 transition-colors"
                        >
                          <Icon size={12} className={`mr-1.5 flex-shrink-0 ${iconColor}`} />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

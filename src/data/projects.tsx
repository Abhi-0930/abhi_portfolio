import React from "react";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  liveLink: string;
  gitLink: string;
  category: string;
  highlights: string[];
  illustration: React.ReactNode;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "preppath",
    title: "PrepPath",
    image: "/mock_interview .png",
    subtitle: "Engineering Readiness & Learning Platform",
    description: "A comprehensive technical education and career-readiness platform built to help students bridge the gap between academic theory and industry-grade software engineering. The system features structured learning roadmaps across DSA, Full-Stack Development, and System Design, alongside hands-on project tracks, technical handbooks, and mentorship workflows.",
    tech: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "NeonDB",
      "Prisma",
      "Redis",
      "Docker",
      "JWT",
      "System Design",
      "HLD / LLD"
    ],
    liveLink: "https://www.preppath.net",
    gitLink: "https://github.com/Abhi-0930/preppath.git",
    category: "EdTech • Product Architecture • Full-Stack Development",
    highlights: [
      "Architected 6+ structured engineering roadmaps covering DSA, Full-Stack Web, DBMS, and System Design (HLD/LLD).",
      "Published comprehensive technical handbooks and interactive modules built from mentoring 5,000+ students globally.",
      "Implemented role-based student and mentor dashboards with progress tracking, project submissions, and code review workflows.",
      "Optimized content delivery and roadmap state management using Next.js SSR and Redis caching for low-latency performance."
    ],
    illustration: (
      <div className="absolute inset-0 bg-gradient-to-b from-[#6A11CB] to-[#2575FC] overflow-hidden flex items-center justify-center">
        {/* Avatar Card 1 */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full border-4 border-white/20 bg-gradient-to-tr from-[#FF0844] to-[#FFB199] absolute top-[25%] left-[20%] shadow-xl flex items-center justify-center overflow-hidden"
        >
          <div className="w-10 h-10 rounded-full bg-white/30" />
        </motion.div>
        
        {/* Avatar Card 2 */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full border-4 border-white/20 bg-gradient-to-tr from-[#30CFD0] to-[#330867] absolute top-[30%] right-[15%] shadow-xl flex items-center justify-center overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-white/20" />
        </motion.div>

        {/* Learning bubble */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md absolute top-[18%] right-[42%] flex items-center justify-center"
        >
          <div className="w-4 h-2.5 rounded-sm bg-white/50" />
        </motion.div>
      </div>
    ),
  },
  {
    id: "codeloom-crm",
    title: "CodeLoom CRM",
    image: "/codeloom_crm.png",
    subtitle: "Business Operations & Client Management",
    description: "A centralized business management and CRM platform designed for agencies and service-based organizations to streamline client management, project tracking, invoicing, support ticketing, and team collaboration. Engineered with 3 role-based portals, 35+ secure REST APIs, and Redis-backed background queues for workflow automation, scalability, and observability.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Prometheus",
      "Grafana",
      "JWT",
      "System Design",
      "HLD",
      "LLD"
    ],
    liveLink: "https://codeloom.in",
    gitLink: "https://github.com/Abhi-0930/codeloom-crm.git",
    category: "SaaS • CRM • System Architecture",
    highlights: [
      "Architected 10+ modular business domains covering client onboarding, invoicing, support tickets, and team rosters.",
      "Implemented 3 isolated role-based portals (Client, Team Member, and Admin) secured via granular JWT authentication.",
      "Designed, documented, and hardened 35+ production REST APIs backed by PostgreSQL and MongoDB persistence.",
      "Automated 25+ system, billing, and email notification workflows using Redis-backed asynchronous job queues."
    ],
    illustration: (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2027] via-[#203A43] to-[#2C5364] overflow-hidden flex items-center justify-center">
        {/* Tech Grid UI Element */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[180px] h-[100px] border border-cyan-500/20 bg-cyan-950/10 rounded-lg p-3 flex flex-col justify-between top-[25%] left-[15%] backdrop-blur-[2px]"
        >
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-8 h-1.5 rounded-full bg-cyan-500/30 mt-0.5" />
          </div>
          <div className="space-y-1">
            <div className="w-full h-2 rounded bg-cyan-500/20" />
            <div className="w-4/5 h-2 rounded bg-cyan-500/20" />
            <div className="w-3/5 h-2 rounded bg-cyan-500/20" />
          </div>
        </motion.div>
        
        {/* Glowing lock/shield */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-20 border-[3px] border-cyan-400 bg-cyan-950/40 rounded-xl absolute top-[30%] right-[20%] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "arihs-tour",
    title: "Arihs Tour",
    image: "/arihstour.png",
    subtitle: "Multi-Provider Travel Aggregation Engine",
    description: "A travel metasearch and aggregation platform engineered to unify real-time flight, hotel, and bus inventory across global providers like Skyscanner, Booking.com, and MakeMyTrip. The system features multi-provider API normalization, outbound affiliate conversion tracking, automated Razorpay payouts, and an administrative telemetry dashboard for user and booking metrics.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Razorpay",
      "TailwindCSS",
      "REST APIs",
      "System Design",
      "HLD/LLD"
    ],
    liveLink: "https://www.travel.arihstour.com",
    gitLink: "https://github.com/Abhi-0930/arihstour.git",
    category: "TravelTech • Metasearch Aggregator • Real-Time Systems",
    highlights: [
      "Engineered a unified travel metasearch engine integrating Skyscanner, Booking.com, and MakeMyTrip.",
      "Normalized diverse multi-provider API response schemas into a high-performance unified data format.",
      "Built outbound affiliate redirect tracking and automated payout settlement via Razorpay.",
      "Developed an administrative telemetry dashboard for real-time booking trends and operational analytics."
    ],
    illustration: (
      <div className="absolute inset-0 bg-gradient-to-b from-[#232526] to-[#414345] overflow-hidden flex items-center justify-center">
        {/* Floating dark 3D cube 1 */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [25, 28, 25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-[#1F2937]/90 border border-zinc-700/60 absolute top-[28%] left-[46%] rounded-xl shadow-2xl flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded bg-amber-400/20" />
        </motion.div>
        {/* Floating dark 3D cube 2 */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [-15, -12, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-[#111827]/90 border border-zinc-800/80 absolute top-[38%] left-[28%] rounded-2xl shadow-2xl flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded bg-rose-400/20" />
        </motion.div>
        {/* Glowing sphere 1 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 rounded-full bg-[#E0FE00] shadow-[0_0_15px_#E0FE00] absolute top-[25%] left-[60%]"
        />
        {/* Glowing sphere 2 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-3.5 h-3.5 rounded-full bg-[#E0FE00] shadow-[0_0_15px_#E0FE00] absolute bottom-[32%] left-[23%]"
        />
      </div>
    ),
  },
  {
    id: "empathy-ai",
    title: "Empathy AI",
    image: "/empathy_ai.png",
    subtitle: "Multimodal Mental Health Assistant",
    description: "An AI-powered multimodal mental health platform that analyzes text, voice (via PyDub), and live video frames (captured every 2 seconds) through LangChain to detect user sentiment and emotional criticality. Delivers personalized coping therapies, Wikipedia and clinical report insights, tracked mind-relaxation exercises, and geolocation-based hospital discovery with direct one-click calling.",
    tech: [
      "React.js",
      "Node.js",
      "Python",
      "Flask",
      "LangChain",
      "MongoDB",
      "DeepFace",
      "DistilBERT",
      "PyDub",
      "Docker",
      "JWT",
      "Prometheus",
      "Grafana"
    ],
    liveLink: "https://demo.codeloom.in/empathy-ai",
    gitLink: "https://github.com/Abhi-0930/empathy-ai.git",
    category: "AI • Healthcare • Multimodal Systems",
    highlights: [
      "Integrated multimodal emotion detection across text, voice, and facial expression inputs.",
      "Engineered LangChain agent pipelines with PyDub audio analysis and real-time video processing.",
      "Built geolocation hospital discovery with one-click direct emergency calling.",
      "Reduced application response latency by 35% through custom caching configurations."
    ],
    illustration: (
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A5298] to-[#1E3C72] overflow-hidden flex items-center justify-center">
        {/* Soft pink sphere on top left */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FA709A] to-[#FEE140] absolute top-[15%] left-[25%] filter drop-shadow-xl"
        />
        {/* Yellow sphere on bottom left */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 rounded-full bg-gradient-to-b from-[#FAD961] to-[#F76B1C] absolute bottom-[-15%] left-[15%] filter drop-shadow-2xl"
        />
        {/* Pink diagonal cylinder */}
        <motion.div
          animate={{ rotate: [-25, -23, -25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-8 rounded-full bg-gradient-to-r from-[#FBC2EB] to-[#A6C1EE] absolute top-[20%] right-[-10%] origin-center filter drop-shadow-xl"
        />
        {/* Orange torus ring */}
        <motion.div
          animate={{ rotate: [15, 25, 15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full border-[8px] border-[#F5A623]/80 absolute top-[45%] right-[22%] filter drop-shadow-lg"
        />
      </div>
    ),
  },
];

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
    id: "empathy-ai",
    title: "Empathy AI",
    image: "/empathy_ai.png",
    subtitle: "Multimodal Mental Health Assistant",
    description: "An AI-powered multimodal mental health platform that analyzes text, voice, and facial expressions to understand user emotions and provide personalized therapy recommendations. The system integrates machine learning models, conversational AI, secure authentication, and real-time analytics to deliver an intelligent and privacy-focused mental wellness experience.",
    tech: ["React.js", "Node.js", "Express.js", "Python", "Flask", "MongoDB", "DeepFace", "DistilBERT", "LangChain", "Docker", "JWT", "Prometheus", "Grafana"],
    liveLink: "https://demo.codeloom.in/empathy-ai",
    gitLink: "https://github.com/Abhi-0930/empathy-ai.git",
    category: "AI • Healthcare • Full-Stack Development",
    highlights: [
      "Designed and delivered 15+ modular frontend and backend software features.",
      "Developed 20+ secure REST APIs with token validation and custom access controls.",
      "Achieved 95% emotion classification accuracy using deep learning ensembles.",
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
  {
    id: "bitebuzz",
    title: "BiteBuzz",
    image: "/malnadu_kitchen .png",
    subtitle: "Food Delivery Management Platform",
    description: "A full-stack food delivery platform built for real-world business operations, featuring customer and admin dashboards, real-time order tracking, secure payment processing, and scalable backend services. The application focuses on seamless user experiences, operational efficiency, and high-performance system design.",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "WebSockets", "Razorpay", "JWT", "JMeter", "System Design", "HLD", "LLD"],
    liveLink: "https://demo.codeloom.in/bitebuzz",
    gitLink: "https://github.com/Abhi-0930/bite-buzz.git",
    category: "Full-Stack Development • Real-Time Systems • Client Project",
    highlights: [
      "Engineered 2 dedicated control dashboards with real-time operational metrics.",
      "Delivered 15+ functional application components spanning checkout to support.",
      "Created and load-tested 30+ highly concurrent REST API endpoints.",
      "Orchestrated 25+ business workflows utilizing WebSockets for real-time tracking."
    ],
    illustration: (
      <div className="absolute inset-0 bg-gradient-to-b from-[#232526] to-[#414345] overflow-hidden flex items-center justify-center">
        {/* Floating dark 3D cube 1 */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [25, 28, 25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-[#1F2937]/90 border border-zinc-700/60 absolute top-[28%] left-[46%] rounded-xl shadow-2xl flex items-center justify-center"
        />
        {/* Floating dark 3D cube 2 */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [-15, -12, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-[#111827]/90 border border-zinc-800/80 absolute top-[38%] left-[28%] rounded-2xl shadow-2xl flex items-center justify-center"
        />
        {/* Glowing yellow sphere 1 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 rounded-full bg-[#E0FE00] shadow-[0_0_15px_#E0FE00] absolute top-[25%] left-[60%]"
        />
        {/* Glowing yellow sphere 2 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-3.5 h-3.5 rounded-full bg-[#E0FE00] shadow-[0_0_15px_#E0FE00] absolute bottom-[32%] left-[23%]"
        />
      </div>
    ),
  },
  {
    id: "codeloom-crm",
    title: "CodeLoom CRM",
    image: "/codeloom_crm.png",
    subtitle: "Business Operations & Client Management",
    description: "A centralized business management and CRM platform designed for agencies and service-based organizations to streamline client management, project tracking, invoicing, support systems, and team collaboration. The platform emphasizes workflow automation, scalability, and secure business operations.",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Prometheus", "Grafana", "JWT", "System Design", "HLD", "LLD"],
    liveLink: "https://demo.codeloom.in/crm",
    gitLink: "https://github.com/Abhi-0930/codeloom-crm.git",
    category: "SaaS • CRM • Product Development",
    highlights: [
      "Configured 10+ business modules including invoicing, tickets, and team rosters.",
      "Implemented 3 separate role-based portals for clients, members, and administrators.",
      "Developed and documented 35+ fully secure client management REST APIs.",
      "Automated 25+ system and mail workflows via background queue pipelines."
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
    id: "mock-interview-platform",
    title: "Mock Interview Platform",
    image: "/mock_interview .png",
    subtitle: "AI-Powered Interview Marketplace",
    description: "A full-stack interview preparation platform that connects candidates with industry professionals for personalized mock interviews. The system includes scheduling, payments, role-based dashboards, feedback reports, and administrative tools to provide a complete interview management experience.",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Razorpay", "JWT", "System Design", "HLD", "LLD"],
    liveLink: "https://demo.codeloom.in/interviews",
    gitLink: "https://github.com/Abhi-0930/mockpro",
    category: "EdTech • Marketplace • Full-Stack Development",
    highlights: [
      "Engineered 3 user dashboards custom-tailored for candidates, interviewers, and admins.",
      "Delivered 15+ functional application components spanning scheduling to payments.",
      "Developed 30+ highly secure REST APIs for slot booking and dynamic report generation.",
      "Reduced candidate coordination overhead by 80% through automated notifications."
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

        {/* Video Call speech bubbles */}
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
];

"use client";

import React from "react";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-10">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

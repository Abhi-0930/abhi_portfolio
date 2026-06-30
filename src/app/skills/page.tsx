"use client";

import React from "react";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-10">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

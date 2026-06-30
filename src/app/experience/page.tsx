"use client";

import React from "react";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-10">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

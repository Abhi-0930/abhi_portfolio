"use client";

import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-10">
        <About />
      </main>
      <Footer />
    </div>
  );
}

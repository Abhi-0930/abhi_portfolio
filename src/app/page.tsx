"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* About Domain */}
        <About />

        {/* Technical Expertise */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Featured Projects */}
        <Projects />

        {/* Leadership & Mentorship */}
        <Leadership />

        {/* Get in Touch */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import Header from "@/components/Header";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-10">
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}

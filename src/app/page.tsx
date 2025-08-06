// src/app/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/client/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/client/ContactForm";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {activeTab === "home" && <Hero />}
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "portfolio" && <Portfolio />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "testimonials" && <Testimonials />}
        {activeTab === "contact" && <ContactForm />}
      </main>
    </div>
  );
}

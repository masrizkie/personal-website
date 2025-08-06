// src/components/sections/Portfolio.tsx
import React from "react";

interface Project {
  title: string;
  description: string;
  tech: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce site with cart, payments, and admin dashboard.",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Social Media App",
    description: "A real-time chat and posting platform with user authentication.",
    tech: "Next.js, Firebase, Tailwind CSS",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    tech: "Next.js, TypeScript, Tailwind CSS",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-16 bg-gray-300 min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-2">{p.description}</p>
            <span className="text-sm font-medium text-pink-400">{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/sections/Testimonials.tsx
import React from "react";

interface Testimonial {
  author: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Jane Doe",
    role: "Product Manager, Acme Corp",
    quote:
      "Rizkie consistently delivered high-quality code and collaborated effectively with cross-functional teams.",
  },
  {
    author: "John Smith",
    role: "CEO, Startup X",
    quote:
      "His attention to detail and problem-solving skills helped us launch our MVP ahead of schedule.",
  },
  {
    author: "Sarah Connor",
    role: "CTO, FutureTech",
    quote:
      "Rizkie’s innovative approach to frontend challenges saved us countless development hours.",
  },
  {
    author: "Michael Lee",
    role: "Lead Developer, CodeWave",
    quote:
      "Working with Rizkie was a pleasure; his clean code and proactive mindset improved our overall workflow.",
  },
  {
    author: "Anna White",
    role: "UX Designer, PixelCraft",
    quote:
      "He understands design principles well, making integration between UI and UX seamless.",
  },
  {
    author: "David Brown",
    role: "Backend Engineer, CloudNet",
    quote:
      "Rizkie’s knowledge of full-stack development bridges the gap between frontend and backend effortlessly.",
  },
  {
    author: "Emily Johnson",
    role: "Project Manager, DevHouse",
    quote:
      "His ability to work under tight deadlines without sacrificing quality is exceptional.",
  },
  {
    author: "Chris Martin",
    role: "Freelance Consultant",
    quote:
      "Rizkie brings not only technical skills but also a great team spirit, making projects enjoyable and productive.",
  },
  {
    author: "Laura Stevens",
    role: "Tech Lead, InnovateHub",
    quote:
      "He implemented scalable solutions that significantly enhanced our application's performance.",
  },
  {
    author: "Kevin Parker",
    role: "Software Architect, BuildRight",
    quote:
      "Rizkie’s code reviews were insightful and helped elevate the coding standards of our entire team.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-16 bg-gray-300 min-h-screen text-gray-800"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="border-l-4 border-yellow-500 pl-4 italic"
          >
            “{t.quote}”
            <footer className="mt-2 font-semibold text-gray-700">
              – {t.author}, <span className="text-sm">{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

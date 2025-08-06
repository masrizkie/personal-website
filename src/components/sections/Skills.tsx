// src/components/sections/Skills.tsx
import React from "react";

export default function Skills() {
  const skills = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & MySQL",
  ];

  return (
    <section id="skills" className="px-6 py-16 bg-gray-300 min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <ul className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center space-x-2 p-4 border border-gray-200 rounded shadow-sm"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

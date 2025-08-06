// src/components/sections/About.tsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 bg-gray-300 min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto mb-6">
        Hi, I'm Rizkie Arief, a passionate full-stack web developer with experience building modern web
        applications using JavaScript, React, Node.js, and more. I love turning ideas into reality
        and continuously learning new technologies.
      </p>
      <ul className="list-inside list-disc space-y-2 marker:text-orange-500 max-w-xl mx-auto">
        <li>JavaScript (ES6+)</li>
        <li>React & Next.js</li>
        <li>Node.js & Express</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </section>
  );
}

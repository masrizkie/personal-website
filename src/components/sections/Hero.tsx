// src/components/sections/Hero.tsx
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-300 text-gray-600"
    >
      <Image
        src="/HomePage/foto-cakep.jpg"
        alt="Foto Rizkie Arief"
        width={160}
        height={160}
        className="rounded-full border-4 border-gray-500 mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-2">Rizkie Arief</h1>
      <p className="text-2xl mb-4">Full-Stack Web Developer</p>
      <p className="max-w-2xl mb-6">
        Building scalable and high-performance web solutions for your business needs.
      </p>
      {/* About Me button removed */}
    </section>
  );
}

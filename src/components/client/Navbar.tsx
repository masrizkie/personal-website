"use client";
import React from "react";

type Tab = {
  id: string;
  label: string;
};

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs: Tab[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-screen bg-[#1FBBA6]  shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-4 py-2">
        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded transition ${
                activeTab === tab.id
                  ? "bg-orange-500 hover:bg-orange-600 text-white font-bold"
                  : "text-gray-600 font-bold hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

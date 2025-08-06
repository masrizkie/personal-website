// src/components/client/ContactForm.tsx
"use client";

import React, { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${name}! Your message has been received.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="w-screen bg-gray-300 min-h-screen py-16">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 bg-gray-300 text-gray-800 rounded focus:outline-none focus:border-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-200 bg-gray-300 text-gray-800 rounded focus:outline-none focus:border-gray-400"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-200 bg-gray-300 text-gray-800 rounded focus:outline-none focus:border-gray-400"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600  text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

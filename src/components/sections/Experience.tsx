// src/components/sections/Experience.tsx
import React from "react";

interface Job {
  role: string;
  company: string;
  period: string;
  details: string;
}

const experiences: Job[] = [
  {
    role: "Full-Stack Developer",
    company: "Acme Corp",
    period: "2021 – Present",
    details:
      "Built and maintained web applications with React, Node.js, and AWS. Led front-end team in implementing new UI/UX designs.",
  },
  {
    role: "Junior Developer",
    company: "Tech Solutions",
    period: "2019 – 2021",
    details:
      "Assisted in developing REST APIs, wrote unit tests, and collaborated closely with designers to improve application performance.",
  },
  {
    role: "Frontend Developer",
    company: "PixelSoft",
    period: "2018 – 2019",
    details:
      "Developed responsive web pages using React and Tailwind CSS. Optimized UI for better user engagement.",
  },
  {
    role: "Backend Developer Intern",
    company: "CloudWorks",
    period: "2017 – 2018",
    details:
      "Worked with the backend team to create and maintain microservices using Node.js and Express.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2016 – 2017",
    details:
      "Delivered custom websites for small businesses using WordPress, HTML, CSS, and JavaScript.",
  },
  {
    role: "Software Engineer",
    company: "InnovateTech",
    period: "2015 – 2016",
    details:
      "Implemented CI/CD pipelines and collaborated with DevOps to enhance deployment efficiency.",
  },
  {
    role: "Mobile App Developer",
    company: "Appify Studio",
    period: "2014 – 2015",
    details:
      "Created cross-platform mobile applications with React Native and optimized API integration.",
  },
  {
    role: "IT Support Specialist",
    company: "Global IT Solutions",
    period: "2013 – 2014",
    details:
      "Provided IT support for clients, resolved software issues, and assisted with network troubleshooting.",
  },
  {
    role: "Web Designer",
    company: "CreativeWeb",
    period: "2012 – 2013",
    details:
      "Designed interactive UI mockups and implemented them using HTML5, CSS3, and basic JavaScript.",
  },
  {
    role: "Intern Developer",
    company: "Startup Labs",
    period: "2011 – 2012",
    details:
      "Learned software development best practices while assisting in building internal tools for the company.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-16 bg-gray-300 min-h-screen text-gray-800"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((job) => (
          <div key={job.role} className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="italic text-gray-600">
              {job.company} • {job.period}
            </p>
            <p className="mt-2">{job.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

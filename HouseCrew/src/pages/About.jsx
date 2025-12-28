import React from "react";
import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

const timeline = [
  {
    year: "2023",
    title: "Problem Discovery",
    desc: "Identified lack of trust, quality inconsistency, and safety issues in local home services.",
    icon: <FaChartLine />,
  },
  {
    year: "Early 2024",
    title: "Concept & Research",
    desc: "Designed a transparent, customer-first, technology-driven service platform.",
    icon: <FaCogs />,
  },
  {
    year: "Mid 2024",
    title: "Platform Development",
    desc: "Built core systems including booking, verification, tracking, and service workflows.",
    icon: <FaRocket />,
  },
  {
    year: "Late 2024",
    title: "Professional Network",
    desc: "Onboarded skilled, verified professionals across multiple service categories.",
    icon: <FaUsers />,
  },
  {
    year: "2025",
    title: "Trust & Quality Layer",
    desc: "Introduced ratings, reviews, audits, and transparent pricing models.",
    icon: <FaShieldAlt />,
  },
  {
    year: "2026",
    title: "Scale & Expansion",
    desc: "Expanding reach, automation, and service availability across regions.",
    icon: <FaHandshake />,
  },
];

const About = () => {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-br from-white to-slate-100 font-[Inter]">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HERO ================= */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-blue-600">HouseCrew</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            HouseCrew is a technology-enabled home services platform focused on
            delivering reliable, verified, and high-quality services through a
            seamless digital experience.
          </p>
        </div>

        {/* ================= COMPANY INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28">
          
          <div className="
            bg-white p-10 rounded-2xl
            border border-gray-200
            transition duration-300
            hover:border-black hover:shadow-xl
          ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              HouseCrew connects households with skilled service professionals
              using a transparent and scalable digital platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our focus is on trust, reliability, and consistent service quality
              across every interaction.
            </p>
          </div>

          <div className="
            bg-white p-10 rounded-2xl
            border border-gray-200
            transition duration-300
            hover:border-black hover:shadow-xl
          ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To build the most trusted home services ecosystem by combining
              technology, skilled professionals, and customer-centric design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We aim to simplify everyday life while creating sustainable
              opportunities for service professionals.
            </p>
          </div>

        </div>

        {/* ================= TIMELINE ================= */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-20">
            Our Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2 px-6">
                  <div className="
                    bg-white p-6 rounded-2xl
                    border border-gray-200
                    transition duration-300
                    hover:border-black hover:shadow-xl
                  ">
                    <div className="flex items-center gap-3 text-gray-800 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-bold">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-black rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

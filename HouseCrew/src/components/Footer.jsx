import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/HouseCrewLogo.png"; // update path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-100 font-[Inter]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="HouseCrew" className="w-10 h-10" />
              <span className="text-xl font-bold text-gray-800">
                HouseCrew
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              HouseCrew is a technology-enabled home services platform delivering
              trusted, reliable, and quality services at your doorstep.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "About us",
                "Investor Relations",
                "Terms & conditions",
                "Privacy policy",
                "Anti-discrimination policy",
                "ESG Impact",
                "Careers",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-black transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "UC reviews",
                "Categories near you",
                "Contact us",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-black transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              For Professionals
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-black transition">
                Register as a professional
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Social links</h4>
            <div className="flex gap-4">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaTwitter />,
                <FaYoutube />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="
                    w-10 h-10 rounded-full
                    border border-gray-300
                    flex items-center justify-center
                    text-gray-600
                    cursor-pointer
                    transition duration-300
                    hover:border-black hover:text-black hover:bg-white
                  "
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600">

          <p>
            * As on December 31, 2024
          </p>

          <p className="text-center md:text-right">
            © Copyright 2025 HouseCrew. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

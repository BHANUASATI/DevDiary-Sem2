import React, { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaUser } from "react-icons/fa";

const Contact = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 to-white font-[Inter]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have questions, feedback, or partnership ideas?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Let’s Connect
            </h3>
            <p className="text-gray-600 leading-relaxed">
              HouseCrew is always open to conversations — whether you are a
              customer, service professional, or business partner.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  support@housecrew.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUser className="text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">
                  Customer & Professional Support
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="
              bg-white p-10 rounded-3xl
              border border-gray-200
              shadow-lg
              hover:border-black transition
            "
          >
            <form className="space-y-8">

              {/* Name */}
              <div className="relative">
                <label
                  className={`
                    absolute left-4 top-3 text-sm
                    transition-all
                    ${focused === "name"
                      ? "text-blue-600 -top-3 bg-white px-1"
                      : "text-gray-400"}
                  `}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="
                    w-full px-4 pt-5 pb-2
                    rounded-xl
                    border border-gray-300
                    focus:border-black focus:outline-none
                    transition
                  "
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  className={`
                    absolute left-4 top-3 text-sm
                    transition-all
                    ${focused === "email"
                      ? "text-blue-600 -top-3 bg-white px-1"
                      : "text-gray-400"}
                  `}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="
                    w-full px-4 pt-5 pb-2
                    rounded-xl
                    border border-gray-300
                    focus:border-black focus:outline-none
                    transition
                  "
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  className={`
                    absolute left-4 top-3 text-sm
                    transition-all
                    ${focused === "message"
                      ? "text-blue-600 -top-3 bg-white px-1"
                      : "text-gray-400"}
                  `}
                >
                  Your Message
                </label>
                <textarea
                  rows="4"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="
                    w-full px-4 pt-5 pb-2
                    rounded-xl
                    border border-gray-300
                    focus:border-black focus:outline-none
                    transition resize-none
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full flex items-center justify-center gap-3
                  py-3 rounded-xl
                  bg-blue-600 text-white font-semibold
                  hover:bg-blue-700
                  hover:scale-[1.02]
                  transition-all duration-300
                  shadow-md hover:shadow-xl
                "
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

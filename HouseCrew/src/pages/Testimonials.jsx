import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Home Owner",
    review:
      "HouseCrew made booking home services extremely easy. The professional arrived on time and the quality was top-notch.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Working Professional",
    review:
      "I really liked the transparency and professionalism. No hidden charges and smooth experience overall.",
    rating: 4,
  },
  {
    name: "Rahul Mehta",
    role: "Apartment Resident",
    review:
      "Finding reliable service providers was always difficult earlier. HouseCrew solved that problem perfectly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white font-[Inter]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Trusted by thousands of customers for reliable and high-quality home services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-2xl
                border border-gray-200
                transition duration-300
                hover:border-black hover:shadow-xl
              "
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white
                  flex items-center justify-center font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

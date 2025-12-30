import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/images/Cleaning.jpg";
import img2 from "../assets/images/Electrician.jpg";
import img3 from "../assets/images/Plumber.jpg";
import img4 from "../assets/images/Salon.jpg";
import img5 from "../assets/images/AC.jpg";
import img6 from "../assets/images/Painter.jpg";

const spotlightData = [
  { title: "Home Cleaning", img: img1 },
  { title: "Electrician", img: img2 },
  { title: "Plumbing", img: img3 },
  { title: "Salon at Home", img: img4 },
  { title: "AC Repair", img: img5 },
  { title: "Painting", img: img6 },
];

const Spotlight = () => {
  const sliderRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = sliderRef.current;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateButtons();
  }, []);

  const slide = (direction) => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".slide-card");
    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction * cardWidth * 3,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 500);
  };

  return (
    <section className="py-24 bg-white font-[Inter]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          In the Spotlight
        </h2>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            disabled={!canLeft}
            onClick={() => slide(-1)}
            className={`
              absolute left-2 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              flex items-center justify-center
              backdrop-blur bg-white/90
              border transition-all duration-300
              ${canLeft
                ? "border-gray-300 text-gray-700 hover:border-black hover:scale-110 hover:shadow-xl"
                : "border-gray-200 text-gray-300 cursor-not-allowed"}
            `}
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            disabled={!canRight}
            onClick={() => slide(1)}
            className={`
              absolute right-2 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              flex items-center justify-center
              backdrop-blur bg-white/90
              border transition-all duration-300
              ${canRight
                ? "border-gray-300 text-gray-700 hover:border-black hover:scale-110 hover:shadow-xl"
                : "border-gray-200 text-gray-300 cursor-not-allowed"}
            `}
          >
            <FaChevronRight />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={updateButtons}
            className="
              flex gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              pb-4
            "
          >
            {spotlightData.map((item, index) => (
              <div
                key={index}
                className="
                  slide-card snap-start
                  min-w-[85%] sm:min-w-[45%] md:min-w-[30%]
                  rounded-3xl
                  border border-gray-200
                  hover:border-black hover:shadow-2xl
                  transition-all duration-300
                  bg-gradient-to-br from-slate-50 to-slate-100
                "
              >
                {/* Image */}
                <div className="h-52 rounded-t-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 mb-4">
                    Trusted professionals near you
                  </p>

                  {/* BOOK BUTTON */}
                  <button
                    className="
                      w-full py-2 rounded-xl
                      bg-blue-600 text-white font-semibold
                      hover:bg-blue-700
                      hover:scale-[1.03]
                      transition-all duration-300
                      shadow-md hover:shadow-xl
                    "
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Spotlight;

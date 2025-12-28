import React from "react";

/* === LOCAL IMAGES === */
import Cleaning from "../assets/images/Cleaning.jpg";
import Plumber from "../assets/images/Plumber.jpg";
import Electrician from "../assets/images/Electrician.jpg";
import Salon from "../assets/images/Salon.jpg";
import AC from "../assets/images/AC.jpg";
import Painter from "../assets/images/Painter.jpg";
import Carpenter from "../assets/images/Carpenter.jpg";
import Massage from "../assets/images/Massage.jpg";
import PestControl from "../assets/images/Pest.jpg";

const services = [
  { name: "Cleaning", img: Cleaning },
  { name: "Plumber", img: Plumber },
  { name: "Electrician", img: Electrician },
  { name: "Salon", img: Salon },
  { name: "AC", img: AC },
  { name: "Painter", img: Painter },
  { name: "Carpenter", img: Carpenter },
  { name: "Massage", img: Massage },
  { name: "Pest Control", img: PestControl },
];

const Home = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-slate-100 font-[Inter]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT ================= */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
              Home services{" "}
              <span className="text-blue-600">at your doorstep</span>
            </h1>

            {/* Services Box */}
            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-6">
                What are you looking for?
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer
                      ${
                        index === 8
                          ? "col-span-2 sm:col-span-1 flex justify-center"
                          : ""
                      }`}
                  >
                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white
                      transition hover:shadow-xl">
                      
                      {/* Image */}
                      <div className="h-28 overflow-hidden">
                        <img
                          src={service.img}
                          alt={service.name}
                          className="w-full h-full object-cover
                          transition duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Name */}
                      <div
                        className="py-3 text-center text-sm font-semibold text-gray-700
                        transition duration-300 group-hover:text-blue-600
                        group-hover:translate-y-[-2px]"
                      >
                        {service.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-14 mt-10">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-800">4.8</h3>
                <p className="text-sm text-gray-600">
                  Service Rating<span className="text-yellow-500">*</span>
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-gray-800">12M+</h3>
                <p className="text-sm text-gray-600">
                  Customers Globally<span className="text-yellow-500">*</span>
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="grid grid-cols-2 grid-rows-3 gap-5">

            {/* Large */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={Cleaning}
                className="w-full h-full object-cover transition duration-300
                group-hover:scale-105 group-hover:shadow-2xl"
              />
            </div>

            {/* Small */}
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={Electrician}
                className="w-full h-full object-cover transition duration-300
                group-hover:scale-105"
              />
            </div>

            {/* Large */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={Plumber}
                className="w-full h-full object-cover transition duration-300
                group-hover:scale-105"
              />
            </div>

            {/* Small */}
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={Salon}
                className="w-full h-full object-cover transition duration-300
                group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

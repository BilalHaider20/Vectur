"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import techStackList from "./techStackList";

const navItems = [
  {
    name: "Backend Technologies", 
    link: "backend_technologies", 
  },
  {
    name: "Frontend Technologies",
    link: "frontend_technologies",
  },
];

const TechStackSection = () => {
  const [selectedTab, setSelectedTab] = useState("backend_technologies"); // Fixed typo

  return (
    <section
      id="tech_stack"
      className="bg-blue-dark lg:p-20 sm:py-20 py-10 sm:px-10 px-7"
    >
      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-tech-item {
          opacity: 0; /* Start hidden to ensure animation triggers */
          animation: fadeInSlide 0.5s ease-out forwards;
        }

         .animate-tech-item {
          opacity: 0; /* Start hidden to ensure animation triggers */
          animation: fadeInSlide 0.s ease-out forwards;
        }
      `}</style>

      <div className="flex flex-col item-start mb-10">
        <p className="text-sm text-[#4CA1FF] mb-2">Tech Stack</p>
        <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
          Technologies & Platforms <br />
          We Hold Expertise In
        </h2>
        <div className="flex md:flex-row md:justify-between gap-y-8 md:gap-y-0 md:items-end flex-col">
          <p className="mt-4 text-gray-medium max-w-lg sm:text-base text-sm">
            We leverage modern technologies and platforms to build secure,
            scalable, and high-performance solutions.
          </p>
          <div>
            <button className="flex items-center gap-[3px] bg-blue text-black md:text-base text-sm font-medium font-inter tracking-tighter md:py-3 md:px-6 py-2 px-4 rounded-full cursor-pointer"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
              Contact Us
              <ChevronRight
                strokeWidth={1.5}
                className="lg:w-6 lg:h-6 h-5 w-5 mt-[0.5px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-8 lg:gap-5 xl:gap-10 md:py-10">
        <div className="flex flex-row justify-between col-span-1 items-start">
          <nav className="md:my-6">
            <ul className="gap-y-1 font-inter text-lg flex flex-col items-start justify-start">
              {navItems?.map((item, index) => (
                <button
                  key={index}
                  className={`transition-all ease-in-out duration-75 border-l-4 ${
                    selectedTab === item?.link
                      ? "bg-[#142136] border-l-blue"
                      : "transparent border-l-transparent"
                  } rounded-md text-base lg:text-lg w-full py-3 text-gray-light text-left px-6 cursor-pointer`}
                  onClick={() => setSelectedTab(item.link)}
                >
                  {item.name}
                </button>
              ))}
            </ul>
          </nav>
          <div className="bg-[#8D949E] w-[1px] h-full lg:block hidden ml-5"></div>
        </div>

        <div className="lg:col-span-3">
          <div
            key={selectedTab}
            className="md:my-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 tech-grid"
          >
            {techStackList[selectedTab]?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[linear-gradient(to_right,#072E53_10%,#1E466A_100%)] rounded-lg md:p-10 sm:p-8 p-7 animate-tech-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <Image
                    src={tech?.image}
                    width={85}
                    height={85}
                    alt={tech?.name || "Technology"}
                    className="object-contain mb-4 md:w-20 md:h-20 h-14 w-14 mx-auto"
                  />
                  <p className="md:text-base text-sm text-gray-light text-center">
                    {tech?.name || "Unknown"}
                  </p>
                </div>
              </div>
            )) || <p>No technologies available for this category.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
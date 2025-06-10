'use client';
import { ChevronRight } from "lucide-react";
import React from "react";
import TextCarousel from "./TextCarousel";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[calc(90vh-6.5rem)] flex flex-col justify-center items-center bg-blue-dark">
      <section className="flex flex-col justify-center items-center gap-4 sm:w-[80%] w-full px-10 flex-grow">

        <section className="py-2 sm:px-6 px-4 bg-blue-dark border-1 border-gray-light text-gray-light md:text-sm text-xs rounded-3xl mt-10">
          <h3>Trusted by 1000+ Teams</h3>
        </section>

        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-light font-sora mt-6">
          Empowering Businesses with Scalable & Innovative Solutions
        </h1>

        <p className="text-sm md:text-base text-gray-medium  mt-5 text-center w-[80%]">
          We craft high-quality software solutions tailored to your needs
          enhancing efficiency, productivity, and digital growth. Let’s build
          the future together.
        </p>

        <section className="flex flex-col md:flex-row md:items-center justify-center gap-6 mt-6">
          <button className="flex items-center gap-[2px] bg-blue text-black md:text-base text-sm font-medium font-inter tracking-tighter md:py-3 md:px-6 py-2 px-4 rounded-full border-1 border-blue cursor-pointer" 
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Get Started Now
            <ChevronRight
              strokeWidth={1.5}
              className="lg:w-6 lg:h-6 h-5 w-5 mt-[1px]"
            />
          </button>
          <button className="bg-transparent text-white md:py-3 md:px-6 py-2 px-4 md:text-base text-sm font-medium font-inter tracking-tighter rounded-full border-1 border-white flex gap-[2px] items-center cursor-pointer"
          onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
            Explore Services
            <ChevronRight
              strokeWidth={1.5}
              className="lg:w-6 lg:h-6 h-5 w-5 mt-[2px]"
            />
          </button>
        </section>

      </section>
      <TextCarousel />
    </section>
  );
};

export default HeroSection;

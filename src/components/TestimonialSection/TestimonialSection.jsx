"use client";

import { ChevronRight } from "lucide-react";;
import CardSwiper from "./Testimoials";


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-blue-dark lg:p-20 sm:py-20 py-10 sm:px-10 px-7">
      {/* Header */}
      <div className="flex flex-col item-start mb-10">
        <p className="text-sm text-[#4CA1FF] mb-2">Testimonials</p>
        <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
          Trusted by Industry <br /> Leaders
        </h2>
        <div className="flex md:flex-row md:justify-between gap-y-8 md:gap-y-0 md:items-end flex-col">
          <p className="mt-4 text-gray-medium max-w-lg sm:text-base text-sm">
          Real stories from businesses that trusted us to deliver innovative, scalable, and impactful solutions.
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

      {/* Grid */}
      <CardSwiper />
    </section>
  );
}

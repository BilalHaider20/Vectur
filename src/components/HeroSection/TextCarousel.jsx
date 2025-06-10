"use client";

import Marquee from "react-fast-marquee";

const logos = [
  "Innovate. Build. Win.",
  "Ideas to Solutions",
  "Your Vision, Our Code",
  "Empowering Tech Innovation",
  "Crafting Digital Success",
  "Code. Innovate. Succeed."
];

export default function TextMarquee() {
  return (
    <div className="relative w-full overflow-hidden lg:py-10 md:py-8 py-6 bg-[#071934] my-10">
      {/* Left & Right Gradient Fades */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right,
          #071934 2%,
          rgba(7, 25, 52, 0.33) 35%,
            transparent 50%,
          rgba(7, 25, 52, 0.3) 63%,
          #071934 97%)`
        }}
      />


      {/* Scrolling Text */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="left"
        autoFill={true}
      >
        {logos.map((text, index) => (
          <span
            key={index}
            className="lg:mx-16 mx-10 text-gray-light md:text-lg text-base font-semibold opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

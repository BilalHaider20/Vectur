"use client";
import CircleCard from "./CircleComponent";
import { ChevronRight } from "lucide-react";

export default function PurposeSection() {
  return (
    <section className="relative w-full min-h-[60vh] sm:px-10 px-7 py-20 lg:px-20 bg-blue-dark"
      // style={{
      //   background: 'linear-gradient(to bottom, #071934 30%, #009CFF 50%, #F0F7FF , #009CFF 60%, #071934 100%)',
      //   height: '100%',
      // }}
    >
      {/* Header Section */}

      <div className="mx-auto text-left">
        <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
          Our Purpose &
          <br />
          Approach
        </h2>

        <div className="flex md:flex-row md:justify-between gap-y-8 md:gap-y-0 md:items-end flex-col">
          <p className="mt-4 text-gray-medium max-w-lg sm:text-base text-sm">
            We don’t just build software – we solve problems with a deeper
            purpose. Here’s what we do, how we do it, and why it matters.
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

      {/* Circles */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-16 sm:mt-20 lg:mt-28 sm:space-x-[-40px] sm:space-y-0 space-x-0 space-y-[-40px] ">
        <CircleCard number="1" title="What" subtitle="Find out more" description={'We specialize in developing custom software, web applications, and mobile solutions that help businesses scale and succeed in the digital age. Our services include AI-driven applications, cloud solutions, and blockchain development, ensuring that our clients stay ahead of the curve with cutting-edge technology.'} />


        <CircleCard number="2" title="How" subtitle="Find out more" description={'We focus on delivering custom solutions by understanding each client unique needs. Using agile methodologies, we integrate AI, cloud, and blockchain technologies to create scalable, secure, and user-friendly systems that adapt to future business challenges'} />


        <CircleCard number="3" title="Why" subtitle="Find out more"
        description={'We believe technology should empower businesses to streamline operations, enhance customer experiences, and unlock growth. Our mission is to help companies stay competitive in a rapidly evolving digital world by providing innovative solutions that ensure long-term success.'} 
        />
      </div>
    </section>
  );
}

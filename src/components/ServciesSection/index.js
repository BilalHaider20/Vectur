'use client'
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative bg-blue-dark lg:p-20 sm:py-20 py-10 sm:px-10 px-7 z-50"
    >
      <div
        className="absolute bottom-0 left-0 w-full h-full -z-10 customGradient"
        // style={{
        //   background:
        //     "radial-gradient(circle at bottom center, #4DBAFF 0%, #111111 40%)",
        //   width: "100%",
        //   color: "#071934",
        //   opacity: "0.3",
        // }}
      ></div>

      <style jsx>
        {`
      .customGradient {
        background-image: [#D9D9D9];
        opacity: 1;`}
      </style>

      <div className="z-100">
        <div className="flex flex-col item-start mb-10">
          <p className="text-sm text-[#4CA1FF] mb-2">Our Services</p>
          <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
            Cutting-Edge Services for Your Business
          </h2>
          <div className="flex md:flex-row md:justify-between gap-y-8 md:gap-y-0 md:items-end flex-col">
            <p className="mt-4 text-gray-medium max-w-lg sm:text-base text-sm">
              We deliver innovative, scalable, and secure digital solutions to
              drive business growth, efficiency, and success.
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
      </div>

      
      <div className="grid gap-4 md:grid-cols-10 grid-cols-1 w-full overflow-hidden max-w-screen">


      <div className="relative bg-[#0c182c] group lg:h-72 h-64 text-white rounded-xl md:col-span-4 md:row-start-1 md:row-end-7 col-auto flex flex-col items-center justify-center z-0" >
        <div className="bg-[#090d1f] inset-0 absolute h-full w-full opacity-60 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-2xl z-10" ></div>
        <Image src={'/images/Services Section/1.png'} width={400} height={400} alt="web service" className="z-50 h-full object-cover self-center" />
        <div className="absolute bottom-5 left-10 z-100 font-sora flex flex-col items-start transition-all duration-500 group-hover:-translate-y-1/2 group-hover:bottom-1/2 group-active:bottom-1/2 group-active:-translate-y-1/2">
          <p className="text-xs text-gray-medium text-left">01</p>
          <h3 className="text-base lg:text-lg xl:text-2xl text-[#f8f8f8] font-semibold">Web Development</h3>
        </div>
          <p className="z-100 group-hover:block absolute bottom-10 left-10 hidden text-gray-light text-sm md:w-[90%] w-[80%] group-active:block">Our team builds responsive, high-performance websites to enhance user experience and digital presence.</p>
      </div>

      <div className="relative group bg-[#0c182c] h-56 text-white rounded-xl z-0 flex flex-col items-center justify-center md:row-start-1 md:col-span-6 md:row-end-5 col-auto">
      <div className="bg-[#090d1f] absolute h-full w-full overflow-hidden rounded-2xl z-10 opacity-60 group-hover:opacity-100 transition-all duration-500" ></div>
        <Image src={'/images/Services Section/2.png'} width={400} height={400} alt="web service" className="z-50 h-full object-cover self-center absolute -right-20 top-0" />
        <div className="absolute bottom-5 left-10 z-100 font-sora flex flex-col items-start transition-all duration-500 group-hover:bottom-1/2 group-active:bottom-1/2 group-active:-translate-y-1/2 ">
            <p className="text-xs text-gray-medium text-left pl-1">02</p>
            <h3 className="text-base lg:text-lg xl:text-2xl text-[#f8f8f8] font-semibold">AI & Machine Learning <br/> Solutions</h3>
        </div>
        <p className="z-100 group-hover:block absolute bottom-10 left-10 hidden transition-all duration-500 delay-500 ease-in-out text-gray-light text-sm md:w-[90%] w-[80%] group-active:block">We develop intelligent solutions using AI and Machine Learning to optimize operations and improve decision-making processes</p>
      </div>


      <div className="relative group bg-[#0c182c] h-56 text-white rounded-xl z-0 flex flex-col items-center justify-center md:row-start-7 md:row-end-12 md:col-span-4 ">
      <div className="bg-[#090d1f] absolute h-full w-full overflow-hidden rounded-2xl z-10 opacity-60 group-hover:opacity-100 transition-all duration-500" ></div>
        <Image src={'/images/Services Section/3.png'} width={300} height={300} alt="cloud service" className="z-50 h-78 object-contain absolute top-2 lg:-right-10 right-0" />
        <div className="absolute bottom-5 left-10 z-100 font-sora flex flex-col items-start transition-all duration-500 group-hover:bottom-1/2 group-active:bottom-1/2 group-active:-translate-y-1/2">
            <p className="text-xs text-gray-medium text-left pl-1">03</p>
            <h3 className="ttext-base lg:text-lg xl:text-2xl text-[#f8f8f8] font-semibold">Cloud Solutions</h3>
        </div>
        <p className="z-100 group-hover:block absolute bottom-10 left-10 hidden transition-all duration-500 delay-500 ease-in-out text-gray-light text-sm md:w-[90%] w-[80%] group-active:block">We provide robust and scalable cloud solutions to ensure high availability, security, and scalability for your business operations.</p>
      </div>

      <div className="relative group lg:h-72 h-64 bg-[#0c182c] text-white rounded-xl z-0 flex flex-col items-center justify-center md:row-start-5 md:row-end-12 md:col-span-3">
      <div className="bg-[#090d1f] absolute h-full w-full opacity-60 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-2xl z-10 " ></div>
        <Image src={'/images/Services Section/4.png'} width={400} height={400} alt="ux/ui service" className="z-50 h-full lg:scale-130 scale-120 w-64 absolute top-0" />
        <div className="absolute bottom-4 left-4 z-100 font-sora flex flex-col items-start transition-all duration-500 group-hover:bottom-1/2 group-active:bottom-1/2 group-active:-translate-y-1/2">
            <p className="text-xs text-gray-medium text-left pl-5">04</p>
            <h3 className="text-base lg:text-lg xl:text-2xl text-[#f8f8f8] font-semibold pl-5">UX/UI desgin</h3>
        </div>
        <p className="z-100 group-hover:block absolute bottom-10 left-10 hidden transition-all duration-500 delay-500 ease-in-out text-gray-light text-sm w-[80%] group-active:block">Our design team creates intuitive, visually appealing, and user-friendly interfaces to ensure exceptional user experiences.</p>
      </div>

      <div className="relative group bg-[#0c182c] lg:h-72 h-64 text-white rounded-xl z-0 flex flex-col items-center justify-center md:row-start-5 md:row-end-12 md:col-span-3">
      <div className="bg-[#090d1f] absolute h-full w-full opacity-60 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-2xl z-10 " ></div>
        <Image src={'/images/Services Section/5.png'} width={300} height={300} alt="ux/ui service" className="z-100 self-center h-full absolute right-0 lg:scale-120 scale-110" />
        <div className="absolute bottom-4 left-4 z-100 font-sora flex flex-col items-start transition-all duration-500 group-hover:bottom-1/2 group-active:bottom-1/2 group-active:-translate-y-1/2">
            <p className="text-xs text-gray-medium text-left pl-5">04</p>
            <h3 className="text-base lg:text-lg xl:text-2xl text-[#f8f8f8] font-semibold pl-5">E-commerce <br/> Development</h3>
        </div>
        <p className="z-100 group-hover:block absolute bottom-10 left-10 hidden transition-all duration-500 delay-500 ease-in-out text-gray-light text-sm w-[80%] group-active:block">Our team creates secure and scalable e-commerce platforms to drive sales and improve the shopping experience for customers.</p>
      </div>


    </div>
    </section>
  );
};

export default ServicesSection;

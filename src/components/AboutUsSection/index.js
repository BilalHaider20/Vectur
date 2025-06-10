import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";


const AboutUsSection = () => {
  return (
    <section id="about_us" className="bg-blue-dark lg:p-20 sm:py-20 py-10 sm:px-10 px-7">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
        <div className="flex flex-col item-start">
          <p className="text-sm text-[#4CA1FF] mb-2">About Us</p>
          <h2 className="lg:text-4xl xl:text-[50px] text-3xl font-sora text-gray-light font-semibold mb-6">
            Empowering Businesses with Innovation & Technology
          </h2>
          <p className="mb-10 text-base text-gray-medium">
          At Vectur, we build innovative and scalable digital solutions that drive business growth. With expertise in software, web, and mobile development, we focus on delivering seamless, user-friendly, and high-impact technology.
          </p>

          <div>
            <button className="flex items-center gap-[3px] bg-blue text-black md:text-base text-sm font-medium font-inter tracking-tighter md:py-3 md:px-6 py-2 px-4 rounded-full">
              View More
              <ChevronRight
                strokeWidth={1.5}
                className="lg:w-6 lg:h-6 h-5 w-5 mt-[0.5px]"
              />
            </button>
          </div>

          <div className="h-[1px] bg-[#8D949E] my-8"></div>

          <section className="flex font-sora justify-between">
            {
                [
                    {
                    title: "500+",
                    content: "Satisfied Customers",
                    },
                    {
                        title: "10+",
                        content: "Years of Experience",
                    },
                    {
                        title: "40+",
                        content: "Projects Completed",
                    },
                
                ].map((item, index)=>(
                    <div key={index} className="flex justify-center items-center flex-col">
                <h3 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[50px] tracking-tighter text-blue leading-10">
                    {item.title}
                </h3>
                <p className="font-inter text-base text-gray-light text-center">{item.content}</p>
                </div>
                ))
            }
            
          </section>
        </div>

        <div className="flex justify-center items-center my-10 lg:mt-0">
      <div className="relative md:w-[380px] md:h-[380px] h-[280px] w-[230px]">
        {/* Center Diamond Shape */}
        <Image
            src={'/images/about/diamond.png'}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-36 md:w-44 md:h-56 "
            width={200}
            height={200}
            alt="Diamond Shape"
        />

        {/* Top Left Image */}
        <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
          <div className="md:w-48 md:h-48 w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/images/about/AboutUs_Img1.jpg"
              alt="Top Left"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Top Right Image */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
          <div className="md:w-48 md:h-48 w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/images/about/AboutUs_Img2.jpg"
              alt="Top Right"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
          <div className="md:w-48 md:h-48 w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/images/about/AboutUs_Img3.jpg"
              alt="Bottom Left"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <div className="md:w-48 md:h-48 w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/images/about/AboutUs_Img4.jpg"
              alt="Bottom Right"
              width={144}
              height={144}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

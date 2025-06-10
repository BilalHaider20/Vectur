import React from "react";
import { ChevronRight } from "lucide-react";

const FeatureCard = ({ title, content, index }) => {
  return (
    <div className="py-2 mb-3 flex flex-col justify-start items-start border-t-1 border-t-gray-medium font-inter">
      <h3 className="text-base text-gray-light mb-3">{`0${index}`}</h3>
      <h4 className="xl:text-3xl lg:text-[22px] md:text-lg font-semibold mb-4 text-left text-blue">
        {title}
      </h4>
      <p className="flex-grow text-left text-gray-medium">{content}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section id="why_choose_us" className="relative lg:min-h-[70vh] bg-gradient-to-br from-[#071934] to-[#031021] -z-100 lg:p-20 sm:py-20 py-10 sm:px-10 px-7">
        <div
        className="absolute bottom-0 left-0 w-full h-full -z-10"
        style={{
            background: 'radial-gradient(circle at bottom center, #4DBAFF 0%, #111111 40%)',
            width: '100%',
            color:'#071934',
            opacity: '0.3',
          }}
      ></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 z-100">
        <div className="flex flex-col item-start">
          <p className="text-sm text-[#4CA1FF] mb-2">Why Choose Us</p>
          <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
            Driving Innovation, Excelling Always
          </h2>
          <p className="mb-10 text-base text-gray-medium">
            We combine cutting-edge technology, industry expertise, and a
            client-focused approach to deliver scalable and customized solutions
            that drive success.
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
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-0">
          <FeatureCard
            title="Expertise in AI & Generative AI"
            content="Advanced AI solutions tailored to enhance your business efficiency."
            index={1}
          />
          <FeatureCard
            title="Innovative & Scalable Solutions"
            content="Cutting-edge tech designed to grow with your needs."
            index={2}
          />
          <FeatureCard
            title="Custom Software, Built for You"
            content="Personalized applications crafted to meet your unique goals."
            index={3}
          />
          <FeatureCard
            title="Client-Centric Approach"
            content="Dedicated support ensuring your success is our priority."
            index={4}
          />
        </div>
      </div>
      
    </section>
  );
};

export default FeatureSection;

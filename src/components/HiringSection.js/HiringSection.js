'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const HiringSection = () => {
  const router= useRouter();


  const handleClick = ()=>{
    router.push('./careers');
  }

  return (
    <>
      <div>
        <div id="careers-section" className="py-20 bg-blue-dark">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="xl:text-[44px] lg:text-10rem text-3xl font-bold text-center mb-8 text-gray-light font-sora">Join Our Team</h2>
            <p className="lg:text-lg text-base text-center text-gray-medium mb-12">
              We're looking for passionate developers to join our growing team
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#192539] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-light font-sora">Frontend Developer</h3>
                <p className="text-gray-medium mb-4">
                  Work with React, Next.js, and modern frontend technologies to build amazing user experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
                <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
              
              <div className="bg-[#192539] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-light font-sora">Backend Developer</h3>
                <p className="text-gray-medium mb-4">
                  Build robust APIs and scalable backend systems using Node.js and cloud technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                 Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringSection;
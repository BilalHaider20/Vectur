import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { ChevronRight, MoveRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0C1D33] lg:py-8 lg:px-8 p-6 ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-row flex-col  justify-between">
        {/* Left Column: Logo & Contact Info */}
        <div className="flex flex-col mb-6 md:mb-0">
            <div className="flex items-center mb-8">
                  <Image src={'/svgs/Logo.svg'} width={30} height={30} alt="Vectur Logo"/>
                  <h1 className="text-[#F1F1F1] ml-1 text-lg lg:text-xl font-normal font-sora ">Vectur</h1>
            </div>
          <div className='lg:text-base text-sm '>
            <p className="text-gray-400 font-inter">+123 456 7890</p>
            <p className="text-gray-400 font-inter">support@vectur.com</p>
          </div>
        </div>

        <div className='flex flex-row md:w-1/2 items-start justify-between '>
        {/* Quick Links Column */}
        <div className="flex flex-col mb-6 md:mb-0 font-inter">
          <h3 className="text-base lg:text-lg text-gray-light font-semibold mb-2">Quick Links</h3>
          <ul className='font-normal text-gray-400 lg:text-base text-sm'>
            <li><a href="#" className="hover:text-blue-500" >Home</a></li>
            <li><a href="#about_us" className="hover:text-blue-500" >About Us</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#tech_stack" className="hover:text-blue-500">Tech Stack</a></li>
            <li><a href="#why_choose_us" className="hover:text-blue-500">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col mb-6 md:mb-0 font-inter">
          <h3 className="text-base lg:text-lg text-gray-light font-semibold mb-2">Services</h3>
          <ul className='text-gray-400 lg:text-base text-sm'>
            <li><a href="#" className="hover:text-blue-500">Custom Software Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Web Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Mobile App Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Cloud Solutions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">E-commerce Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">AI & Machine Learning</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Blockchain Development</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Software Maintenance & Support</a></li>
          </ul>
        </div>
      </div>
      </div>

      {/* Social Media Icons & Copyright */}
      <div className="flex sm:flex-row flex-col gap-y-4 justify-between items-center mt-8 border-t border-gray-700 pt-6">
        <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer">
                <Image src={'/svgs/linkedIn.svg'} width={30} height={30} alt='linkedIn' />
            </a>
            <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                <Image src={'/svgs/instagram.svg'} width={30} height={30} alt='Instagram' />
            </a>

            <a href="https://www.x.com" target='_blank' rel="noopener noreferrer">
                <Image src={'/svgs/x_icon.png'} width={30} height={30} alt='X' />
            </a>
        </div>
        <p className="text-gray-400 sm:text-sm text-xs">©2025 Vectur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

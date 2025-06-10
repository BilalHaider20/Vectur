'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { toggleSidebar } from "@/store/sidebarSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());  // Toggle sidebar state in Redux
  };



  return (
    <header className="bg-blue-dark py-7 lg:px-10 p-7 flex justify-between items-center">
      
      
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={"/svgs/Logo.svg"}
          width={30}
          height={30}
          alt="Vectur Logo"
        />
        <h1 className="text-[#F1F1F1] ml-1 text-lg lg:text-xl font-normal font-sora">
          Vectur
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex lg:gap-x-5 gap-x-2 font-inter md:text-[13px] lg:text-base 2xl:text-lg">
          <li>
            <a
              href="#"
              className="text-gray-light hover:text-blue font-normal tracking-tighter "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about_us"
              className="text-gray-light hover:text-blue font-normal tracking-tighter"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-light hover:text-blue  font-normal tracking-tighter"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#tech_stack"
              className="text-gray-light hover:text-blue  font-normal tracking-tighter"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#why_choose_us"
              className="text-gray-light hover:text-blue font-normal tracking-tighter"
            >
              Why Choose Us?
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-light hover:text-blue font-normal tracking-tighter"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <div>
        <a
          href="#contact"
          className="hidden md:flex bg-blue items-center text-black text-sm lg:text-base lg:py-3.5 lg:px-6 px-4 py-2 rounded-full font-inter font-semibold hover:bg-blue-500 transition duration-300"
        >
          Contact Us
          <ChevronRight strokeWidth={2} className="lg:w-5 lg:h-5 h-4 w-4" />
        </a>

        <button
          className="md:hidden block p-2 text-gray-light"
          onClick={handleToggle}
          aria-label="Toggle Sidebar"
        >
          <AiOutlineMenu size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;

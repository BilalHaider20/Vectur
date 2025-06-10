"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons from react-icons
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/sidebarSlice";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About Us",
    link: "#about_us",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Tech Stack",
    link: "#tech_stack",
  },
  {
    name: "Why Choose Us",
    link: "#why_choose_us",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

const Sidebar = () => {
  const sidebarState = useSelector((state) => state.sidebar.isOpen);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(sidebarState);
  const dispatch = useDispatch();



  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    setIsOpen(sidebarState); // Update local state when sidebarState changes
  },[sidebarState]);

  // Toggle sidebar
  const handleToggle = () => {
    dispatch(toggleSidebar());  // Dispatch action to toggle the sidebar state
  };

  return (
    <div>
      {/* Menu Button on smaller screens */}
      {/* <button
        className="md:hidden block absolute top-4 left-10 p-2 text-gray-light"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <AiOutlineMenu size={30} />
      </button> */}

      {/* Overlay when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-900"
          onClick={handleToggle} // Clicking overlay closes the sidebar
        />
      )}

      {/* Sidebar */}
      <div
        className={`py-8 w-56 fixed top-0 right-0 h-full bg-blue-dark text-white transform transition-transform duration-300 ease-in-out z-1000 ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center mb-4 px-4">
          <Image
            src={"/svgs/Logo.svg"}
            width={30}
            height={30}
            alt="Vectur Logo"
          />
          <h1 className="text-[#F1F1F1] ml-2 text-lg lg:text-xl font-normal font-sora">
            Vectur
          </h1>
        </div>

        <nav>
          {navItems?.map((item, index) => {
            return (
              <ul key={index} className="gap-x-5 font-inter text-lg flex flex-col items-start justify-center" onClick={toggleSidebar}>
                <li className="border-b-1 border-b-gray-medium w-full py-4 px-6 ">
                  <a
                    href={item.link}
                    className="text-gray-light hover:text-blue font-normal"
                  >
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

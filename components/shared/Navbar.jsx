"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";

import navlogo from '../../public/logo/navbar.png'
import navicon from '../../public/icon/icons8-aircraft.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const menubar = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Destinations",
      href: "/destinations",
      dropdown: [
        { id: 21, name: "Sundarbans", href: "/destinations/sundarbans" },
        { id: 22, name: "Cox's Bazar", href: "/destinations/coxs-bazar" },
        { id: 23, name: "Sylhet", href: "/destinations/sylhet" },
        { id: 24, name: "Bandarban", href: "/destinations/bandarban" },
        { id: 25, name: "Saint Martin", href: "/destinations/saint-martin" },
        { id: 26, name: "Rangamati", href: "/destinations/rangamati" },
      ],
    },
    {
      id: 4,
      name: "Services",
      href: "/services",
      dropdown: [
        { id: 41, name: "Hotel Booking", href: "/services/hotels" },
        { id: 42, name: "Transport", href: "/services/transport" },
        { id: 43, name: "Tour Guide", href: "/services/guide" },
      ],
    },
    { id: 5, name: "About", href: "/About-us" },
    { id: 6, name: "Contact", href: "/Contact-us" },
  ];

  const user = false; // mock user

  // Scroll detection for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
        setMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMobileDropdown = (id) => {
    setMobileDropdown(mobileDropdown === id ? null : id);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="fixed top-0 md:top-1 left-0 right-0 mx-auto z-50 text-white transition-all duration-300">
      <div className="relative md:max-w-[700px] lg:max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 lg:py-4 bg-black/70  md:bg-black/0">

        {/* Blurred SVG Background - Only this part gets blurred */}
        <div className={`absolute hidden md:block m-auto inset-0 -z-10 h-full transition-all duration-300 ${
          isScrolled ? '' : ''
        }`}>
          <svg width="100%" height="100%" viewBox="0 0 755 69" fill="rgba(0, 0, 0, .5)" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_353_758)">
              <path d="M754.481 6V47.8143C754.481 49.5338 753.646 51.1543 752.223 52.1943L731.458 67.38C730.465 68.1066 729.251 68.5 728.004 68.5H6.23087C3.07631 68.5 0.519043 66.0376 0.519043 63V23.0145C0.519043 21.3407 1.31062 19.758 2.66968 18.7144L24.8277 1.69987C25.8394 0.923047 27.095 0.5 28.3888 0.5H748.769C751.923 0.5 754.481 2.96243 754.481 6Z" stroke="url(#paint0_linear_353_758)"></path>
            </g>
            <defs>
              <linearGradient id="paint0_linear_353_758" x1="195.928" y1="2.4056" x2="240.176" y2="181.668" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E1A21"></stop>
                <stop offset="0.315" stopColor="#87838B"></stop>
                <stop offset="0.54" stopColor="#1E1A21"></stop>
                <stop offset="1" stopColor="#ACA0B6"></stop>
              </linearGradient>
              <clipPath id="clip0_353_758">
                <rect width="100%" height="100%" fill="black"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center ">
          <Link href="/" className="text-2xl font-bold flex items-center gap-0.5">
            <Image 
            src={navicon}
            alt="The GoTour Logo"
            className="h-10 w-10 -scale-x-100 text-white rounded-full object-cover"
            />
            <h1 className="text-5xl font-apache text-[#FA6741] font-extrabold">GoTour</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 font-medium items-center" ref={dropdownRef}>
          {menubar.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center py-2 hover:text-[#FA6741] transition-colors duration-300 font-semibold text-[15px]"
              >
                {item.name}
                {item.dropdown && <FiChevronDown className="ml-1 text-sm" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 w-56 bg-white rounded-xl py-3 transition-all duration-300 z-50 border border-gray-100 ${
                    activeDropdown === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#FA6741] text-white font-semibold rounded-full hover:bg-[#e55a34] transition-all duration-300 hover:shadow-xl cursor-pointer">
                <FiUser className="text-sm" />
                My Account
              </button>
            </Link>
          ) : (
            <>
              <Link href="/signup">
                <ShimmerButton 
                onClick={closeMobileMenu}
                // background	 = "#FA6741"
                className='font-apache text-lg'
                 >
                  Create Account
                </ShimmerButton>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-3 rounded-xl bg-white/5 hover:bg-white/20 text-white transition-colors duration-300 border border-gray-700"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <Link href="/" onClick={closeMobileMenu}>
            <h1 className="text-2xl text-[#FA6741] font-extrabold">The GoTour</h1>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <FiX size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="h-full overflow-y-auto pb-24">
          <div className="flex flex-col py-4">
            {menubar.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.id)}
                      className="flex items-center justify-between w-full py-4 px-6 text-gray-800 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-semibold text-left"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`text-gray-400 transition-transform duration-200 ${
                          mobileDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdown === item.id && (
                      <div className="bg-gray-50 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.href}
                            onClick={closeMobileMenu}
                            className="block py-3 px-10 text-sm text-gray-600 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors duration-200 border-l-2 border-transparent hover:border-green-500"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center py-4 px-6 text-gray-800 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 space-y-3">
            {user ? (
              <Link href="/dashboard" className="block">
                <button
                  onClick={closeMobileMenu}
                  className="w-full py-3.5 px-4 text-center bg-[#FA6741] text-white font-semibold rounded-xl hover:bg-[#e55a34] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  My Account
                </button>
              </Link>
            ) : (
              <>
                <Link href="/signin" className="block">
                  <button
                    onClick={closeMobileMenu}
                    className="w-full py-3.5 px-4 text-center text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" className="block">
                  <ShimmerButton onClick={closeMobileMenu}>
                    Create Account
                  </ShimmerButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
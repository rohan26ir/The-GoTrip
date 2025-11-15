"use client";

import React from "react";
import Image from "next/image";

import mainImage from "../../../../public/place/bangladeshi-place/National-Martyrs-Memorial.jpg";
import secondImage from "../../../../public/place/bangladeshi-place/Sundarban_Image.jpg";
import lastImage from "../../../../public/place/bangladeshi-place/ahsan-monzil-dhaka.jpg";

import SectionHeading from "../../../../components/section/SectionHeading";

const Imagedesign = () => {
  return (
    <div>
      <div className="w-full max-w-[1700px] mx-auto pt-20 pb-32 my-10">

        {/* Heading */}
        <SectionHeading
          badge="Discover"
          title="Explore Bangladesh's Wonders"
          description="Visit Ahsan Manzil, the Sundarbans, and the National Martyrs Memorial — icons of Bangladesh’s beauty and heritage."
          alignment="center"
          badgeColor="#5BBF31"
          badgeTextColor="black"
          h2Textcolor="#323232"
          descriptionClolor="gray"
          className="mb-10 md:mb-40"
        />

        {/* Image Section */}
        <div className="relative p-4 md:p-0">

          {/* Mobile Grid View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {/* All same size & stylish */}
            <Image
              src={lastImage}
              alt="Main Image"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
            <Image
              src={secondImage}
              alt="Second Image"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
            <Image
              src={mainImage}
              alt="Third Image"
              className="w-full h-56 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Desktop Overlapping Layout */}
          <div className="hidden md:flex flex-col items-center relative">
            {/* Main Image */}
            <Image
              src={lastImage}
              alt="Main Image"
              className="w-[90%] mx-auto h-[400px] object-cover object-[center_20%] rounded-lg shadow-xl"
            />

            {/* Top Small Image */}
            <div className="absolute top-0 left-[25%] -translate-y-1/2 -translate-x-1/2">
              <Image
                src={secondImage}
                alt="Second Image"
                className="w-80 h-40 object-cover rounded-xl shadow-xl border-4 border-white"
              />
            </div>

            {/* Bottom Small Image */}
            <div className="absolute bottom-0 right-[25%] translate-x-1/2 translate-y-1/2">
              <Image
                src={mainImage}
                alt="Third Image"
                className="w-80 h-40 object-cover object-top rounded-xl shadow-xl border-4 border-white"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Imagedesign;
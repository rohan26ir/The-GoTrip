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
      <div className="w-[80%] h-auto mx-auto mb-32">
        {/*  */}
        <div>
          <SectionHeading
            badge="Discover"
            title="Explore Bangladesh's Wonders"
            description="Visit Ahsan Manzil, the Sundarbans, and the National Martyrs Memorial — icons of Bangladesh’s beauty and heritage."
            alignment="center"
            badgeColor="#5BBF31"
            badgeTextColor="black"
            h2Textcolor="#323232"
            descriptionClolor="gray"
            className="mb-40"
          />

          {/* image */}
          <div className="relative ">
            <div>
              <Image
                src={lastImage}
                alt="Main Image"
                className="w-full h-[65vh] object-cover object-[center_20%] top-0 rounded-lg shadow-lg"
              />
            </div>

            <div className="absolute top-0 left-[25%] transform -translate-y-1/2 -translate-x-1/2 ">
              <Image
                src={secondImage}
                alt="Second Image"
                className="w-80 h-40 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>

            <div className="absolute bottom-0 right-[25%] transform translate-x-1/2 translate-y-1/2 ">
              <Image
                src={mainImage}
                alt="Third Image"
                className="w-80 h-40 object-cover object-top rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagedesign;
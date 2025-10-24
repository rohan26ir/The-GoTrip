import React from "react";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import { ImageCard } from "../../../components/dynamic/Marquee/ImageCard"; // Fixed import name

// Import your local images
import image1 from  '../../../public/marquee/image.webp'
import image2 from  '../../../public/marquee/image1.webp'
import image3 from  '../../../public/marquee/image2.webp'
import image4 from  '../../../public/marquee/image3.webp'
import image5 from  '../../../public/marquee/image4.webp'
import image6 from  '../../../public/marquee/image5.webp'
import image7 from  '../../../public/marquee/image.webp'
import image8 from  '../../../public/marquee/image1.webp'
import image9 from  '../../../public/marquee/image2.webp'
import image10 from '../../../public/marquee/image3.webp'
import image11 from '../../../public/marquee/image4.webp'
import image12 from '../../../public/marquee/image5.webp'
import Imagedesign from "./components/Imagedesign";

const travelImages = [
  {
    id: 1,
    src: image1.src, // Fixed: use image1.src instead of {image1}
    alt: "Mountain Adventure",
    title: "Mountain Trek",
    description: "Explore breathtaking peaks"
  },
  {
    id: 2,
    src: image2.src, // Fixed: use image2.src
    alt: "Forest Landscape",
    title: "Forest Retreat",
    description: "Connect with nature"
  },
  {
    id: 3,
    src: image3.src, // Fixed: use image3.src
    alt: "Beach Paradise",
    title: "Beach Getaway",
    description: "Relax by the ocean"
  },
  {
    id: 4,
    src: image4.src, // Fixed: use image4.src
    alt: "City Exploration",
    title: "Urban Adventure",
    description: "Discover city life"
  },
  {
    id: 5,
    src: image5.src, // Fixed: use image5.src
    alt: "Lake View",
    title: "Lake Serenity",
    description: "Peaceful waterside"
  },
  {
    id: 6,
    src: image6.src, // Fixed: use image6.src
    alt: "Northern Lights",
    title: "Aurora Experience",
    description: "Magical light show"
  },
  {
    id: 7,
    src: image7.src, // Fixed: use image7.src
    alt: "Winter Wonderland",
    title: "Snow Adventure",
    description: "Winter sports paradise"
  },
  {
    id: 8,
    src: image8.src, // Fixed: use image8.src
    alt: "Desert Safari",
    title: "Desert Journey",
    description: "Golden sand dunes"
  },
  {
    id: 9,
    src: image9.src, // Fixed: use image9.src
    alt: "Tropical Island",
    title: "Island Paradise",
    description: "Tropical getaway"
  },
  {
    id: 10,
    src: image10.src, // Fixed: use image10.src
    alt: "Historic Castle",
    title: "Historic Tour",
    description: "Step back in time"
  },
  {
    id: 11,
    src: image11.src, // Fixed: use image11.src
    alt: "Wildlife Safari",
    title: "Wildlife Adventure",
    description: "Meet amazing animals"
  },
  {
    id: 12,
    src: image12.src, // Fixed: use image12.src
    alt: "Cultural Festival",
    title: "Cultural Experience",
    description: "Immerse in traditions"
  }
]

const Page = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <ImageCard
          images={travelImages}
          title="Travel Destinations"
          description="Find your next adventure"
          marqueeSpeed={50}
          reverseSpeed={45}
          className="my-8"
          imageClassName="w-80 h-60"
          showInstagramOverlay={true}
        />
      </section>

     <section className="max-w-[1700px] mx-auto">
       <Imagedesign></Imagedesign>
     </section>

      <section>
        <NewsLetter />
      </section>
    </div>
  );
};

export default Page;
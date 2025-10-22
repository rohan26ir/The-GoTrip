import React from "react";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import { ImageCard } from "../../../components/dynamic/Marquee/ImageCard";

const travelImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Mountain Adventure",
    title: "Mountain Trek",
    description: "Explore breathtaking peaks"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Forest Landscape",
    title: "Forest Retreat",
    description: "Connect with nature"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1",
    alt: "Beach Paradise",
    title: "Beach Getaway",
    description: "Relax by the ocean"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    alt: "City Exploration",
    title: "Urban Adventure",
    description: "Discover city life"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Lake View",
    title: "Lake Serenity",
    description: "Peaceful waterside"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    alt: "Northern Lights",
    title: "Aurora Experience",
    description: "Magical light show"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    alt: "Winter Wonderland",
    title: "Snow Adventure",
    description: "Winter sports paradise"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    alt: "Desert Safari",
    title: "Desert Journey",
    description: "Golden sand dunes"
  }
]


const page = () => {
  return (
    <div>
      <section>
        <Hero></Hero>
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
        showInstagramOverlay={false}
      />
      </section>

      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default page;

'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Marquee } from "@/components/ui/marquee"

// Import your local images
import image1 from '../../public/marquee/image.webp'
import image2 from '../../public/marquee/image1.webp'
import image3 from '../../public/marquee/image2.webp'
import image4 from '../../public/marquee/image3.webp'
import image5 from '../../public/marquee/image4.webp'
import image6 from '../../public/marquee/image5.webp'
import image7 from  '../../public/marquee/image.webp'
import image8 from  '../../public/marquee/image1.webp'
import image9 from  '../../public/marquee/image2.webp'
import image10 from '../../public/marquee/image3.webp'
import image11 from '../../public/marquee/image4.webp'
import image12 from '../../public/marquee/image5.webp'


// Use your local images
const images = [
  {
    id: 1,
    src: image1,
    alt: "Image 1"
  },
  {
    id: 2,
    src: image2,
    alt: "Image 2"
  },
  {
    id: 3,
    src: image3,
    alt: "Image 3"
  },
  {
    id: 4,
    src: image4,
    alt: "Image 4"
  },
  {
    id: 5,
    src: image5,
    alt: "Image 5"
  },
  {
    id: 6,
    src: image6,
    alt: "Image 6"
  },
  {
    id: 7,
    src: image7,
    alt: "Image 7"
  },
  {
    id: 8,
    src: image8,
    alt: "Image 8"
  },
  {
    id: 9,
    src: image9,
    alt: "Image 9"
  },
  {
    id: 10,
    src: image10,
    alt: "Image 10"
  },
  {
    id: 11,
    src: image11,
    alt: "Image 11"
  },
  {
    id: 12,
    src: image12,
    alt: "Image 12"
  }
]

// Create staggered layout for first row (left to right)
const firstRow = [
  { ...images[0], offset: -10 },
  { ...images[1], offset: 10 },
  { ...images[2], offset: -10 },
  { ...images[3], offset: 10 },
  { ...images[4], offset: -10 },
  { ...images[5], offset: 15 },
  { ...images[6], offset: 0 },
  { ...images[7], offset: 0 },
  { ...images[8], offset: 0 },
  { ...images[9], offset: 0 },
]

// Create staggered layout for second row (right to left)
const secondRow = [
  { ...images[10], offset: 10 },
  { ...images[11], offset: -10 },
  { ...images[0], offset: 10 }, 
  { ...images[1], offset: -10 },
  { ...images[2], offset: 10 },
  { ...images[3], offset: -10 },
  { ...images[4], offset: 0 },
  { ...images[5], offset: 0 },
  { ...images[6], offset: 0 },
  { ...images[7], offset: 0 },
]

const ImageCard = ({ img, offset }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative w-64 h-auto cursor-pointer overflow-hidden rounded-xl border transition-all duration-500 ease-out",
        "border-gray-200 bg-white shadow-sm hover:shadow-xl",
        "dark:border-gray-700 dark:bg-gray-800"
      )}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.3s ease-out, all 0.3s ease-out"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        src={img.src.src} // Access the .src property for imported images
        alt={img.alt}
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)"
        }}
      />
      
      {/* Instagram Hover Overlay */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out",
          isHovered 
            ? "bg-lime-400/50 opacity-100"
            : "bg-black/0 opacity-0"
        )}
      >
        {/* Instagram Icon */}
        <div
          className={cn(
            "transform transition-all duration-500 ease-out mb-2",
            isHovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
          )}
        >
          <svg 
            className="w-12 h-12 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        
        {/* Instagram Text */}
        <div
          className={cn(
            "transform transition-all duration-500 ease-out delay-100",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="text-white font-semibold text-lg tracking-wide">
            Instagram
          </span>
        </div>
      </div>
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 gap-2">
      <h2 className="text-4xl w-[80%] mx-auto text-center font-bold pb-20">Whether you seek adventure,
culture, or calm — we’ve got the
perfect experience for every kind
of traveler.
</h2>
      {/* First Row - Left to Right with staggered cards */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((image) => (
          <div key={`first-${image.id}`} className="mx-0.5">
            <ImageCard img={image} offset={image.offset} />
          </div>
        ))}
      </Marquee>
      
      {/* Second Row - Right to Left with staggered cards */}
      <Marquee reverse pauseOnHover className="[--duration:35s]">
        {secondRow.map((image) => (
          <div key={`second-${image.id}`} className="mx-0.5">
            <ImageCard img={image} offset={image.offset} />
          </div>
        ))}
      </Marquee>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"></div>
    </div>
  )
}
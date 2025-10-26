"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Marquee } from "@/components/ui/marquee";

export function ImageCard({
  images,
  title,
  description,
  marqueeSpeed = 40,
  reverseSpeed = 35,
  className,
  imageClassName,
  showInstagramOverlay = true,
}) {
  // First row (left to right)
  const firstRow = images
    .slice(0, Math.ceil(images.length / 2))
    .map((image, index) => ({
      ...image,
      offset: index % 2 === 0 ? -10 : 10,
    }));

  // layout for second row (right to left)
  const secondRow = images
    .slice(Math.ceil(images.length / 2))
    .map((image, index) => ({
      ...image,
      offset: index % 2 === 0 ? 10 : -10,
    }));

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden py-8 gap-2",
        className
      )}
    >
      {/* Title and Description */}
      {(title || description) && (
        <div id="image-card" className="text-center pb-10 max-w-[95%] md:max-w-[80%] mx-auto">
          {title && <h2 className="font-apache text-[#323232] text-5xl md:text-7xl font-bold ">{title}</h2>}
          {description && (
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      )}

      {/* First Row - Left to Right with staggered cards */}
      <Marquee pauseOnHover >
        {firstRow.map((image) => (
          <div key={`first-${image.id}`} className="mx-0.5">
            <SingleImageCard
              img={image}
              offset={image.offset}
              className={imageClassName}
              showInstagramOverlay={showInstagramOverlay}
            />
          </div>
        ))}
      </Marquee>

      {/* Second Row - Right to Left with staggered cards
      <Marquee reverse pauseOnHover >
        {secondRow.map((image) => (
          <div key={`second-${image.id}`} className="mx-0.5">
            <SingleImageCard
              img={image}
              offset={image.offset}
              className={imageClassName}
              showInstagramOverlay={showInstagramOverlay}
            />
          </div>
        ))}
      </Marquee> */}

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"></div>
    </div>
  );
}

// Renamed the inner component to avoid naming conflict
const SingleImageCard = ({
  img,
  offset = 0,
  className,
  showInstagramOverlay = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative w-64 h-auto cursor-pointer overflow-hidden rounded-xl border transition-all duration-500 ease-out",
        "border-gray-200 bg-white shadow-sm hover:shadow-xl",
        "dark:border-gray-700 dark:bg-gray-800",
        className
      )}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.3s ease-out, all 0.3s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        src={img.src}
        alt={img.alt}
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Custom Content Overlay */}
      {(showInstagramOverlay || img.title || img.description) && (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out",
            isHovered ? "bg-lime-400/50 opacity-100" : "bg-black/0 opacity-0"
          )}
        >
          {/* Instagram Icon (only if showInstagramOverlay is true) */}
          {showInstagramOverlay && (
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          )}

          {/* Custom Title and Description */}
          <div
            className={cn(
              "transform transition-all duration-500 ease-out delay-100 text-center",
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
          >
            {img.title && (
              <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
            )}
            {img.description && (
              <p className="text-white text-sm">{img.description}</p>
            )}
            {showInstagramOverlay && !img.title && (
              <span className="text-white font-semibold text-lg tracking-wide">
                Instagram
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

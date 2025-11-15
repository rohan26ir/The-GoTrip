import React from "react";

const SectionHeading = ({
  badge,
  title,
  description,
  alignment = "center",
  badgeColor,
  badgeTextColor,
  h2Textcolor = "black",
  descriptionClolor = "gray",
  className = "",
}) => {
  // Alignment classes
  const alignmentClasses = {
    start: "text-left items-start",
    center: "text-center items-center",
    end: "text-right items-end",
  };

  return (
    <div
      className={`flex flex-col ${alignmentClasses[alignment]} gap-2 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="flex justify-center">
          <span
            className="inline-block py-2 px-5 rounded-full font-bold text-sm md:text-base"
            style={{
              backgroundColor: badgeColor || "#3D282D",
              color: badgeTextColor || "#FA4533",
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="font-apache text-[#323232] text-2xl md:text-lg lg:text-7xl font-bold leading-tight max-w-7xl"
        style={{ color: h2Textcolor }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="text-base md:text-lg text-gray-500 max-w-3xl "
          style={{ color: descriptionClolor }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
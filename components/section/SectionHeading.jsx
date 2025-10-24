import React from 'react';

const SectionHeading = ({
  badge,
  title,
  description,
  alignment = 'center',
  badgeColor = '#5BBF31',
  badgeTextColor = 'black',
  h2Textcolor = 'black',
  descriptionClolor = 'gray',
  className = ''
}) => {
  // Alignment classes
  const alignmentClasses = {
    start: 'text-left items-start',
    center: 'text-center items-center',
    end: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} gap-2 ${className}`}>
      {/* Badge */}
      {badge && (
        <div className="flex justify-center">
          <span
            className="inline-block py-2 px-5 rounded-full font-bold text-sm md:text-base"
            style={{
              backgroundColor: badgeColor,
              color: badgeTextColor
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="font-apache text-2xl md:text-lg lg:text-4xl font-bold leading-tight max-w-4xl"
        style={{ color: h2Textcolor }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="text-base md:text-lg text-gray-500 max-w-3xl mt-1"
          style={{ color: descriptionClolor }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
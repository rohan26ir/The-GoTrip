'use client';
import React from 'react';
import testion from '../../../../public/icon/testimonial-icon.svg';

const TestimonialCard = ({ TestiCard }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TestiCard.map((card, index) => (
        <div
          key={card.id}
          className="relative group transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
        >
          <div
            className="w-full min-h-[200px] flex flex-col justify-between border border-gray-200 p-6 rounded-xl bg-white relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full" />
            
            {/* Quote icon */}
            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img 
                src={testion.src} 
                alt="testimonial icon" 
                className="w-8 h-8 text-blue-500" 
              />
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 mb-6 leading-relaxed text-lg transition-all duration-300 group-hover:text-gray-900">
              "{card.testimonial}"
            </p>

            {/* Default Rating stars - hidden on hover */}
            <div className="flex mb-4 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 transition-colors duration-300 ${i < card.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>

            {/* Social icon - shown on hover */}
            <div className="absolute bottom-20 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="text-sm font-medium">{card.social}</span>
              </div>
            </div>

            {/* User info */}
            <div className="flex items-center transition-all duration-300 group-hover:transform group-hover:translate-x-2">
              <img 
                src={card.img.src} 
                alt={card.name} 
                className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-200" 
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {card.name}
                </h4>
                <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800">
                  {card.position}
                </p>
              </div>
            </div>

            {/* Floating rating badge - shown on hover */}
            <div className="absolute top-1 right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-lg opacity-0 transform scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
              <div className="flex items-center gap-1 text-sm font-bold">
                <span>{card.rating}.0</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
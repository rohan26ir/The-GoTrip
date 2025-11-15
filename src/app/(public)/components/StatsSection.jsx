'use client';
import React from 'react';
import SectionHeading from '../../../../components/section/SectionHeading';
import Counter from '../../../../components/dynamic/Counter';

const StatsSection = () => {

  const statsData = [
    { id: 1, symble:'K+', time:6000, number: '50', label: 'Travelers Served' },
    { id: 2, symble:'+',  time:6000, number: '150', label: 'Destinations Explored' },
    { id: 3, symble:'+',  time:3000, number: '98', label: 'Customer Satisfaction' },
    // { id: 4, number: '24/7', label: 'Support Availability' },
  ];

  return (
    <div>
      <div className="w-full max-w-[1700px] mx-auto my-10">
        {/* Heading
        <SectionHeading
          badge="Stats"
          title="Our Impact in Numbers"
          description="Discover the milestones we've achieved together. From travelers served to destinations explored, see how we're making a difference."
          alignment="center"
          badgeColor="#5BBF31"
          badgeTextColor="black"
          h2Textcolor="#323232"
          descriptionClolor="gray"
          className="mb-10 md:mb-10 lg:mb-14"
        /> */}


        {/* Stats Grid */}
        <div className="p-2 container mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 text-center border-2">

            {
              statsData.map((stat) => (
                <div key={stat.id} className="bg-[#3D282D] w-[100%] rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <h3 className="flex gap-2 font-apache text-7xl font-bold mb-2">
                    <Counter Number={stat.number} duration={stat.time}></Counter> {stat.symble}
                  </h3>  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-100">{stat.label}</p>
                </div>
              ))
            }
        
            

          </div>
        </div>

        </div>
    </div>
  );
};

export default StatsSection;
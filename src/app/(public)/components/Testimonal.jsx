'use client';
import React from 'react';
import SectionHeading from '../../../../components/section/SectionHeading';
import Image from 'next/image';

// Image import
import image1 from '../../../../public/people/people1.jpg';
import image2 from '../../../../public/people/people2.jpg';
import image3 from '../../../../public/people/people1.jpg';
import image4 from '../../../../public/people/people3.jpg';
import TestimonialCard from './TestimonialCard';


const Testimonal = () => {
  const Images1 = [
    { id: 1, img: image1, class: "absolute left-0 -top-5", title: "John Doe" },
    { id: 2, img: image2, class: "absolute left-[15%] -top-20", title: "Jane Smith" },

    { id: 3, img: image3, class: "absolute right-0 -top-5", title: "Michael Lee" },
    { id: 4, img: image4, class: "absolute right-[30%] -top-20", title: "Emily Johnson" },
  ];

  const Images2 = [
    { id: 1, img: image3, class: "mt-36", title: "David Brown" },
    { id: 2, img: image2, class: "mt-24", title: "Sophia White" },
    { id: 3, img: image1, class: "mt-20", title: "Chris Evans" },

    { id: 4, img: image3, class: "mt-0", title: "David Brown" },
    { id: 5, img: image2, class: "mt-10", title: "Sophia White" },
    { id: 6, img: image1, class: "mt-0", title: "Chris Evans" },

    { id: 7, img: image3, class: "mt-20", title: "David Brown" },
    { id: 8, img: image2, class: "mt-24", title: "Sophia White" },
    { id: 9, img: image1, class: "mt-36", title: "Chris Evans" },
  ];


  const TestiCards = [
    {id: 1, name: "Sarah Johnson", position: "Adventure Traveler", 
      img: image1, rating: 5, social: "@sarah_adventures",
      testimonial: "Best tour experience ever! Unforgettable memories."},
    {id: 2, name: "Mike Chen", position: "Family Traveler", 
      img: image2, rating: 4, social: "@mikeexplores",
      testimonial: "Perfect family vacation. Kids loved it!"},
    {id: 3, name: "Elena Rodriguez", position: "Solo Traveler", 
      img: image3, rating: 5, social: "@elenatravels",
      testimonial: "Amazing guides and breathtaking views."},
    {id: 4, name: "James Wilson", position: "Photography Enthusiast", 
      img: image4, rating: 4, social: "@jamestravelshots",
      testimonial: "Perfect spots for photography. Highly recommend!"},
    {id: 5, name: "Lisa Thompson", position: "Honeymooner", 
      img: image1, rating: 5, social: "@lisatravels",
      testimonial: "Romantic and magical honeymoon tour."},
    {id: 6, name: "Alex Kumar", position: "Backpacker", 
      img: image2, rating: 4, social: "@alexontour",
      testimonial: "Great value and authentic experiences."}
  ]

  
  return (
    <div className="py-16 container mx-auto">
      

      {/* Image Grid */}
      <div className="flex flex-col items-center gap-1">
        {/* 1st image row */}
        <div className='relative w-full flex justify-between '>
          <div className="flex justify-start w-full gap-6">
          {Images1.slice(0,2).map((image) => (
            <div key={image.id} className={`relatiove ${image.class}`}>
              <Image
                src={image.img}
                alt={image.title}
                className="h-40 w-32 rounded-lg object-cover rounded-0 shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="relative flex justify-end w-full gap-6 ">
          {Images1.slice(2,4).map((image) => (
            <div key={image.id} className={`${image.class}`}>
              <Image
                src={image.img}
                alt={image.title}
                className="h-40 w-32 rounded-lg object-cover rounded-0 shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        </div>

        {/* 2nd image row */}
        <div className="flex justify-center gap-6">
          {Images2.map((image) => (
            <div key={image.id} className={image.class}>
              <Image
                src={image.img}
                alt={image.title}
                className="h-40 w-32 rounded-lg object-cover rounded-0 shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>



      {/* Section Head */}
      <SectionHeading
        badge="Testimonial"
        title="What People Say About Us"
        description="Find out what our happy clients are saying about our services and experiences."
        alignment="center"
        badgeColor="#5BBF31"
        badgeTextColor="black"
        h2Textcolor="#323232"
        descriptionClolor="gray"
        className="mb-16"
      />


      {/* Testimonial Card compo */}

      <TestimonialCard 
        TestiCard={TestiCards}
      >

      </TestimonialCard>



    </div>
  );
};

export default Testimonal;
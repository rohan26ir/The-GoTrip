'use client';

import Lottie, { LottiePlayer } from 'lottie-react';
import React from 'react';
import mapAnimation from '../../../../public/lottie/World-map.json'
import SectionHeading from '../../../../components/section/SectionHeading';

const Worldmap = () => {
  return (
    <div>
      <div>
        <SectionHeading
          badge='Global Reach'
          title='Explore Our Worldwide Presence'

         />

        <div>
          <Lottie
            animationData={mapAnimation}
            speed={0.1}
            loop={true}
            autoplay={true}
            className="h-[550px] w-auto"
            />

        </div>
      </div>
    </div>
  );
};

export default Worldmap;
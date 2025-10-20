import React from 'react';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';
import OurTourActivities, { MarqueeDemo } from '../../../components/marquee/OurTourActivities';

const page = () => {
  return (
    <div>

      <section>
        <Hero></Hero>
      </section>


      <section>
        <MarqueeDemo></MarqueeDemo>
      </section>




      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default page;
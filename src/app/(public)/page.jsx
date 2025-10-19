import React from 'react';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';

const page = () => {
  return (
    <div>

      <section>
        <Hero></Hero>
      </section>




      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default page;
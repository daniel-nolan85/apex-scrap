import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Banner = () => {
  return (
    <section className='home' id='home'>
      <h1>find your car</h1>
      <Link to='#contact' className='btn'>
        Enquire Today
      </Link>
    </section>
  );
};

export default Banner;

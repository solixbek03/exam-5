import React from 'react';
import Hero from './Heroo';
import Navbar from './Navbar';

const CenterMain = () => {
  return (
    <div className='d-flex container-fluid'>
      <Navbar />

      <Hero />
    </div>
  );
}

export default CenterMain;

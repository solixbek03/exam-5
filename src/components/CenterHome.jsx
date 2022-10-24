import React from 'react';
import Hero from './Heroo';
import Navbar from './Navbar';

const CenterHome = () => {
  return (
    <div className='d-flex container-fluid'>
      <Navbar />

      <Hero />
    </div>
  );
}

export default CenterHome;

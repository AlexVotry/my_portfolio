import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import Greeting from './Greeting';
import CarouselBar from './CarouselBar';

const Landing = () => {
  return (
    <div className="container">
      <Greeting />
      <ProjectCarousel />
      <CarouselBar />
    </div>
  )
}

export default Landing;
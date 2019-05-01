import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import Greeting from './Greeting';
import CarouselBar from './CarouselBar';
import { Image, Transformation } from 'cloudinary-react';

const Landing = () => {

  return (
    <div className="container">
      <div className="bike">
        <Image cloudName="aleximages" publicId="qzz02a5yh3ilplr4ioiy.jpg">
          <Transformation width="300" height="400" />
        </Image>
      </div>
      <Greeting />
      <ProjectCarousel />
      <CarouselBar />
    </div>
  )
}

export default Landing;
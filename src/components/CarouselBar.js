import React from 'react';
import { Link } from 'react-router-dom';

const CarouselBar = () => {
  return (
    <>
      <div className="carouselBar">
        <div className="text">Featured</div>
      </div>
      <div className="boldProjects">Projects</div>
      <div className="listLink">If you'd like to see them <Link to ={'/list'}>listed</Link></div>
    </>
  )
}

export default CarouselBar;
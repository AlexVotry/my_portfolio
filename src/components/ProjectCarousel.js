import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { sliderSettings } from '../sliderSettings';

class ProjectCarousel extends React.Component {

  renderImages() {
    const numbers = [1,2,3,4,5,6,7];
    return numbers.map(num => <div><h3>{num}</h3></div>);
  }
  render() {
    var settings = sliderSettings;

    return (
      <Slider {...settings}>
        {this.renderImages()}
      </Slider>
    );
  }
}

export default ProjectCarousel;

import React from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import "../slickSlider/slick.css";
import "../slickSlider/slick-theme.css";
import { sliderSettings } from '../slickSlider/sliderSettings';

class ProjectCarousel extends React.Component {
  state = { gallery: [] };
  
  async getProjects() {
    const res = await axios.get('http://res.cloudinary.com/aleximages/image/list/projects.json');
    console.log(res.data.resources);
    this.setState({ gallery: res.data.resources });
  }

  componentDidMount() {
    this.getProjects();
  }

  renderImages() {
    const { gallery } = this.state;

   return (
    gallery.map((data, index) => {
      return (
        <CloudinaryContext key={data.public_id} cloudName="aleximages">
          <div className="imageBackground">
          <Image className="productImage" publicId={data.public_id} format="png">
            <Transformation crop="pad" width="150" height="150" />
          </Image>
        </div>
      </CloudinaryContext>
      );
    })
   );
  }
  render() {
    var settings = sliderSettings;

    return (
        <div className="carousel">
          <Slider {...settings}>
            {this.renderImages()}
          </Slider>
        </div>
    );
  }
}

export default ProjectCarousel;

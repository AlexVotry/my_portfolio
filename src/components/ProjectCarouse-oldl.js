import React from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import "../slickSlider/slick.css";
import "../slickSlider/slick-theme.css";
import { sliderSettings } from '../slickSlider/sliderSettings';
import { Link } from 'react-router-dom';

class ProjectCarousel extends React.Component {
  state = { gallery: [] };
  
  async getProjects() {
    const res = await axios.get('http://res.cloudinary.com/aleximages/image/list/projects.json');
    this.setState({ gallery: res.data.resources });
  }

  componentDidMount() {
    this.getProjects();
  }

  renderImages() {
    const { gallery } = this.state;
    console.log('gallery:', gallery);
    
   return (
    gallery.map((data, index) => {
      return (
        <CloudinaryContext key={data.public_id} cloudName="aleximages">
          <div className="imageBackground">
          <Link to="/video"><Image className="productImage" publicId={data.public_id} format="png">
            <Transformation crop="pad" width="150" height="150" />
            </Image></Link>

            {/* <div className="links">
              <a href={image.context.custom.github}><img className="github" src={github} alt="gitHub" /></a>
              <button onClick={() => setVideoId(image.context.custom.videoId)}><img className="playButton" src={playButton} alt="play button" /></button>
            </div> */}
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

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import "../slickSlider/slick.css";
import "../slickSlider/slick-theme.css";
import { sliderSettings } from '../slickSlider/sliderSettings';
import ModalVideo from 'react-modal-video'
import github from '../assets/github.svg';
import playButton from '../assets/playButton.svg';

const ProjectCarousel2 = () => {
  const [gallery, setGallery] = useState([]);
  const [videoId, setVideoId] = useState(undefined);

  const getProjects =  async () => {
    const res = await axios.get('http://res.cloudinary.com/aleximages/image/list/projects.json');
    setGallery(res.data.resources);
  }
  
  useEffect(() => {
    getProjects();
  }, [videoId]);
  
  const renderImages = () =>{
    console.log('gallery:',gallery);
    return (
      gallery.map(image => {
        return (
          <CloudinaryContext key={image.public_id} cloudName="aleximages">
            <div className="projectBlocks">
              <div className="title">{image.context.custom.alt}</div>
              <Image className="projectImage" publicId={image.public_id} format="png">
                <Transformation crop="pad" width="150" height="100" />
              </Image>
              <div className="links">
                <a href={image.context.custom.github}><img className="github" src={github} alt="gitHub" /></a>
                <button onClick={() => setVideoId(image.context.custom.videoId)}><img className="playButton" src={playButton} alt="play button"/></button>
              </div>
            </div>
          </CloudinaryContext>
        );
      })
    );
  }

  const renderModal = (videoId) => {
    if (videoId === undefined) {
      return;
    } else {
      return (
        <div className="videoModal">
          <ModalVideo channel='vimeo' isOpen='true' videoId={videoId} onClose={() =>setVideoId(undefined)} />
        </div>
      )
    }
  }

  return (
    <div className="carousel">
      <div className="videoModal">
      {renderModal(videoId)}
      </div>
      <Slider {...sliderSettings}>
        {renderImages()}
      </Slider>
    </div>
  );

}

  export default ProjectCarousel2;
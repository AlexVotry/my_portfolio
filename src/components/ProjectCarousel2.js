import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { sliderSettings } from '../utils/sliderSettings';
import ModalVideo from 'react-modal-video'
import LinkButtons from "./LinkButtons";

const ProjectCarousel2 = () => {
  const [gallery, setGallery] = useState([]);
  const [videoId, setVideoId] = useState(undefined);

  const getProjects =  async () => {
    const res = await axios.get('http://res.cloudinary.com/aleximages/image/list/projects.json');
    setGallery(res.data.resources);
  }

  const onClick = (id) => {
    setVideoId(id);
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
              <LinkButtons image={image} onClick={onClick}/>
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
      {renderModal(videoId)}
      <Slider {...sliderSettings}>
        {renderImages()}
      </Slider>
    </div>
  );

}

  export default ProjectCarousel2;
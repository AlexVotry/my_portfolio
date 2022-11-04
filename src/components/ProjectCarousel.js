import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { sliderSettings } from '../utils/sliderSettings';
import LinkButtons from "./LinkButtons";
import Videos from './Videos';

const ProjectCarousel = () => {
  const [gallery, setGallery] = useState([]);
  const [videoId, setVideoId] = useState(undefined);

  const getProjects =  async () => {
    const res = await axios.get('https://res.cloudinary.com/aleximages/image/list/projects.json');
    setGallery(res.data.resources);
  }

  const getVideoId = (id) => {
    setVideoId(id);
  }

  useEffect(() => {
    getProjects();
  }, [videoId]);

  const renderImages = () => {
    return (
      gallery.map(image => {
        const title = image.context.custom.caption;
        let titleClass = title.length < 16 ? 'title' : 'title-small';

        return (
          <CloudinaryContext key={image.public_id} cloudName="aleximages" className="cloud-wrapper">
            <div className="projectBlocks">
              <div className={titleClass}>{title}</div>
              <Image className="projectImage" publicId={image.public_id} format="png">
                <Transformation crop="pad" width="150" height="100" />
              </Image>
              <LinkButtons image={image} onClick={getVideoId}/>
            </div>
          </CloudinaryContext>
        );
      })
    );
  }

  return (
    <div className="carousel">
      <Videos closeModal={getVideoId} videoId={videoId} />
      <Slider {...sliderSettings}>
        {renderImages()}
      </Slider>
    </div>
  );

}

  export default ProjectCarousel;

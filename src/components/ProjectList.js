import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import LinkButtons from "./LinkButtons";
import Videos from './Videos';
import Banner from './Banner';

const ProjectList = () => {
  const [gallery, setGallery] = useState([]);
  const [videoId, setVideoId] = useState(undefined);

  const getProjects = async () => {
    const res = await axios.get('https://res.cloudinary.com/aleximages/image/list/projects.json');
    setGallery(res.data.resources);
  }

  const getVideoId = (id) => {
    setVideoId(id);
  }

  const renderText = (text) => {
    if(!text) {
      return null;
    }
    return <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>
  }

  useEffect(() => {
    getProjects();
  }, [videoId]);

  const renderImages = () => {
    return (
      gallery.map(image => {
        return (
          <CloudinaryContext className="projectWrapper" key={image.public_id} cloudName="aleximages">
            <div className="projects">
              <div className="titleWrapper">
                <LinkButtons image={image} onClick={getVideoId} />
                <h3 className="title">{image.context.custom.caption}</h3>
              </div>
              <div className="content">
                <div className="projectImage">
                  <Image publicId={image.public_id} format="png">
                    <Transformation crop="pad" width="300" height="200" />
                  </Image>
                </div>
                {renderText(image.context.custom.content)}
              </div>
            </div>
          </CloudinaryContext>
        );
      })
    );
  }

  return (
    <div className="projectList">
      <Banner />
      <Videos closeModal={getVideoId} videoId={videoId} />
      <div className="listWrapper">
      {renderImages()}
      </div>
    </div>
  );

}

export default ProjectList; 
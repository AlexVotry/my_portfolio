import React from 'react';
import github from '../assets/github.svg';
import playButton from '../assets/playButton.svg';

const LinkButtons = (props) => {
  console.log('props:', props.image.context.custom.github);

const onClick = (id) => {
  props.onClick(id);
}

  return (
    <div className="links">
      <a href={props.image.context.custom.github} target="_bland" rel="noopener"><img className="github" src={github} alt="gitHub" /></a>
      <button onClick={() => onClick(props.image.context.custom.videoId)}><img className="playButton" src={playButton} alt="play button" /></button>
    </div>
  )
}

export default LinkButtons;
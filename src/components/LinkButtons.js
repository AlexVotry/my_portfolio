import React from 'react';
import github from '../assets/github.svg';
import playButton from '../assets/playButton.svg';

const LinkButtons = (props) => {
  const gitHubUrl = props.image.context.custom.github;
  const videoId = props.image.context.custom.videoId;

  const checkForGitHub = (ghUrl) => {
    if (ghUrl === undefined) return null;
    return <a href={ghUrl} target="_bland" rel="noopener"><img className="github" src={github} alt="gitHub" /></a>
  }

  const checkForVideoId = (id) => {
    if (id === undefined) return null;
    // return <PlayButton onClick={() => props.onClick(videoId)} />
    return <button onClick={() => props.onClick(videoId)}><img className="playButton" src={playButton} alt="play button" /></button>
  }

  return (
    <div className="links">
      {checkForGitHub(gitHubUrl)}
      {checkForVideoId(videoId)}
    </div>
  )
}

export default LinkButtons;
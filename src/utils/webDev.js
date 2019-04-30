import React from 'react';
import anime from 'animejs';

export const webDev = () => {
  anime.timeline({ loop: false })
    .add({
      targets: '.webdev .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1000,
      delay: function (el, i) {
        return 600 * (i + 1)
      }
    }).add({
      targets: '.webdev .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 5000,
      offset: '-=875',
      delay: function (el, i, l) {
        return 20 * (l - i);
      }
    });
};

export const createWebDev = () => {
  const webDev = "WEB*APP*DEVELOPER";
  
  return webDev.split('').map((letter, index) => {
    if (letter === '*') return <span key={index} style={{ color: '#fff' }} className='letter'>{letter}</span>
    
    return (
      <span key={index} className='letter'>{letter}</span>
    );
  })
}
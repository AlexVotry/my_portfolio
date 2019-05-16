import anime from 'animejs';


export const myName = () => {

  const letterTime = 3000;

  anime({
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: letterTime,
    delay: function (el, i) {
      return letterTime * i;
    },
    direction: 'alternate',
    loop: 2.5,
    begin: function (anim) {
      let letters = document.querySelectorAll("path"),
        i;

      for (i = 0; i < letters.length; ++i) {
        letters[i].setAttribute("stroke", "#709c49");
        letters[i].setAttribute("fill", "none");
      }
    },
  });
}

export const resizeSvg = (size) => {
  const d = {};
  if ( size <= 435) {
    d.w = '100';
    d.h = '100';
    d.vb = '0 0 600 600';
  } else if ( size < 830 & size > 435) {
    d.w = '200';
    d.h = '100';
    d.vb = '100 0 200 300';
  } else {
    d.w = '200';
    d.h = '100';
    d.vb = '100 0 200 300';
  }
  return d;
}

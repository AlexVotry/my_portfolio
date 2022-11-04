

export default function PlayButton({onClick}) {
  return (
    <svg
      className="playButton"
      style={{ width: "30", height: "30" }}
      viewBox="0 0 108 108"
      onClick={() => onClick()}
    >
      <path
        fill="#6141ff"
        stroke="#6141ff"
        strokeWidth="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 32.304015,18.978479 c 0.679048,67.740397 0.679048,67.740397 0.679048,67.740397 L 95.22895,53.434667 v 0 z"
        id="path4545"
      />
      <ellipse
        fill="none"
        stroke="#6141ff"
        strokeWidth="5.04420614"
        strokeMiterlimit="4"
        strokeDasharray="none"
        strokeOpacity="1"
        id="path4539"
        cx="53.988445"
        cy="52.982922"
        rx="50.206879"
        ry="49.939606"
      />
    </svg>
  );
}
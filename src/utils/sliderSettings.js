export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // beforeChange: (oldIndex, newIndex) => {
  //   const prevDisabled = newIndex === 0;
  //   const nextDisabled = newIndex === this.slideCount - 1;
  //   this.setState({ ...this.state, prevDisabled, nextDisabled });
  // },
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

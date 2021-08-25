type imgCarousel = {
  srcImg: string;
};

type CarouselProps = {
  srcImg: imgCarousel;
  imgAlt: string;
  heading: string;
  paragraph: string;
};

export type HomeCarouselProps = {
  carousel: CarouselProps[];
};

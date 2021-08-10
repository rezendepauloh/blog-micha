import { useState } from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';

export type CarouselProps = {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  paragraph: string;
};

export type HomeCarouselProps = {
  carousel: CarouselProps[];
};

export function HomeCarousel({ carousel }: HomeCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Styled.Carousel fade activeIndex={index} onSelect={handleSelect}>
      {carousel.map((c, index) => {
        const key = `${index}-${c.imgAlt}`;
        const imgsrc = `${c.imgSrc}`;
        const imgalt = `${c.imgAlt}`;
        return (
          <Styled.Item key={key}>
            <img className="d-block w-100" src={imgsrc} alt={imgalt} />
            <Styled.Caption>
              <Heading uppercase as="h3" size="huge" colorDark={false}>
                {c.heading}
              </Heading>
              <p>{c.paragraph}</p>
            </Styled.Caption>
          </Styled.Item>
        );
      })}
    </Styled.Carousel>
  );
}

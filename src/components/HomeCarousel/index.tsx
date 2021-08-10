import { useState } from 'react';
import * as Styled from './styles';

export type HomeCarouselProps = {
  //title?: string;
};

//export function HomeCarousel({ title = 'Change-me' }: HomeCarouselProps) {
export function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Styled.Carousel activeIndex={index} onSelect={handleSelect}>
      <Styled.Item>
        <img
          className="d-block w-100"
          src="assets/images/carousel01.jpg"
          alt="First slide"
        />
        <Styled.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Styled.Caption>
      </Styled.Item>
      <Styled.Item>
        <img
          className="d-block w-100"
          src="assets/images/carousel02.jpg"
          alt="Second slide"
        />

        <Styled.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Styled.Caption>
      </Styled.Item>
      <Styled.Item>
        <img
          className="d-block w-100"
          src="assets/images/carousel03.jpg"
          alt="Third slide"
        />

        <Styled.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Styled.Caption>
      </Styled.Item>
    </Styled.Carousel>
  );
}

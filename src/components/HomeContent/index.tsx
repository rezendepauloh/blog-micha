import * as Styled from './styles';
import { HomeCarousel, CarouselProps } from '../HomeCarousel';
import { HomeSpecialties, HomeSpecialtiesProps } from '../HomeSpecialties';

export type HomeContentProps = {
  carousel: CarouselProps[];
  specialties: HomeSpecialtiesProps;
};

export function HomeContent({ carousel, specialties }: HomeContentProps) {
  return (
    <Styled.Container fluid>
      <HomeCarousel carousel={carousel} />
      <HomeSpecialties {...specialties} />
    </Styled.Container>
  );
}

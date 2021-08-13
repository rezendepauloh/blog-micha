import * as Styled from './styles';
import { HomeCarousel, HomeCarouselProps } from '../HomeCarousel';
import { HomeSpecialties, HomeSpecialtiesProps } from '../HomeSpecialties';
import { HomePostGrid, HomePostGridProps } from '../HomePostGrid';

export type HomeContentProps = {
  carousel: HomeCarouselProps;
  specialties: HomeSpecialtiesProps;
  posts: HomePostGridProps;
};

export function HomeContent({
  carousel,
  specialties,
  posts,
}: HomeContentProps) {
  return (
    <Styled.Container fluid>
      <HomeCarousel {...carousel} />
      <HomeSpecialties {...specialties} />
      <HomePostGrid {...posts} />
    </Styled.Container>
  );
}

import * as Styled from './styles';
import { HomeCarousel, HomeCarouselProps } from 'components/HomeCarousel';
import {
  HomeSpecialties,
  HomeSpecialtiesProps,
} from 'components/HomeSpecialties';
import { HomePostGrid, HomePostGridProps } from 'components/HomePostGrid';
import { HeaderGridProps } from 'components/HeaderGrid';
import { FooterGridProps } from 'components/FooterGrid';
import { Base } from '../Base';

export type HomeTemplateProps = {
  carousel: HomeCarouselProps;
  specialties: HomeSpecialtiesProps;
  posts: HomePostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

export function HomeTemplate({
  carousel,
  specialties,
  posts,
  header,
  footer,
}: HomeTemplateProps) {
  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <HomeCarousel {...carousel} />
        <HomeSpecialties {...specialties} />
        <HomePostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

import { HomeCarouselProps } from 'components/HomeCarousel/type';
import { HomeSpecialtiesProps } from 'components/HomeSpecialties/type';
import { HomePostGridProps } from 'components/HomePostGrid/type';
import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type HomeTemplateProps = {
  carousel: HomeCarouselProps;
  specialties: HomeSpecialtiesProps;
  posts: HomePostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

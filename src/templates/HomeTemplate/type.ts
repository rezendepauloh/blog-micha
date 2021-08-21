import { HomeCarouselProps } from 'components/HomeCarousel/type';
import { HomeSpecialtiesProps } from 'components/HomeSpecialties/type';
import { PostGridProps } from 'components/PostGrid/type';
import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type HomeTemplateProps = {
  carousel: HomeCarouselProps;
  specialties: HomeSpecialtiesProps;
  posts: PostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

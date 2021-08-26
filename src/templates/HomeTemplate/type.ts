import { HomeCarouselProps } from 'components/HomeCarousel/type';
import { HomeSpecialtiesProps } from 'components/HomeSpecialties/type';
import { PostGridProps } from 'components/PostGrid/type';
import { BaseStrapi } from 'templates/Base/type';

export type HomeTemplateProps = {
  carousel: HomeCarouselProps;
  specialties: HomeSpecialtiesProps;
  posts: PostGridProps;
  base: BaseStrapi;
};

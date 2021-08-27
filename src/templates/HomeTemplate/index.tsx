import * as Styled from './styles';
import { HomeCarousel } from 'components/HomeCarousel';
import { HomeSpecialties } from 'components/HomeSpecialties';
import { PostGrid } from 'components/PostGrid';
import { Base } from '../Base';

import { HomeTemplateProps } from './type';

export function HomeTemplate({
  carousel,
  specialties,
  posts,
  base,
}: HomeTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <HomeCarousel carousel={carousel} />
        <HomeSpecialties {...specialties} />
        <PostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

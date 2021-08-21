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
  header,
  footer,
}: HomeTemplateProps) {
  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <HomeCarousel {...carousel} />
        <HomeSpecialties {...specialties} />
        <PostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

import * as Styled from './styles';
import { HomePostGrid } from 'components/HomePostGrid';
import { Base } from 'templates/Base';

import { PostsTemplateProps } from './type';

export function PostsTemplate({ posts, header, footer }: PostsTemplateProps) {
  //Mesclar a forma do react course-1 com React-Course-6

  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <HomePostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

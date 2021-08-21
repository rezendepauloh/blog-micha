import * as Styled from './styles';

import { PostGrid } from 'components/PostGrid';
import { Base } from 'templates/Base';

import { PostsTemplateProps } from './type';

export function PostsTemplate({ posts, header, footer }: PostsTemplateProps) {
  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <PostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

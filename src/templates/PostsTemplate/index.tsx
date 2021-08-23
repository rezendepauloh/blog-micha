import * as Styled from './styles';

import { PostGrid } from 'components/PostGrid';
import { Base } from 'templates/Base';
import { Heading } from 'components/Heading';

import { PostsTemplateProps } from './type';

export function PostsTemplate({ posts, header, footer }: PostsTemplateProps) {
  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Publicações
          </Heading>
        </Styled.TitleContainer>
        <PostGrid {...posts} />
      </Styled.Container>
    </Base>
  );
}

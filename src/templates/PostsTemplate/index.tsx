import * as Styled from './styles';

import { PostList } from 'components/PostList';
import { Base } from 'templates/Base';
import { Heading } from 'components/Heading';

import { PostsTemplateProps } from './type';

export function PostsTemplate({
  posts,
  categories = [],
  base,
}: PostsTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Publicações
          </Heading>
        </Styled.TitleContainer>
        <PostList {...posts} categories={categories} title={posts.title} />
      </Styled.Container>
    </Base>
  );
}

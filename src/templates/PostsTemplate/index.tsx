import * as Styled from './styles';

import { PostList } from 'components/PostList';
import { Base } from 'templates/Base';
import { Heading } from 'components/Heading';

import { PostsTemplateProps } from './type';

export function PostsTemplate({
  title = '',
  posts,
  postsTotal = [],
  categories = [],
  authors = [],
  tags = [],
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
        <PostList
          posts={posts}
          postsTotal={postsTotal}
          categories={categories}
          authors={authors}
          tags={tags}
          title={title}
        />
      </Styled.Container>
    </Base>
  );
}

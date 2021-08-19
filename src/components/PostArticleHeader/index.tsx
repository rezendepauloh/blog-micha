import { PostArticleMeta } from 'components/PostArticleMeta';
import { Heading } from 'components/Heading';
import * as Styled from './styles';

import { PostArticleHeaderProps } from './type';

export const PostArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: PostArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />
      <PostArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};

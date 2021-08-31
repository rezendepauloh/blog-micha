import { PostArticleMeta } from 'components/PostArticleMeta';
import { Heading } from 'components/Heading';
import * as Styled from './styles';
import { createExcerpt } from 'utils/create-excerpt';

import { PostArticleHeaderProps } from './type';

export const PostArticleHeader = ({
  title,
  content,
  cover,
  author,
  category,
  createdAt,
}: PostArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{createExcerpt(content)}</Styled.Excerpt>
      <Styled.Cover src={cover.srcImg} alt={title} />
      <PostArticleMeta
        category={category}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};

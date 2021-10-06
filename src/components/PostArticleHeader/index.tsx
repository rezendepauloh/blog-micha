import * as Styled from './styles';

import { PostArticleMeta } from 'components/PostArticleMeta';
import { Heading } from 'components/Heading';

import { createExcerpt } from 'utils/create-excerpt';

import { PostArticleHeaderProps } from './type';

export const PostArticleHeader = ({
  title,
  content,
  cover = null,
  author,
  category,
  created_at,
}: PostArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{createExcerpt(content)}</Styled.Excerpt>
      {cover != null && (
        <Styled.Cover
          src={cover.srcImg}
          alt={cover.alternativeText ? cover.alternativeText : title}
        />
      )}
      <PostArticleMeta
        category={category}
        author={author}
        created_at={created_at}
      />
    </Styled.Wrapper>
  );
};

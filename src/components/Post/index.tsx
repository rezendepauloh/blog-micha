import { PostArticleHeader } from 'components/PostArticleHeader';
import { PostContent } from 'components/PostContent';
import { PostContainer } from 'components/PostContainer';
import * as Styled from './styles';

import { PostProps } from './type';

export const Post = ({
  title,
  author,
  category,
  content,
  cover,
  created_at,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <PostArticleHeader
          author={author}
          category={category}
          title={title}
          content={content}
          id={id}
          cover={cover}
          created_at={created_at}
        />
      </PostContainer>

      <PostContainer size="content">
        <PostContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};

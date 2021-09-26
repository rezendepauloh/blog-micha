import * as Styled from './styles';

import { useEffect } from 'react';

import { PostArticleHeader } from 'components/PostArticleHeader';
import { PostContent } from 'components/PostContent';
import { PostContainer } from 'components/PostContainer';

import { PostProps } from './type';

import AnchorJS from 'anchor-js';

export const Post = ({
  title,
  author,
  category,
  content,
  cover,
  created_at,
  id,
}: PostProps) => {
  //Para resolver a adição do id no h2 e h3 depois da página estar carregada
  //https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi
  //https://stackoverflow.com/questions/52344726/how-to-dynamicly-add-class-and-id-to-specific-tag-using-javascript-jquery
  useEffect(() => {
    const anchors = new AnchorJS();
    anchors.add('.contentClass h2, .contentClass h3, .contentClass h4');
  }, []);

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

      <PostContainer size="content" className="contentClass">
        <PostContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};

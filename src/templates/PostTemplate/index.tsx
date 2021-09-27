import * as Styled from './styles';

import { useEffect } from 'react';

import { Base } from 'templates/Base';

import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import { Heading } from 'components/Heading';
import { TableOfContents } from 'components/TableOfContents';

import AnchorJS from 'anchor-js';

import { PostTemplateProps } from './type';

export function PostTemplate({ post, base }: PostTemplateProps) {
  //Para resolver a adição do id no h2 e h3 depois da página estar carregada
  //https://dev.to/typicoul/fixing-next-js-referenceerror-document-is-not-defined-2jgi
  //https://stackoverflow.com/questions/52344726/how-to-dynamicly-add-class-and-id-to-specific-tag-using-javascript-jquery
  useEffect(() => {
    const anchors = new AnchorJS();
    anchors.add('.contentClass h2, .contentClass h3, .contentClass h4');
  }, []);

  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Styled.TitleContainer>
          <Heading as="h1" colorDark={false} size="medium" uppercase>
            Publicações
          </Heading>
        </Styled.TitleContainer>

        <Styled.Row xs={1} sm={1} md={12} lg={12}>
          <Styled.Col
            xs={{ order: 'first' }}
            md={12}
            lg={{ span: 2, order: 'last' }}
          >
            <TableOfContents />
          </Styled.Col>

          <Styled.Col md={12} lg={{ span: 10, order: 'first' }}>
            <Post {...post} />

            <Styled.TagsContainer>
              <PostTags tags={post.tags} />
            </Styled.TagsContainer>
          </Styled.Col>
        </Styled.Row>
      </Styled.Container>
    </Base>
  );
}

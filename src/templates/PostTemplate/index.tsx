import * as Styled from './styles';

import { Base } from 'templates/Base';

import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import { Heading } from 'components/Heading';
import { TableOfContents } from 'components/TableOfContents';

import { PostTemplateProps } from './type';

export function PostTemplate({ post, base }: PostTemplateProps) {
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

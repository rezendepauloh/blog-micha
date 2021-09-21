import * as Styled from './styles';

import { Base } from 'templates/Base';

import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import { Heading } from 'components/Heading';

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
        <Post {...post} />

        <Styled.TagsContainer>
          <PostTags tags={post.tags} />
        </Styled.TagsContainer>
      </Styled.Container>
    </Base>
  );
}

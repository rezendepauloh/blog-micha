import * as Styled from './styles';

import { Post } from 'components/Post';
import { Base } from 'templates/Base';

import { PostTemplateProps } from './type';

export function PostTemplate({ post, base }: PostTemplateProps) {
  return (
    <Base base={base}>
      <Styled.Container fluid>
        <Post {...post} />
      </Styled.Container>
    </Base>
  );
}

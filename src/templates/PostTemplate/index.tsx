import * as Styled from './styles';

import { Post } from 'components/Post';
import { Base } from 'templates/Base';

import { PostTemplateProps } from './type';

export function PostTemplate({ post, header, footer }: PostTemplateProps) {
  return (
    <Base header={header} footer={footer}>
      <Styled.Container fluid>
        <Post {...post} />
      </Styled.Container>
    </Base>
  );
}

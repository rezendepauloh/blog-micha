import * as Styled from './styles';

import { PostContentProps } from './type';

export const PostContent = ({ html }: PostContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

import * as Styled from './styles';

import { TextComponentProps } from './type';

export const TextComponent = ({ children }: TextComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

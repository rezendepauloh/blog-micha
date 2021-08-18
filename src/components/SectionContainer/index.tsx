import * as Styled from './styles';

import { SectionContainerProps } from './type';

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

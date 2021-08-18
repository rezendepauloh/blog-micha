import * as Styled from './styles';

import { CloneMeProps } from './type';

export function CloneMe({ title = 'Change-me' }: CloneMeProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}

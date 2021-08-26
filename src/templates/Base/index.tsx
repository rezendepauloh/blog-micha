import * as Styled from './styles';
import { HeaderGrid } from 'components/HeaderGrid';
import { FooterGrid } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

import { BaseProps } from './type';

export const Base = ({ base, children }: BaseProps) => {
  return (
    <>
      <HeaderGrid {...base.header} />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid {...base.footer} />
      <GoTop />
    </>
  );
};

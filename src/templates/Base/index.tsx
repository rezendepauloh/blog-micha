import * as Styled from './styles';
import { HeaderGrid } from 'components/HeaderGrid';
import { FooterGrid } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

import { BaseProps } from './type';

export const Base = ({ header, footer, children }: BaseProps) => {
  return (
    <>
      <HeaderGrid {...header} />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid {...footer} />
      <GoTop />
    </>
  );
};

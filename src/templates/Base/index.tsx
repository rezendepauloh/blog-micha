import * as Styled from './styles';
import { HeaderGrid, HeaderGridProps } from 'components/HeaderGrid';
import { FooterGrid, FooterGridProps } from 'components/FooterGrid';
import { GoTop } from 'components/GoTop';

export type BaseProps = {
  children: React.ReactNode;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

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

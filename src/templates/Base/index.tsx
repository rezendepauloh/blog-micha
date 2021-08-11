import * as Styled from './styles';
import { HeaderGrid, HeaderGridProps } from '../../components/HeaderGrid';
import { FooterGrid, FooterGridProps } from '../../components/FooterGrid';
import { GoTop } from '../../components/GoTop';

export type BaseProps = {
  children: React.ReactNode;
  menu: HeaderGridProps;
  footer: FooterGridProps;
};

export const Base = ({ menu, footer, children }: BaseProps) => {
  return (
    <>
      <HeaderGrid {...menu} />
      <Styled.Container>{children}</Styled.Container>
      <FooterGrid {...footer} />
      <GoTop />
    </>
  );
};

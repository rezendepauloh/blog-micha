import * as Styled from './styles';
import { Menu, MenuProps } from '../../components/Menu';
import { GridFooter, GridFooterProps } from '../../components/GridFooter';
import { GoTop } from '../../components/GoTop';

export type BaseProps = {
  children: React.ReactNode;
  menu: MenuProps;
  footer: GridFooterProps;
};

export const Base = ({ menu, footer, children }: BaseProps) => {
  return (
    <>
      <Menu {...menu} />
      <Styled.Container>{children}</Styled.Container>
      <GridFooter {...footer} />
      <GoTop />
    </>
  );
};

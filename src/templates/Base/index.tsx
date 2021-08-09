import * as Styled from './styles';
import { Menu, MenuProps } from '../../components/Menu';
//import { MenuLinkProps } from '../../components/MenuLink';
//import { LogoLinkProps } from '../../components/LogoLink';
import { GridFooter, GridFooterProps } from '../../components/GridFooter';
import { GoTop } from '../../components/GoTop';

export type BaseProps = {
  children: React.ReactNode;
  menu: MenuProps;
  //links: MenuLinkProps[];
  //logoData: LogoLinkProps;
  footer: GridFooterProps;
};

export const Base = ({ menu, footer, children }: BaseProps) => {
  return (
    <>
      <Menu {...menu} />
      <Styled.Container>
        {children}
        <GridFooter {...footer} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

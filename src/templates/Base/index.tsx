import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';
import { GridFooter, GridFooterProps } from '../../components/GridFooter';
import { GoTop } from '../../components/GoTop';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  footer: GridFooterProps;
  logoData: LogoLinkProps;
};

export const Base = ({ links, logoData, footer, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <GridFooter {...footer} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

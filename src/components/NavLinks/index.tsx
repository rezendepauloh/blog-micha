import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link, index) => {
        const key = `${link.link}-${index}`;
        return <MenuLink key={key} {...link} />;
      })}
    </Styled.Container>
  );
};

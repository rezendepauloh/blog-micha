import * as Styled from './styles';
import { HeaderLinkMenu, HeaderLinkMenuProps } from '../HeaderLinkMenu';

export type HeaderMenuProps = {
  links?: HeaderLinkMenuProps[];
};

export const HeaderMenu = ({ links = [] }: HeaderMenuProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link, index) => {
        const key = `${link.link}-${index}`;
        return <HeaderLinkMenu key={key} {...link} />;
      })}
    </Styled.Container>
  );
};

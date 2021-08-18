import * as Styled from './styles';
import { HeaderLinkMenu } from 'components/HeaderLinkMenu';

import { HeaderMenuProps } from './type';

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

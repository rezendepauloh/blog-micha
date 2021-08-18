import Link from 'next/link';
import * as Styled from './styles';

import { HeaderLinkMenuProps } from './type';

export const HeaderLinkMenu = ({
  children,
  link,
  newTab = false,
}: HeaderLinkMenuProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{children}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

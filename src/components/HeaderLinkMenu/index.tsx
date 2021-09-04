import Link from 'next/link';
import * as Styled from './styles';
import { useRouter } from 'next/router';

import { HeaderLinkMenuProps } from './type';

export const HeaderLinkMenu = ({
  text,
  link,
  newTab = false,
}: HeaderLinkMenuProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;
  const router = useRouter();

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container
          className={router.pathname == link ? 'currentActive' : ''}
          target={target}
        >
          {text}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container
      className={router.pathname == link ? 'currentActive' : ''}
      href={link}
      target={target}
    >
      {text}
    </Styled.Container>
  );
};

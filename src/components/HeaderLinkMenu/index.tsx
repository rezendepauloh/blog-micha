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
  let routerPath = router.pathname;

  if (
    routerPath == '/category/[slug]' ||
    routerPath == '/author/[slug]' ||
    routerPath == '/post/[slug]'
  ) {
    routerPath = '/posts';
  }

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container
          className={routerPath == link ? 'currentActive' : ''}
          target={target}
        >
          {text}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container
      className={routerPath == link ? 'currentActive' : ''}
      href={link}
      target={target}
    >
      {text}
    </Styled.Container>
  );
};

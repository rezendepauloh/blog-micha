import * as Styled from './styles';
import { Heading } from 'components/Heading';
import Link from 'next/link';

import { LogoProps } from './type';

export const Logo = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Styled.Container>
          <Link href={link} passHref>
            <Styled.Link target={target}>
              {!!srcImg && <img src={srcImg} alt={text} />}
              {!srcImg && text}
            </Styled.Link>
          </Link>
        </Styled.Container>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container>
        <Styled.Link href={link}>
          {!!srcImg && <img src={srcImg} alt={text} />}
          {!srcImg && text}
        </Styled.Link>
      </Styled.Container>
    </Heading>
  );
};

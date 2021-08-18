import * as Styled from './styles';
import { Heading } from 'components/Heading';
import Link from 'next/link';

export type HeaderLogoProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const HeaderLogo = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: HeaderLogoProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container target={target}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

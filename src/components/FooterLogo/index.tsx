import * as Styled from './styles';
import { Heading } from '../Heading';

export type FooterLogoProps = {
  text: string;
  srcImg?: string;
};

export const FooterLogo = ({ text, srcImg = '' }: FooterLogoProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

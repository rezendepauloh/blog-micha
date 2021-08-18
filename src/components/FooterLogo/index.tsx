import * as Styled from './styles';
import { Heading } from 'components/Heading';

import { FooterLogoProps } from './type';

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

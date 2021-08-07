import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoFooterProps = {
  text: string;
  srcImg?: string;
};

export const LogoFooter = ({ text, srcImg = '' }: LogoFooterProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

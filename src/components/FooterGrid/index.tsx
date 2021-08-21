import * as Styled from './styles';
import { FooterSocialMedia } from 'components/FooterSocialMedia';
import { Logo } from 'components/Logo';
import { FooterContact } from 'components/FooterContact';

import { FooterGridProps } from './type';

export const FooterGrid = ({
  logoFooter,
  socialMediaFotter,
  contactFooter,
}: FooterGridProps) => {
  return (
    <Styled.Container fluid>
      <Styled.Row>
        <Styled.Col md="auto">
          <Logo {...logoFooter} />
        </Styled.Col>
        <Styled.Col md="auto">
          <FooterSocialMedia {...socialMediaFotter} />
        </Styled.Col>
        <Styled.Col md="auto">
          <FooterContact {...contactFooter} />
        </Styled.Col>
      </Styled.Row>
    </Styled.Container>
  );
};

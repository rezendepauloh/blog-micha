import * as Styled from './styles';
import {
  FooterSocialMedia,
  FooterSocialMediaProps,
} from 'components/FooterSocialMedia';
import { FooterLogo, FooterLogoProps } from 'components/FooterLogo';
import { FooterContact, FooterContactProps } from 'components/FooterContact';

export type FooterGridProps = {
  logoFooter: FooterLogoProps;
  socialMediaFotter: FooterSocialMediaProps;
  contactFooter: FooterContactProps;
  component?: string;
};

export const FooterGrid = ({
  logoFooter,
  socialMediaFotter,
  contactFooter,
}: FooterGridProps) => {
  return (
    <Styled.Container fluid>
      <Styled.Row>
        <Styled.Col md="auto">
          <FooterLogo {...logoFooter} />
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

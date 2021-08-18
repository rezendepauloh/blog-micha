import { FooterLogoProps } from 'components/FooterLogo/type';
import { FooterSocialMediaProps } from 'components/FooterSocialMedia/type';
import { FooterContactProps } from 'components/FooterContact/type';

export type FooterGridProps = {
  logoFooter: FooterLogoProps;
  socialMediaFotter: FooterSocialMediaProps;
  contactFooter: FooterContactProps;
  component?: string;
};

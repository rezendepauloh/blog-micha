import { LogoProps } from 'components/Logo/type';
import { FooterSocialMediaProps } from 'components/FooterSocialMedia/type';
import { FooterContactProps } from 'components/FooterContact/type';

export type FooterGridProps = {
  logoFooter: LogoProps;
  socialMediaFotter: FooterSocialMediaProps;
  contactFooter: FooterContactProps;
  component?: string;
};

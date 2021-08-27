import { LogoProps } from 'components/Logo/type';
import { HeaderLinkMenuProps } from 'components/HeaderLinkMenu/type';
import { FooterSocialMediaProps } from 'components/FooterSocialMedia/type';
import { FooterContactProps } from 'components/FooterContact/type';

export type BaseStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: LogoProps;
  headerMenu: HeaderLinkMenuProps[];
  footerSocialMedia: FooterSocialMediaProps;
  footerContact: FooterContactProps;
};

export type BaseProps = {
  children: React.ReactNode;
  base: BaseStrapi;
};

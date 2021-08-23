import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';
// import { LogoProps } from 'components/Logo/type';

// type BaseStrapi = {
//   id: string;
//   blogName: string;
//   blogDescription: string;
//   logo: LogoProps;
//   menuLink: MenuPropsLinks[];
//   text: string;
// };

export type BaseProps = {
  children: React.ReactNode;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

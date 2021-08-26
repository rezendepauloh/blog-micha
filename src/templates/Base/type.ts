import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type BaseStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

export type BaseProps = {
  children: React.ReactNode;
  base: BaseStrapi;
};

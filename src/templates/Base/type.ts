import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type BaseProps = {
  children: React.ReactNode;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

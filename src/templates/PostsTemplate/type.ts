import { HomePostGridProps } from 'components/HomePostGrid/type';
import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type PostsTemplateProps = {
  posts: HomePostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

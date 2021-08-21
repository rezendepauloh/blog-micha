import { PostGridProps } from 'components/PostGrid/type';
import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type PostsTemplateProps = {
  posts: PostGridProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

import { PostProps } from 'components/Post/type';
import { HeaderGridProps } from 'components/HeaderGrid/type';
import { FooterGridProps } from 'components/FooterGrid/type';

export type PostTemplateProps = {
  post: PostProps;
  header: HeaderGridProps;
  footer: FooterGridProps;
};

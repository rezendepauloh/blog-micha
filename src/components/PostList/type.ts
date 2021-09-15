import { Category } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';

export type PostListProps = {
  title?: string;
  posts?: PostItemProps[];
  categories?: Category[];
};

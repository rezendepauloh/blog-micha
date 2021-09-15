import { Category } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';

export type PostListCategoryProps = {
  title?: string;
  categories?: Category[];
  posts?: PostItemProps[];
};

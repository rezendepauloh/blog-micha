import { Category, Author } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';

export type PostListSideBarProps = {
  categories?: Category[];
  authors?: Author[];
  posts?: PostItemProps[];
};

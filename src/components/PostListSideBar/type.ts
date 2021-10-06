import { Category, Author } from 'components/PostArticleMeta/type';
import { PostTotalProps } from 'templates/PostsTemplate/type';

export type PostListSideBarProps = {
  categories?: Category[];
  authors?: Author[];
  postsTotal?: PostTotalProps[];
};

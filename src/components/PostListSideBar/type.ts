import { Category, Author } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';
//import { PostTotalProps } from 'templates/PostsTemplate/type';

export type PostListSideBarProps = {
  categories?: Category[];
  authors?: Author[];
  //posts?: PostTotalProps[];
  posts?: PostItemProps[];
};

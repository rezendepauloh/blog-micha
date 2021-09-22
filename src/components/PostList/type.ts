import { Category, Author, Tag } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';
//import { PostTotalProps } from 'templates/PostsTemplate/type';

export type PostListProps = {
  title?: string;
  posts?: PostItemProps[];
  //postsTotal?: PostTotalProps[];
  categories?: Category[];
  authors?: Author[];
  tags?: Tag[];
};

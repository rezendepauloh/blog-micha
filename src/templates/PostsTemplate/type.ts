import { Category, Author, Tag } from 'components/PostArticleMeta/type';
import { PostCardProps } from 'components/PostCard/type';
// import { PostListProps } from 'components/PostList/type';
import { BaseStrapi } from 'templates/Base/type';

export type PostTotalProps = {
  id?: string;
  category?: Category;
  author?: Author;
  tags?: Tag[];
};

export type PostsTemplateProps = {
  title?: string;
  posts?: PostCardProps[];
  postsTotal?: PostTotalProps[];
  base: BaseStrapi;
  categories?: Category[];
  authors?: Author[];
  tags?: Tag[];
};

import { Category, Author, Tag } from 'components/PostArticleMeta/type';
import { PostListProps } from 'components/PostList/type';
import { BaseStrapi } from 'templates/Base/type';

export type PostTotalProps = {
  id?: string;
  categories?: Category[];
  authors?: Author[];
  tags?: Tag[];
};

export type PostsTemplateProps = {
  posts?: PostListProps;
  //postsTotal?: PostTotalProps;
  base: BaseStrapi;
  categories?: Category[];
  authors?: Author[];
  tags?: Tag[];
};

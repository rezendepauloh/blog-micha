import { Category, Author } from 'components/PostArticleMeta/type';
import { PostListProps } from 'components/PostList/type';
import { BaseStrapi } from 'templates/Base/type';

export type PostsTemplateProps = {
  posts?: PostListProps;
  base: BaseStrapi;
  categories?: Category[];
  authors?: Author[];
};

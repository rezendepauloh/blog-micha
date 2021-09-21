import { Category, Author, Tag } from 'components/PostArticleMeta/type';
import { PostItemProps } from 'components/PostItem/type';

export type PostListProps = {
  title?: string;
  posts?: PostItemProps[];
  categories?: Category[];
  authors?: Author[];
  tags?: Tag[];
};

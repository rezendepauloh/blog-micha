import { PostArticleHeaderProps } from 'components/PostArticleHeader/type';

export type PostStrapi = PostProps & {
  slug: string;
};

export type PostProps = PostArticleHeaderProps;

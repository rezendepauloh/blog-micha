import { PostArticleMetaProps } from 'components/PostArticleMeta/type';

type StrapiImage = {
  id: string;
  alternativeText: string;
  url: string;
};

export type PostArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & PostArticleMetaProps;

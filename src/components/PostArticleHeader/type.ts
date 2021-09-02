import { PostArticleMetaProps } from 'components/PostArticleMeta/type';

export type StrapiImage = {
  id: string;
  alternativeText: string;
  srcImg: string;
};

export type PostArticleHeaderProps = {
  id: string;
  title: string;
  content: string;
  cover: StrapiImage;
} & PostArticleMetaProps;

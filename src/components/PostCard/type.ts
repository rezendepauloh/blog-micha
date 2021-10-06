import { PostArticleMetaProps } from 'components/PostArticleMeta/type';

export type CoverProps = {
  id: string;
  alternativeText: string;
  srcImg: string;
};

export type PostCardProps = {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover?: CoverProps;
} & PostArticleMetaProps;

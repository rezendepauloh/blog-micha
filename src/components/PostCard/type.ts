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
  cover: CoverProps;
  content: string;
} & PostArticleMetaProps;

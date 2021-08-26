import { PostArticleMetaProps } from './type';
import { data } from 'api/dados-posts.json';

const { author, category, createdAt } = data.posts[0];

export default {
  author,
  category,
  createdAt,
} as PostArticleMetaProps;

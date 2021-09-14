import { PostArticleMetaProps } from './type';
import { data } from 'api/dados-posts.json';

const { author, category, created_at } = data.posts[0];

export default {
  author,
  category,
  created_at,
} as PostArticleMetaProps;

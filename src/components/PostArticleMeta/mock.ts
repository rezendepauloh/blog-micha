import { PostArticleMetaProps } from './type';
import { data } from 'api/dados.json';

const { author, categories, createdAt } = data.posts[0];

export default {
  author,
  categories,
  createdAt,
} as PostArticleMetaProps;

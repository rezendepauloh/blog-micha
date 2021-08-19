import { PostProps } from './type';
import { data } from 'api/dados.json';

const { title, excerpt, cover, content, author, categories, createdAt } =
  data.posts[0];

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;

import { PostArticleHeaderProps } from './type';
import { data } from 'api/dados.json';

const { title, content, cover, author, category, created_at } = data.posts[0];

export default {
  title,
  content,
  cover,
  author,
  category,
  created_at,
} as PostArticleHeaderProps;

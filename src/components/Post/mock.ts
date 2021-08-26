import { PostProps } from './type';
import { data } from 'api/dados-posts.json';

const { id, title, cover, content, author, category, createdAt } =
  data.posts[0];

export default {
  id,
  title,
  cover,
  content,
  author,
  category,
  createdAt,
} as PostProps;

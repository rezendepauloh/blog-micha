import { PostListProps } from './type';
import { data } from 'api/dados-posts.json';

export default {
  posts: data.posts,
  categories: data.categories,
  authors: data.authors,
} as PostListProps;

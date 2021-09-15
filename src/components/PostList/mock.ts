import { PostListProps } from './type';
import { data } from '../../api/dados-posts.json';

export default {
  categories: data.categories,
  posts: data.posts,
} as PostListProps;

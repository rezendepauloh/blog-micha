import { PostListSideBarProps } from './type';
import { data } from 'api/dados-posts.json';

export default {
  categories: data.categories,
  authors: data.authors,
  posts: data.posts,
} as PostListSideBarProps;

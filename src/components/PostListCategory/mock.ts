import { PostListCategoryProps } from './type';
import { data } from 'api/dados.json';

export default {
  title: 'Teste',
  postsCategories: data.posts,
} as PostListCategoryProps;

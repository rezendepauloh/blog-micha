import { PostsTemplateProps } from './type';
import { mockWithoutTitle } from 'components/PostGrid/mock';
import {
  mockHeaderWithImage as mockHeaderImage,
  mockHeaderWithoutImage as mockHeaderWithoutImage,
} from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage as mockFooterImage,
  mockFooterWithoutImage as mockFooterWithoutImage,
} from 'components/FooterGrid/mock';

export const mockPostsTemplateWithFooterImage = {
  posts: mockWithoutTitle,
  header: mockHeaderImage,
  footer: mockFooterImage,
} as PostsTemplateProps;

export const mockPostsTemplateWithoutFooterImage = {
  posts: mockWithoutTitle,
  header: mockHeaderWithoutImage,
  footer: mockFooterWithoutImage,
} as PostsTemplateProps;

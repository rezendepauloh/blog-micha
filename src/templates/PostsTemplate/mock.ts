import { PostsTemplateProps } from './type';
import { mockWithoutTitle } from 'components/HomePostGrid/mock';
import headerGridMock from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage,
  mockFooterWithoutImage,
} from 'components/FooterGrid/mock';

export const mockPostsTemplateWithFooterImage = {
  posts: mockWithoutTitle,
  header: headerGridMock,
  footer: mockFooterWithImage,
} as PostsTemplateProps;

export const mockPostsTemplateWithoutFooterImage = {
  posts: mockWithoutTitle,
  header: headerGridMock,
  footer: mockFooterWithoutImage,
} as PostsTemplateProps;

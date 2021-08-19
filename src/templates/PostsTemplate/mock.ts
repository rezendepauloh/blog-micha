import { PostsTemplateProps } from './type';
import { mockWithoutTitle } from 'components/HomePostGrid/mock';
import headerGridMock from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage as MockImage,
  mockFooterWithoutImage as MockWithoutImage,
} from 'components/FooterGrid/mock';

export const mockPostsTemplateWithFooterImage = {
  posts: mockWithoutTitle,
  header: headerGridMock,
  footer: MockImage,
} as PostsTemplateProps;

export const mockPostsTemplateWithoutFooterImage = {
  posts: mockWithoutTitle,
  header: headerGridMock,
  footer: MockWithoutImage,
} as PostsTemplateProps;

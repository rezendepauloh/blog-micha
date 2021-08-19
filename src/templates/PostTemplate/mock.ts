import { PostTemplateProps } from './type';
import mock from 'components/Post/mock';
import {
  mockHeaderWithImage as mockHeaderImage,
  mockHeaderWithoutImage as mockHeaderWithoutImage,
} from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage as mockFooterImage,
  mockFooterWithoutImage as mockFooterWithoutImage,
} from 'components/FooterGrid/mock';

export const mockPostTemplateWithFooterImage = {
  post: mock,
  header: mockHeaderImage,
  footer: mockFooterImage,
} as PostTemplateProps;

export const mockPostTemplateWithoutFooterImage = {
  post: mock,
  header: mockHeaderWithoutImage,
  footer: mockFooterWithoutImage,
} as PostTemplateProps;

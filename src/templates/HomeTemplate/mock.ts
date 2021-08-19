import { HomeTemplateProps } from './type';
import HomeCarouselMock from 'components/HomeCarousel/mock';
import HomeSpecialtiesMock from 'components/HomeSpecialties/mock';
import { mockWithTitle } from 'components/HomePostGrid/mock';
import {
  mockHeaderWithImage as mockHeaderImage,
  mockHeaderWithoutImage as mockHeaderWithoutImage,
} from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage as mockFooterImage,
  mockFooterWithoutImage as mockFooterWithoutImage,
} from 'components/FooterGrid/mock';

export const mockHomeTemplateWithImage = {
  carousel: HomeCarouselMock,
  specialties: HomeSpecialtiesMock,
  posts: mockWithTitle,
  header: mockHeaderImage,
  footer: mockFooterImage,
} as HomeTemplateProps;

export const mockHomeTemplateWithoutImage = {
  carousel: HomeCarouselMock,
  specialties: HomeSpecialtiesMock,
  posts: mockWithTitle,
  header: mockHeaderWithoutImage,
  footer: mockFooterWithoutImage,
} as HomeTemplateProps;

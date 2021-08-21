import { HomeTemplateProps } from './type';
import HomeCarouselMock from 'components/HomeCarousel/mock';
import { specialties as HomeSpecialtiesMock } from 'components/HomeSpecialties/mock';
import { mockWithTitle } from 'components/PostGrid/mock';
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

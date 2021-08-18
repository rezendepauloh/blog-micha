import { HomeTemplateProps } from '.';
import HomeCarouselMock from 'components/HomeCarousel/mock';
import HomeSpecialtiesMock from 'components/HomeSpecialties/mock';
import { mockWithTitle } from 'components/HomePostGrid/mock';
import headerGridMock from 'components/HeaderGrid/mock';
import {
  mockFooterWithImage,
  mockFooterWithoutImage,
} from 'components/FooterGrid/mock';

export const mockHomeTemplateWithFooterImage = {
  carousel: HomeCarouselMock,
  specialties: HomeSpecialtiesMock,
  posts: mockWithTitle,
  header: headerGridMock,
  footer: mockFooterWithImage,
} as HomeTemplateProps;

export const mockHomeTemplateWithoutFooterImage = {
  carousel: HomeCarouselMock,
  specialties: HomeSpecialtiesMock,
  posts: mockWithTitle,
  header: headerGridMock,
  footer: mockFooterWithoutImage,
} as HomeTemplateProps;

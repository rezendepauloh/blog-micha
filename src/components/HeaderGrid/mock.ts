import { HeaderGridProps } from './type';
import linksMock from 'components/HeaderMenu/mock';
import { mockWithImage, mockWithoutImage } from 'components/HeaderLogo/mock';

export const mockHeaderWithImage = {
  links: linksMock,
  logoData: mockWithImage,
} as HeaderGridProps;

export const mockHeaderWithoutImage = {
  links: linksMock,
  logoData: mockWithoutImage,
} as HeaderGridProps;

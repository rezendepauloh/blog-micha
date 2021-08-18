import { FooterGridProps } from './type';
import FooterContactMock from 'components/FooterContact/mock';
import { mockWithImage, mockWithoutImage } from 'components/FooterLogo/mock';
import FooterSocialMediaMock from 'components/FooterSocialMedia/mock';

export const mockFooterWithImage = {
  logoFooter: mockWithImage,
  socialMediaFotter: FooterSocialMediaMock,
  contactFooter: FooterContactMock,
} as FooterGridProps;

export const mockFooterWithoutImage = {
  logoFooter: mockWithoutImage,
  socialMediaFotter: FooterSocialMediaMock,
  contactFooter: FooterContactMock,
} as FooterGridProps;

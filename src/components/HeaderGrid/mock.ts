import { HeaderGridProps } from './type';
import { data } from 'api/dados.json';

export const mockHeaderWithImage = {
  links: {
    links: data.base.header.menuLink,
  },
  logoData: {
    text: data.base.logoText,
    srcImg: data.base.logo.srcImg,
    alternativeText: data.base.logo.alternativeText,
    url: data.base.logoUrl,
    newTab: data.base.logoNewTab,
  },
} as HeaderGridProps;

export const mockHeaderWithoutImage = {
  links: {
    links: data.base.header.menuLink,
  },
  logoData: {
    text: data.base.logoText,
    srcImg: '',
    alternativeText: '',
    url: data.base.logoUrl,
    newTab: data.base.logoNewTab,
  },
} as HeaderGridProps;

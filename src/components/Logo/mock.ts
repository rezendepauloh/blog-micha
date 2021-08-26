import { LogoProps } from './type';
import { data } from 'api/dados.json';

export const mockWithImage = {
  text: data.base.logoText,
  srcImg: data.base.logo.srcImg,
  alternativeText: data.base.logo.alternativeText,
  url: data.base.logoUrl,
  newTab: data.base.logoNewTab,
} as LogoProps;

export const mockWithoutImage = {
  text: data.base.logoText,
  srcImg: '',
  alternativeText: '',
  url: data.base.logoUrl,
  newTab: data.base.logoNewTab,
} as LogoProps;

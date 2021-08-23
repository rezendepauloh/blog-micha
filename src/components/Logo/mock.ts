import { LogoProps } from './type';
import { data } from 'api/dados.json';

export const mockWithImage = {
  text: data.base.logo.text,
  srcImg: data.base.logo.srcImg,
  alternativeText: data.base.logo.alternativeText,
  url: data.base.logo.url,
  newTab: data.base.logo.newTab,
} as LogoProps;

export const mockWithoutImage = {
  text: data.base.logo.text,
  srcImg: '',
  alternativeText: '',
  url: data.base.logo.url,
  newTab: data.base.logo.newTab,
} as LogoProps;

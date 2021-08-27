import { FooterGridProps } from './type';
import { data } from 'api/dados.json';

export const mockFooterWithImage = {
  logoFooter: {
    text: data.base.logoText,
    srcImg: data.base.logo.srcImg,
    alternativeText: data.base.logo.alternativeText,
    url: data.base.logoUrl,
    newTab: data.base.logoNewTab,
  },
  socialMediaFotter: {
    street: data.base.footer.street,
    number: data.base.footer.number,
    neighborhood: data.base.footer.neighborhood,
    city: data.base.footer.city,
    state: data.base.footer.state,
    cep: data.base.footer.cep,
    instagram: data.base.footer.instagram,
    linkedin: data.base.footer.linkedin,
  },
  contactFooter: {
    phone: data.base.footer.phone,
    email: data.base.footer.email,
    location: data.base.footer.location,
  },
} as FooterGridProps;

export const mockFooterWithoutImage = {
  logoFooter: {
    text: data.base.logoText,
    srcImg: '',
    alternativeText: '',
    url: data.base.logoUrl,
    newTab: data.base.logoNewTab,
  },
  socialMediaFotter: {
    street: data.base.footer.street,
    number: data.base.footer.number,
    neighborhood: data.base.footer.neighborhood,
    city: data.base.footer.city,
    state: data.base.footer.state,
    cep: data.base.footer.cep,
    instagram: data.base.footer.instagram,
    linkedin: data.base.footer.linkedin,
  },
  contactFooter: {
    phone: data.base.footer.phone,
    email: data.base.footer.email,
    location: data.base.footer.location,
  },
} as FooterGridProps;

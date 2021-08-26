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
    street: data.base.footer.socialMedia.street,
    number: data.base.footer.socialMedia.number,
    neighborhood: data.base.footer.socialMedia.neighborhood,
    city: data.base.footer.socialMedia.city,
    state: data.base.footer.socialMedia.state,
    cep: data.base.footer.socialMedia.cep,
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
    street: data.base.footer.socialMedia.street,
    number: data.base.footer.socialMedia.number,
    neighborhood: data.base.footer.socialMedia.neighborhood,
    city: data.base.footer.socialMedia.city,
    state: data.base.footer.socialMedia.state,
    cep: data.base.footer.socialMedia.cep,
    instagram: data.base.footer.instagram,
    linkedin: data.base.footer.linkedin,
  },
  contactFooter: {
    phone: data.base.footer.phone,
    email: data.base.footer.email,
    location: data.base.footer.location,
  },
} as FooterGridProps;

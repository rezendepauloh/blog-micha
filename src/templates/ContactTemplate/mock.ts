import { ContactTemplateProps } from './type';
import { data } from 'api/dados-about.json';

export const mockAboutTemplateWithImage = {
  contact: {
    name: '',
    email: '',
    message: '',
    phone: data.base.footer.phone,
  },
  base: {
    id: data.base.id,
    blogName: data.base.blogName,
    blogDescription: data.base.blogDescription,
    logo: {
      text: data.base.logoText,
      srcImg: data.base.logo.srcImg,
      alternativeText: data.base.logo.alternativeText,
      url: data.base.logoUrl,
      newTab: data.base.logoNewTab,
    },
    headerMenu: data.base.header.menuLink,
    footerSocialMedia: {
      street: data.base.footer.street,
      number: data.base.footer.number,
      neighborhood: data.base.footer.neighborhood,
      city: data.base.footer.city,
      state: data.base.footer.state,
      cep: data.base.footer.cep,
      instagram: data.base.footer.instagram,
      linkedin: data.base.footer.linkedin,
    },
    footerContact: {
      phone: data.base.footer.phone,
      email: data.base.footer.email,
      location: data.base.footer.location,
    },
  },
} as ContactTemplateProps;

export const mockAboutTemplateWithoutImage = {
  contact: {
    name: '',
    email: '',
    message: '',
    phone: data.base.footer.phone,
  },
  base: {
    id: data.base.id,
    blogName: data.base.blogName,
    blogDescription: data.base.blogDescription,
    logo: {
      text: data.base.logoText,
      srcImg: '',
      alternativeText: '',
      url: data.base.logoUrl,
      newTab: data.base.logoNewTab,
    },
    headerMenu: data.base.header.menuLink,
    footerSocialMedia: {
      street: data.base.footer.street,
      number: data.base.footer.number,
      neighborhood: data.base.footer.neighborhood,
      city: data.base.footer.city,
      state: data.base.footer.state,
      cep: data.base.footer.cep,
      instagram: data.base.footer.instagram,
      linkedin: data.base.footer.linkedin,
    },
    footerContact: {
      phone: data.base.footer.phone,
      email: data.base.footer.email,
      location: data.base.footer.location,
    },
  },
} as ContactTemplateProps;

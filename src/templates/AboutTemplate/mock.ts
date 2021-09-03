import { AboutTemplateProps } from './type';
import { data } from 'api/dados-about.json';

export const mockAboutTemplateWithImage = {
  about: {
    title: data.about.title,
    content: data.about.content,
    cover: {
      alternativeText: data.about.cover.alternativeText,
      srcImg: data.about.cover.srcImg,
    },
    phone: data.base.footer.phone,
    email: data.base.footer.email,
    instagram: data.base.footer.instagram,
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
} as AboutTemplateProps;

export const mockAboutTemplateWithoutImage = {
  about: {
    title: data.about.title,
    content: data.about.content,
    cover: {
      alternativeText: data.about.cover.alternativeText,
      srcImg: data.about.cover.srcImg,
    },
    phone: data.base.footer.phone,
    email: data.base.footer.email,
    instagram: data.base.footer.instagram,
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
} as AboutTemplateProps;

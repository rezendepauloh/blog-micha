import { HomeTemplateProps } from './type';
import { data } from 'api/dados.json';

export const mockHomeTemplateWithImage = {
  carousel: { carousel: data.home.carousel },
  specialties: data.home.specialty,
  posts: { posts: data.posts },
  base: {
    id: data.base.id,
    blogName: data.base.blogName,
    blogDescription: data.base.blogDescription,
    header: {
      links: { links: data.base.header.menuLink },
      logoData: {
        text: data.base.logoText,
        srcImg: data.base.logo.srcImg,
        alternativeText: data.base.logo.alternativeText,
        url: data.base.logoUrl,
        newTab: data.base.logoNewTab,
      },
    },
    footer: {
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
    },
  },
} as HomeTemplateProps;

export const mockHomeTemplateWithoutImage = {
  carousel: { carousel: data.home.carousel },
  specialties: data.home.specialty,
  posts: { posts: data.posts },
  base: {
    id: data.base.id,
    blogName: data.base.blogName,
    blogDescription: data.base.blogDescription,
    header: {
      links: { links: data.base.header.menuLink },
      logoData: {
        text: data.base.logoText,
        srcImg: '',
        alternativeText: '',
        url: data.base.logoUrl,
        newTab: data.base.logoNewTab,
      },
    },
    footer: {
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
    },
  },
} as HomeTemplateProps;

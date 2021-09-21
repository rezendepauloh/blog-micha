import { PostTemplateProps } from './type';
import { PostProps } from 'components/Post/type';

import mock from 'components/Post/mock';
import { data } from 'api/dados-posts.json';

export const mockPostTemplateWithImage = {
  post: mock,
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
} as PostTemplateProps;

export const mockPostTemplateWithoutImage = {
  post: mock,
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
} as PostTemplateProps;

const { id, title, cover, content, author, category, tags, created_at } =
  data.posts[2];

const postWithTag = {
  id,
  title,
  cover,
  content,
  author,
  category,
  tags,
  created_at,
} as PostProps;

export const mockPostTemplateWithTag = {
  post: postWithTag,
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
} as PostTemplateProps;

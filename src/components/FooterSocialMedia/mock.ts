import { FooterSocialMediaProps } from './type';
import { data } from 'api/dados.json';

export default {
  street: data.base.footerMedia.street,
  number: data.base.footerMedia.number,
  neighborhood: data.base.footerMedia.neighborhood,
  city: data.base.footerMedia.city,
  state: data.base.footerMedia.state,
  cep: data.base.footerMedia.cep,
  instagram: data.base.footerMedia.instagram,
  linkedin: data.base.footerMedia.linkedin,
} as FooterSocialMediaProps;

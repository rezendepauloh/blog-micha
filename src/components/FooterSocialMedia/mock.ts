import { FooterSocialMediaProps } from './type';
import { data } from 'api/dados.json';

export default {
  endereco: data.base.footerMedia.endereco,
  instagram: data.base.footerMedia.instagram,
  linkedin: data.base.footerMedia.linkedin,
} as FooterSocialMediaProps;

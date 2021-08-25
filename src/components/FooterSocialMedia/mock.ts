import { FooterSocialMediaProps } from './type';
import { data } from 'api/dados.json';

export default {
  street: data.base.footer.socialMedia.street,
  number: data.base.footer.socialMedia.number,
  neighborhood: data.base.footer.socialMedia.neighborhood,
  city: data.base.footer.socialMedia.city,
  state: data.base.footer.socialMedia.state,
  cep: data.base.footer.socialMedia.cep,
  instagram: data.base.footer.instagram,
  linkedin: data.base.footer.linkedin,
} as FooterSocialMediaProps;

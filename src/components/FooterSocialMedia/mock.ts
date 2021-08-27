import { FooterSocialMediaProps } from './type';
import { data } from 'api/dados.json';

export default {
  street: data.base.footer.street,
  number: data.base.footer.number,
  neighborhood: data.base.footer.neighborhood,
  city: data.base.footer.city,
  state: data.base.footer.state,
  cep: data.base.footer.cep,
  instagram: data.base.footer.instagram,
  linkedin: data.base.footer.linkedin,
} as FooterSocialMediaProps;

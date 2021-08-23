import { FooterContactProps } from './type';
import { data } from 'api/dados.json';

export default {
  phone: data.base.footerContact.phone,
  email: data.base.footerContact.email,
  location: data.base.footerContact.location,
} as FooterContactProps;

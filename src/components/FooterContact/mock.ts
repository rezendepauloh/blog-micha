import { FooterContactProps } from './type';
import { data } from 'api/dados.json';

export default {
  phone: data.base.footer.phone,
  email: data.base.footer.email,
  location: data.base.footer.location,
} as FooterContactProps;

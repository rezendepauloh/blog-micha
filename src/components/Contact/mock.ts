import { ContactProps } from './type';
import { data } from 'api/dados.json';

export default {
  name: '',
  email: '',
  message: '',
  phone: data.base.footer.phone,
} as ContactProps;

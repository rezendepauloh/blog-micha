import { PhoneProps } from 'components/FooterContact/type';

export type ContactProps = {
  name: string;
  email: string;
  message: string;
  phone: PhoneProps[];
};

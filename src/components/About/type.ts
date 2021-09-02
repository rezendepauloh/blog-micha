import { EmailProps, PhoneProps } from 'components/FooterContact/type';
import { InstragramProps } from 'components/FooterSocialMedia/type';
import { StrapiImage } from 'components/PostArticleHeader/type';

export type AboutProps = {
  title: string;
  content: string;
  cover: StrapiImage;
  phone: PhoneProps[];
  email: EmailProps[];
  instagram: InstragramProps[];
};

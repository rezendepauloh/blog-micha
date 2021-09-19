import { ContactProps } from 'components/Contact/type';
import { BaseStrapi } from 'templates/Base/type';

export type ContactTemplateProps = {
  base: BaseStrapi;
  contact: ContactProps;
};

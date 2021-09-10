import { Meta, Story } from '@storybook/react/types-6-0';
import { ContactTemplate } from '.';
import { ContactTemplateProps } from './type';

import {
  mockAboutTemplateWithImage as mockImage,
  mockAboutTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/ContactTemplate',
  component: ContactTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<ContactTemplateProps> = (args) => {
  return (
    <>
      <ContactTemplate {...args} />
    </>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<ContactTemplateProps> = (args) => {
  return (
    <>
      <ContactTemplate {...args} />
    </>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

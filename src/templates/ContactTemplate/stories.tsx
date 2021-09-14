import { Meta, Story } from '@storybook/react/types-6-0';
import { ContactTemplate } from '.';
import { ContactTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

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
    <RouterMock>
      <ContactTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<ContactTemplateProps> = (args) => {
  return (
    <RouterMock>
      <ContactTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

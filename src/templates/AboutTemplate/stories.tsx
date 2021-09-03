import { Meta, Story } from '@storybook/react/types-6-0';
import { AboutTemplate } from '.';
import { AboutTemplateProps } from './type';

import {
  mockAboutTemplateWithImage as mockImage,
  mockAboutTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/AboutTemplate',
  component: AboutTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<AboutTemplateProps> = (args) => {
  return (
    <>
      <AboutTemplate {...args} />
    </>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<AboutTemplateProps> = (args) => {
  return (
    <>
      <AboutTemplate {...args} />
    </>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

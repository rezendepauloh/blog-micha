import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeTemplate } from '.';
import { HomeTemplateProps } from './type';

import {
  mockHomeTemplateWithFooterImage,
  mockHomeTemplateWithoutFooterImage,
} from './mock';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as Meta;

export const TemplateWithFooterImage: Story<HomeTemplateProps> = (args) => {
  return (
    <>
      <HomeTemplate {...args} />
    </>
  );
};

TemplateWithFooterImage.args = mockHomeTemplateWithFooterImage;

export const TemplateWithoutFooterImage: Story<HomeTemplateProps> = (args) => {
  return (
    <>
      <HomeTemplate {...args} />
    </>
  );
};

TemplateWithoutFooterImage.args = mockHomeTemplateWithoutFooterImage;

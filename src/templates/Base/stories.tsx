import { Meta, Story } from '@storybook/react/types-6-0';
import { Base } from '.';
import { BaseProps } from './type';

import { mockBaseWithImage, mockBaseWithoutImage } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
} as Meta;

export const TemplateWithFooterImage: Story<BaseProps> = (args) => {
  return (
    <>
      <Base {...args} />
    </>
  );
};

TemplateWithFooterImage.args = mockBaseWithImage;

export const TemplateWithoutFooterImage: Story<BaseProps> = (args) => {
  return (
    <>
      <Base {...args} />
    </>
  );
};

TemplateWithoutFooterImage.args = mockBaseWithoutImage;

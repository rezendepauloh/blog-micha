import { Meta, Story } from '@storybook/react/types-6-0';
import { Base } from '.';
import { BaseProps } from './type';
import RouterMock from 'utils/mockRouter';

import { mockBaseWithImage, mockBaseWithoutImage } from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
} as Meta;

export const TemplateWithImageLogo: Story<BaseProps> = (args) => {
  return (
    <RouterMock>
      <Base {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = mockBaseWithImage;

export const TemplateWithoutImageLogo: Story<BaseProps> = (args) => {
  return (
    <RouterMock>
      <Base {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = mockBaseWithoutImage;

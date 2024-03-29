import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeTemplate } from '.';
import { HomeTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

import {
  mockHomeTemplateWithImage as mockImage,
  mockHomeTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<HomeTemplateProps> = (args) => {
  return (
    <RouterMock>
      <HomeTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<HomeTemplateProps> = (args) => {
  return (
    <RouterMock>
      <HomeTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

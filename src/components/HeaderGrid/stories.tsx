import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderGrid } from '.';
import { HeaderGridProps } from './type';

import {
  mockHeaderWithImage as mockWithImage,
  mockHeaderWithoutImage as mockWithoutImage,
} from './mock';

export default {
  title: 'Header/HeaderGrid',
  component: HeaderGrid,
} as Meta;

export const TemplateWithImage: Story<HeaderGridProps> = (args) => {
  return (
    <>
      <HeaderGrid {...args} />
    </>
  );
};

TemplateWithImage.args = mockWithImage;

export const TemplateWithText: Story<HeaderGridProps> = (args) => {
  return (
    //<div style={{ height: '300vh', background: 'gray' }}>
    <>
      <HeaderGrid {...args} />
    </>
  );
};

TemplateWithText.args = mockWithoutImage;

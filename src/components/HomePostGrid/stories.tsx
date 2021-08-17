import { Meta, Story } from '@storybook/react/types-6-0';
import { HomePostGrid, HomePostGridProps } from '.';

import { mockWithTitle, mockWithoutTitle } from './mock';

export default {
  title: 'Home/HomePostGrid',
  component: HomePostGrid,
} as Meta;

export const TemplateWithTitle: Story<HomePostGridProps> = (args) => {
  return (
    <>
      <HomePostGrid {...args} />
    </>
  );
};

TemplateWithTitle.args = mockWithTitle;

export const TemplateWithoutTitle: Story<HomePostGridProps> = (args) => {
  return (
    <>
      <HomePostGrid {...args} />
    </>
  );
};

TemplateWithoutTitle.args = mockWithoutTitle;

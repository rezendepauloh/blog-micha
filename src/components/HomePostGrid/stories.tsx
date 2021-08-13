import { Meta, Story } from '@storybook/react/types-6-0';
import { HomePostGrid, HomePostGridProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomePostGrid',
  component: HomePostGrid,
  args: mock,
} as Meta;

export const Template: Story<HomePostGridProps> = (args) => {
  return (
    <>
      <HomePostGrid {...args} />
    </>
  );
};

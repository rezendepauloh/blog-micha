import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeContent, HomeContentProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomeContent',
  component: HomeContent,
  args: mock,
} as Meta;

export const Template: Story<HomeContentProps> = (args) => {
  return (
    <>
      <HomeContent {...args} />
    </>
  );
};

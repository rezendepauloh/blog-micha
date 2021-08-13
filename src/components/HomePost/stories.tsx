import { Meta, Story } from '@storybook/react/types-6-0';
import { HomePost, HomePostProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomePost',
  component: HomePost,
  args: mock,
} as Meta;

export const Template: Story<HomePostProps> = (args) => {
  return (
    <>
      <HomePost {...args} />
    </>
  );
};

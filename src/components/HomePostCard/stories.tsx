import { Meta, Story } from '@storybook/react/types-6-0';
import { HomePostCard, HomePostCardProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomePostCard',
  component: HomePostCard,
  args: mock,
} as Meta;

export const Template: Story<HomePostCardProps> = (args) => {
  return (
    <>
      <HomePostCard {...args} />
    </>
  );
};

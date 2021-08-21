import { Meta, Story } from '@storybook/react/types-6-0';
import { PostCard } from '.';
import { PostCardProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostCard',
  component: PostCard,
  args: mock,
} as Meta;

export const Template: Story<PostCardProps> = (args) => {
  return (
    <>
      <PostCard {...args} />
    </>
  );
};

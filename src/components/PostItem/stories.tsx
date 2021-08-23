import { Meta, Story } from '@storybook/react/types-6-0';
import { PostItem } from '.';
import { PostItemProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostItem',
  component: PostItem,
  args: mock,
} as Meta;

export const Template: Story<PostItemProps> = (args) => {
  return (
    <>
      <PostItem {...args} />
    </>
  );
};

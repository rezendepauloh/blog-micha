import { Meta, Story } from '@storybook/react/types-6-0';
import { PostList } from '.';
import { PostListProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostList',
  component: PostList,
} as Meta;

export const Template: Story<PostListProps> = (args) => {
  return (
    <>
      <PostList {...args} />
    </>
  );
};

Template.args = mock;

import { Meta, Story } from '@storybook/react/types-6-0';
import { PostListSideBar } from '.';
import { PostListSideBarProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostListSideBar',
  component: PostListSideBar,
} as Meta;

export const Template: Story<PostListSideBarProps> = (args) => {
  return (
    <>
      <PostListSideBar {...args} />
    </>
  );
};

Template.args = mock;

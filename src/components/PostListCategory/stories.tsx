import { Meta, Story } from '@storybook/react/types-6-0';
import { PostListCategory } from '.';
import { PostListCategoryProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostListCategory',
  component: PostListCategory,
} as Meta;

export const Template: Story<PostListCategoryProps> = (args) => {
  return (
    <>
      <PostListCategory {...args} />
    </>
  );
};

Template.args = mock;

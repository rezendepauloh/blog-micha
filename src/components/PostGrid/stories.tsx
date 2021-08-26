import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid } from '.';
import { PostGridProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostGrid',
  component: PostGrid,
} as Meta;

export const Template: Story<PostGridProps> = (args) => {
  return (
    <>
      <PostGrid {...args} />
    </>
  );
};

Template.args = mock;

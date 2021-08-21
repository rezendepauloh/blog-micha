import { Meta, Story } from '@storybook/react/types-6-0';
import { PostGrid } from '.';
import { PostGridProps } from './type';

import { mockWithTitle, mockWithoutTitle } from './mock';

export default {
  title: 'Post/PostGrid',
  component: PostGrid,
} as Meta;

export const TemplateWithTitle: Story<PostGridProps> = (args) => {
  return (
    <>
      <PostGrid {...args} />
    </>
  );
};

TemplateWithTitle.args = mockWithTitle;

export const TemplateWithoutTitle: Story<PostGridProps> = (args) => {
  return (
    <>
      <PostGrid {...args} />
    </>
  );
};

TemplateWithoutTitle.args = mockWithoutTitle;

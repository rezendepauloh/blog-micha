import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags } from '.';
import { PostTagsProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostTags',
  component: PostTags,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} />
    </div>
  );
};

Template.args = mock;

export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};

NoTags.args = mock;

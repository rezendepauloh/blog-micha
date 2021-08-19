import { Meta, Story } from '@storybook/react/types-6-0';
import { Post, PostProps } from '.';

import mock from './mock';

export default {
  title: 'Post/Post',
  component: Post,
  args: mock,
} as Meta<PostProps>;

export const Template: Story<PostProps> = (args) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};

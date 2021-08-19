import { Meta, Story } from '@storybook/react/types-6-0';
import { PostContent } from '.';
import { PostContentProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostContent',
  component: PostContent,
  args: {
    html: mock,
  },
} as Meta;

export const Template: Story<PostContentProps> = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <PostContent {...args} />
    </div>
  );
};

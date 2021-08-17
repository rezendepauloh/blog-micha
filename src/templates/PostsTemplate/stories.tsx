import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate, PostsTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'Templates/PostsTemplate',
  component: PostsTemplate,
  args: mock,
} as Meta;

export const Template: Story<PostsTemplateProps> = (args) => {
  return (
    <>
      <PostsTemplate {...args} />
    </>
  );
};

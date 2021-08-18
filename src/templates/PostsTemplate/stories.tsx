import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate } from '.';
import { PostsTemplateProps } from './type';

import {
  mockPostsTemplateWithFooterImage,
  mockPostsTemplateWithoutFooterImage,
} from './mock';

export default {
  title: 'Templates/PostsTemplate',
  component: PostsTemplate,
} as Meta;

export const TemplateWithFooterImage: Story<PostsTemplateProps> = (args) => {
  return (
    <>
      <PostsTemplate {...args} />
    </>
  );
};

TemplateWithFooterImage.args = mockPostsTemplateWithFooterImage;

export const TemplateWithoutFooterImage: Story<PostsTemplateProps> = (args) => {
  return (
    <>
      <PostsTemplate {...args} />
    </>
  );
};

TemplateWithoutFooterImage.args = mockPostsTemplateWithoutFooterImage;

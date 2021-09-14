import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate } from '.';
import { PostsTemplateProps } from './type';

import {
  mockPostsTemplateWithImage as MockImage,
  mockPostsTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/PostsTemplate',
  component: PostsTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<PostsTemplateProps> = (args) => {
  return (
    <>
      <PostsTemplate {...args} />
    </>
  );
};

TemplateWithImageLogo.args = MockImage;

export const TemplateWithoutImageLogo: Story<PostsTemplateProps> = (args) => {
  return (
    <>
      <PostsTemplate {...args} />
    </>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

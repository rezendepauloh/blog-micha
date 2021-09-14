import { Meta, Story } from '@storybook/react/types-6-0';
import { PostsTemplate } from '.';
import { PostsTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

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
    <RouterMock>
      <PostsTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = MockImage;

export const TemplateWithoutImageLogo: Story<PostsTemplateProps> = (args) => {
  return (
    <RouterMock>
      <PostsTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

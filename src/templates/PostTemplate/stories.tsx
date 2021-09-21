import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTemplate } from '.';
import { PostTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

import {
  mockPostTemplateWithImage as MockImage,
  mockPostTemplateWithoutImage as MockWithoutImage,
  mockPostTemplateWithTag as MockWithTag,
} from './mock';

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <RouterMock url="/post">
      <PostTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = MockImage;

export const TemplateWithoutImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <RouterMock url="/post">
      <PostTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

export const TemplateWithTags: Story<PostTemplateProps> = (args) => {
  return (
    <RouterMock url="/post">
      <PostTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithTags.args = MockWithTag;

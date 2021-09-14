import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTemplate } from '.';
import { PostTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

import {
  mockPostTemplateWithImage as MockImage,
  mockPostTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <RouterMock>
      <PostTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = MockImage;

export const TemplateWithoutImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <RouterMock>
      <PostTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

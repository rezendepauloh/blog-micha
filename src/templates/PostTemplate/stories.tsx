import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTemplate } from '.';
import { PostTemplateProps } from './type';

import {
  mockPostTemplateWithFooterImage as MockImage,
  mockPostTemplateWithoutFooterImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <>
      <PostTemplate {...args} />
    </>
  );
};

TemplateWithImageLogo.args = MockImage;

export const TemplateWithoutImageLogo: Story<PostTemplateProps> = (args) => {
  return (
    <>
      <PostTemplate {...args} />
    </>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

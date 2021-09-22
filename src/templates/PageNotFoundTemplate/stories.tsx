import { Meta, Story } from '@storybook/react/types-6-0';
import { PageNotFoundTemplate } from '.';
import { PageNotFoundTemplateProps } from './type';
import RouterMock from 'utils/mockRouter';

import {
  mockPageNotFoundTemplateWithImage as mockImage,
  mockPageNotFoundTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/PageNotFoundTemplate',
  component: PageNotFoundTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<PageNotFoundTemplateProps> = (
  args,
) => {
  return (
    <RouterMock url="/">
      <PageNotFoundTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<PageNotFoundTemplateProps> = (
  args,
) => {
  return (
    <RouterMock url="/">
      <PageNotFoundTemplate {...args} />
    </RouterMock>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

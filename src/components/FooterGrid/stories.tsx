import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterGrid } from '.';
import { FooterGridProps } from './type';

import {
  mockFooterWithImage as MockImage,
  mockFooterWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Footer/FooterGrid',
  component: FooterGrid,
} as Meta;

export const TemplateWithImage: Story<FooterGridProps> = (args) => {
  return (
    <div>
      <FooterGrid {...args} />
    </div>
  );
};

TemplateWithImage.args = MockImage;

export const TemplateWithoutImage: Story<FooterGridProps> = (args) => {
  return (
    <div>
      <FooterGrid {...args} />
    </div>
  );
};

TemplateWithoutImage.args = MockWithoutImage;

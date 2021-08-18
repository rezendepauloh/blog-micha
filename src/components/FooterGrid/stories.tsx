import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterGrid, FooterGridProps } from '.';

import { mockFooterWithImage, mockFooterWithoutImage } from './mock';

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

TemplateWithImage.args = mockFooterWithImage;

export const TemplateWithoutImage: Story<FooterGridProps> = (args) => {
  return (
    <div>
      <FooterGrid {...args} />
    </div>
  );
};

TemplateWithoutImage.args = mockFooterWithoutImage;

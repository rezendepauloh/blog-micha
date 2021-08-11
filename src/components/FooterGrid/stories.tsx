import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterGrid, FooterGridProps } from '.';

import mock from './mock';

export default {
  title: 'Footer/FooterGrid',
  component: FooterGrid,
  args: mock,
} as Meta;

export const Template: Story<FooterGridProps> = (args) => {
  return (
    <div>
      <FooterGrid {...args} />
    </div>
  );
};

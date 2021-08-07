import { Meta, Story } from '@storybook/react/types-6-0';
import { GridFooter, GridFooterProps } from '.';

import mock from './mock';

export default {
  title: 'GridFooter',
  component: GridFooter,
  args: mock,
} as Meta;

export const Template: Story<GridFooterProps> = (args) => {
  return (
    <div>
      <GridFooter {...args} />
    </div>
  );
};

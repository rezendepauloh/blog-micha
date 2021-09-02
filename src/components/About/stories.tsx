import { Meta, Story } from '@storybook/react/types-6-0';
import { About } from '.';
import { AboutProps } from './type';

import mock from './mock';

export default {
  title: 'Pages/About',
  component: About,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Template: Story<AboutProps> = (args) => {
  return (
    <>
      <About {...args} />
    </>
  );
};

Template.args = mock;

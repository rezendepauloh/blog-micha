import { Meta, Story } from '@storybook/react/types-6-0';
import { PageNotFound } from '.';
import { PageNotFoundProps } from './type';

import mock from './mock';

export default {
  title: 'Any/PageNotFound',
  component: PageNotFound,
  args: {
    title: mock.title,
    html: mock.html,
  },
} as Meta;

export const Template: Story<PageNotFoundProps> = (args) => {
  return (
    <>
      <PageNotFound {...args} />
    </>
  );
};

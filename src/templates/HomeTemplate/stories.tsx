import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeTemplate, HomeTemplateProps } from '.';

import mock from './mock';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  args: mock,
} as Meta;

export const Template: Story<HomeTemplateProps> = (args) => {
  return (
    <>
      <HomeTemplate {...args} />
    </>
  );
};

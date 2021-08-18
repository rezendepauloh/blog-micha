import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderMenu } from '.';
import { HeaderMenuProps } from './type';
import links from './mock';

export default {
  title: 'Header/HeaderMenu',
  component: HeaderMenu,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
} as Meta;

export const Template: Story<HeaderMenuProps> = (args) => {
  return (
    <>
      <HeaderMenu {...args} />
    </>
  );
};

import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderMenu, HeaderMenuProps } from '.';
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

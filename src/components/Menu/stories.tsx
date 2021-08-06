import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Michelly Segovia',
      link: '#target',
      srcImg: '',
    },
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    //<div style={{ height: '300vh', background: 'gray' }}>
    <>
      <Menu {...args} />
    </>
  );
};

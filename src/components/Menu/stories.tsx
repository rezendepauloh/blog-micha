import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Michely Segóvia',
      link: '#target',
      srcImg: 'assets/images/logo.svg',
    },
  },
} as Meta;

export const TemplateWithImage: Story<MenuProps> = (args) => {
  return (
    <>
      <Menu {...args} />
    </>
  );
};

export const TemplateWithText: Story<MenuProps> = (args) => {
  return (
    //<div style={{ height: '300vh', background: 'gray' }}>
    <>
      <Menu {...args} />
    </>
  );
};

TemplateWithText.args = {
  links: linksMock,
  logoData: {
    text: 'Michely Segóvia',
    link: '#target',
    srcImg: '',
  },
};

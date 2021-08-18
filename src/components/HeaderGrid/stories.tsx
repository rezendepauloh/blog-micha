import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderGrid, HeaderGridProps } from '.';

import linksMock from 'components/HeaderMenu/mock';
import mock from './mock';

export default {
  title: 'Header/HeaderGrid',
  component: HeaderGrid,
  args: mock,
} as Meta;

export const TemplateWithImage: Story<HeaderGridProps> = (args) => {
  return (
    <>
      <HeaderGrid {...args} />
    </>
  );
};

export const TemplateWithText: Story<HeaderGridProps> = (args) => {
  return (
    //<div style={{ height: '300vh', background: 'gray' }}>
    <>
      <HeaderGrid {...args} />
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

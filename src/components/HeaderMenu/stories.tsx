import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderMenu } from '.';
import { HeaderMenuProps } from './type';
import mock from './mock';

export default {
  title: 'Header/HeaderMenu',
  component: HeaderMenu,
  args: mock,
} as Meta;

export const Template: Story<HeaderMenuProps> = (args) => {
  return (
    <>
      <HeaderMenu {...args} />
    </>
  );
};

import { Meta, Story } from '@storybook/react/types-6-0';
import { Contact } from '.';
import { ContactProps } from './type';

import mock from './mock';

export default {
  title: 'Pages/Contact',
  component: Contact,
} as Meta;

export const Template: Story<ContactProps> = (args) => {
  return (
    <>
      <Contact {...args} />
    </>
  );
};

Template.args = mock;

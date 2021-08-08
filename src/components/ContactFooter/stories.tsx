import { Meta, Story } from '@storybook/react/types-6-0';
import { ContactFooter, ContactFooterProps } from '.';
import { theme } from '../../styles/theme';

import mock from './mock';

export default {
  title: 'ContactFooter',
  component: ContactFooter,
  args: mock,
} as Meta;

export const Template: Story<ContactFooterProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <ContactFooter {...args} />
    </div>
  );
};

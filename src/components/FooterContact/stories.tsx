import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterContact, FooterContactProps } from '.';
import { theme } from '../../styles/theme';

import mock from './mock';

export default {
  title: 'Footer/FooterContact',
  component: FooterContact,
  args: mock,
} as Meta;

export const Template: Story<FooterContactProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <FooterContact {...args} />
    </div>
  );
};

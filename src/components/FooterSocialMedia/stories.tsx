import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterSocialMedia, FooterSocialMediaProps } from '.';
import { theme } from '../../styles/theme';

import mock from './mock';

export default {
  title: 'Footer/FooterSocialMedia',
  component: FooterSocialMedia,
  args: mock,
} as Meta;

export const Template: Story<FooterSocialMediaProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <FooterSocialMedia {...args} />
    </div>
  );
};

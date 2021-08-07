import { Meta, Story } from '@storybook/react/types-6-0';
import { SocialMediaFooter, SocialMediaFooterProps } from '.';
import { theme } from '../../styles/theme';

import mock from './mock';

export default {
  title: 'SocialMediaFooter',
  component: SocialMediaFooter,
  args: mock,
} as Meta;

export const Template: Story<SocialMediaFooterProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <SocialMediaFooter {...args} />
    </div>
  );
};

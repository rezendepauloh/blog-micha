import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterLogo, FooterLogoProps } from '.';
import { theme } from 'styles/theme';

import mock from './mock';

export default {
  title: 'Footer/FooterLogo',
  component: FooterLogo,
  args: mock,
} as Meta;

export const ImageOnly: Story<FooterLogoProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <FooterLogo {...args} />
    </div>
  );
};

export const TextOnly: Story<FooterLogoProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <FooterLogo {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};

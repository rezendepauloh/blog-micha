import { Meta, Story } from '@storybook/react/types-6-0';
import { FooterLogo } from '.';
import { FooterLogoProps } from './type';
import { theme } from 'styles/theme';

import { mockWithImage, mockWithoutImage } from './mock';

export default {
  title: 'Footer/FooterLogo',
  component: FooterLogo,
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

ImageOnly.args = mockWithImage;

export const TextOnly: Story<FooterLogoProps> = (args) => {
  return (
    <>
      <FooterLogo {...args} />
    </>
  );
};

TextOnly.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

TextOnly.args = mockWithoutImage;

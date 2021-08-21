import { Meta, Story } from '@storybook/react/types-6-0';
import { Logo } from '.';
import { LogoProps } from './type';

import { mockWithImage, mockWithoutImage } from './mock';

export default {
  title: 'Any/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const ImageOnly: Story<LogoProps> = (args) => {
  return (
    <>
      <Logo {...args} />
    </>
  );
};

ImageOnly.args = mockWithImage;

export const TextOnly: Story<LogoProps> = (args) => {
  return (
    <>
      <Logo {...args} />
    </>
  );
};

TextOnly.args = mockWithoutImage;

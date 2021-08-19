import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderLogo } from '.';
import { HeaderLogoProps } from './type';

import { mockWithImage, mockWithoutImage } from './mock';

export default {
  title: 'Header/HeaderLogo',
  component: HeaderLogo,
} as Meta;

export const ImageOnly: Story<HeaderLogoProps> = (args) => {
  return (
    <div>
      <HeaderLogo {...args} />
    </div>
  );
};

ImageOnly.args = mockWithImage;

export const TextOnly: Story<HeaderLogoProps> = (args) => {
  return (
    <div>
      <HeaderLogo {...args} />
    </div>
  );
};

TextOnly.args = mockWithoutImage;

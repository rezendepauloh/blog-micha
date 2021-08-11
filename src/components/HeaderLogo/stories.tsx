import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderLogo, HeaderLogoProps } from '.';

import mock from './mock';

export default {
  title: 'Header/HeaderLogo',
  component: HeaderLogo,
  args: mock,
} as Meta;

export const ImageOnly: Story<HeaderLogoProps> = (args) => {
  return (
    <div>
      <HeaderLogo {...args} />
    </div>
  );
};

export const TextOnly: Story<HeaderLogoProps> = (args) => {
  return (
    <div>
      <HeaderLogo {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};

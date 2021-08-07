import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoFooter, LogoFooterProps } from '.';

export default {
  title: 'LogoFooter',
  component: LogoFooter,
  args: {
    text: 'Michely Segóvia',
    srcImg: 'assets/images/logo.svg',
  },
} as Meta;

export const ImageOnly: Story<LogoFooterProps> = (args) => {
  return (
    <div>
      <LogoFooter {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoFooterProps> = (args) => {
  return (
    <div>
      <LogoFooter {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};

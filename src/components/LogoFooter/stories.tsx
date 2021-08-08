import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoFooter, LogoFooterProps } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'LogoFooter',
  component: LogoFooter,
  args: {
    text: 'Michely Segóvia',
    srcImg: 'assets/images/logo-h.svg',
  },
} as Meta;

export const ImageOnly: Story<LogoFooterProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <LogoFooter {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoFooterProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
      }}
    >
      <LogoFooter {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};

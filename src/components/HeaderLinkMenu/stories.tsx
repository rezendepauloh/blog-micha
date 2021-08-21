import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderLinkMenu } from '.';
import { HeaderLinkMenuProps } from './type';
import { theme } from 'styles/theme';

export default {
  title: 'Header/HeaderLinkMenu',
  component: HeaderLinkMenu,
  args: {
    text: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    text: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Template: Story<HeaderLinkMenuProps> = (args) => {
  return (
    <div
      style={{
        background: theme.colors.primary,
        display: 'flex',
      }}
    >
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
      <HeaderLinkMenu {...args} />
    </div>
  );
};

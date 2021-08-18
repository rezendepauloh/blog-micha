import { Meta, Story } from '@storybook/react/types-6-0';
import { CloneMe } from '.';
import { CloneMeProps } from './type';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: Story<CloneMeProps> = (args) => {
  return (
    <>
      <CloneMe {...args} />
    </>
  );
};

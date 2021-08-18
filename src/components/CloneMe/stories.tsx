import { Meta, Story } from '@storybook/react/types-6-0';
import { CloneMe } from '.';
import { CloneMeProps } from './type';

// import { CloneMeDoc } from './CloneMeDoc';

export default {
  title: 'CloneMe',
  component: CloneMe,
  // parameters: {
  //   docs: {
  //     page: CloneMeDoc,
  //   },
  // },
} as Meta;

export const Template: Story<CloneMeProps> = (args) => {
  return (
    <>
      <CloneMe {...args} />
    </>
  );
};

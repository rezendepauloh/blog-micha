import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeSpecialties, HomeSpecialtiesProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomeSpecialties',
  component: HomeSpecialties,
  args: mock,
} as Meta;

export const Template: Story<HomeSpecialtiesProps> = (args) => {
  return (
    <>
      <HomeSpecialties {...args} />
    </>
  );
};

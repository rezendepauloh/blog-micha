import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeSpecialties, HomeSpecialtiesProps } from '.';

export default {
  title: 'Home/HomeSpecialties',
  component: HomeSpecialties,
} as Meta;

export const Template: Story<HomeSpecialtiesProps> = (args) => {
  return (
    <>
      <HomeSpecialties {...args} />
    </>
  );
};

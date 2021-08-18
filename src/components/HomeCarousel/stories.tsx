import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeCarousel } from '.';
import { HomeCarouselProps } from './type';

import mock from './mock';

export default {
  title: 'Home/HomeCarousel',
  component: HomeCarousel,
  args: mock,
} as Meta;

export const Template: Story<HomeCarouselProps> = (args) => {
  return (
    <>
      <HomeCarousel {...args} />
    </>
  );
};

import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeCarousel, HomeCarouselProps } from '.';

import mock from './mock';

export default {
  title: 'Home/HomeCarousel',
  component: HomeCarousel,
  args: { carousel: mock },
} as Meta;

export const Template: Story<HomeCarouselProps> = (args) => {
  return (
    <>
      <HomeCarousel {...args} />
    </>
  );
};

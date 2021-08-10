import { Meta, Story } from '@storybook/react/types-6-0';
import { HomeCarousel, HomeCarouselProps } from '.';

export default {
  title: 'Home/HomeCarousel',
  component: HomeCarousel,
} as Meta;

export const Template: Story<HomeCarouselProps> = (args) => {
  return (
    <>
      <HomeCarousel {...args} />
    </>
  );
};

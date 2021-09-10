import { Meta, Story } from '@storybook/react/types-6-0';
import { TeamTemplate } from '.';
import { TeamTemplateProps } from './type';

import {
  mockAboutTemplateWithImage as mockImage,
  mockAboutTemplateWithoutImage as MockWithoutImage,
} from './mock';

export default {
  title: 'Templates/TeamTemplate',
  component: TeamTemplate,
} as Meta;

export const TemplateWithImageLogo: Story<TeamTemplateProps> = (args) => {
  return (
    <>
      <TeamTemplate {...args} />
    </>
  );
};

TemplateWithImageLogo.args = mockImage;

export const TemplateWithoutImageLogo: Story<TeamTemplateProps> = (args) => {
  return (
    <>
      <TeamTemplate {...args} />
    </>
  );
};

TemplateWithoutImageLogo.args = MockWithoutImage;

import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent } from '.';
import { TextComponentProps } from './type';

export default {
  title: 'Any/TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

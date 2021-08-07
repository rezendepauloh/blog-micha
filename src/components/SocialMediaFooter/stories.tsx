import { Meta, Story } from '@storybook/react/types-6-0';
import { SocialMediaFooter, SocialMediaFooterProps } from '.';

export default {
  title: 'SocialMediaFooter',
  component: SocialMediaFooter,
  args: {
    children: (
      <div>
        <p>
          Rua do Catete, 435, Jardim Monte Líbano
          <br />
          Campo Grande-MS
          <br />
          CEP: 79004170
        </p>
        <i>
          <span>Instagram:</span>
        </i>
        <a
          target="_blank"
          href="https://www.instagram.com/_michelysegovia/"
          rel="noreferrer"
        >
          Michely Segóvia
        </a>
        <hr
          style={{
            height: '1px',
            border: 'none',
            margin: '10px 0px 10px 0px',
          }}
        />
        <i aria-hidden="true">
          <span>Linkedin:</span>
        </i>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/larissa-mancini-a18587194/"
          rel="noreferrer"
        >
          Michely Segóvia
        </a>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SocialMediaFooterProps> = (args) => {
  return (
    <div>
      <SocialMediaFooter {...args} />
    </div>
  );
};

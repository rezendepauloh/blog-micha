import { Meta, Story } from '@storybook/react/types-6-0';
import { PostArticleHeader } from '.';
import { PostArticleHeaderProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostArticleHeader',
  component: PostArticleHeader,
  args: mock,
} as Meta<PostArticleHeaderProps>;

export const Template: Story<PostArticleHeaderProps> = (args) => {
  return (
    <div>
      <PostArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, laborum
        tempore repellendus neque est sequi quam inventore voluptate
        reprehenderit, tenetur ut, molestias sunt aut doloribus dolorum
        molestiae enim? Eligendi, molestiae!
      </p>
    </div>
  );
};

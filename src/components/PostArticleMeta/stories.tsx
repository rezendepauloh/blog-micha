import { Meta, Story } from '@storybook/react/types-6-0';
import { PostArticleMeta } from '.';
import { PostArticleMetaProps } from './type';

import mock from './mock';

export default {
  title: 'Post/PostArticleMeta',
  component: PostArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
    author: { type: null },
    category: { type: null },
  },
} as Meta<PostArticleMetaProps>;

export const Template: Story<PostArticleMetaProps> = (args) => {
  return (
    <div>
      <PostArticleMeta {...args} />
    </div>
  );
};

export const NoAuthor: Story<PostArticleMetaProps> = (args) => {
  return (
    <div>
      <PostArticleMeta {...args} author={undefined} />
    </div>
  );
};

export const NoCategories: Story<PostArticleMetaProps> = (args) => {
  return (
    <div>
      <PostArticleMeta {...args} category={undefined} />
    </div>
  );
};

export const NoAuthorAndCategories: Story<PostArticleMetaProps> = (args) => {
  return (
    <div>
      <PostArticleMeta {...args} category={undefined} author={undefined} />
    </div>
  );
};

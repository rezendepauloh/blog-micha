import { createExcerpt, createExcerptInPostItem } from './create-excerpt';

import mock from 'components/PostArticleHeader/mock';

describe('create-excerpt', () => {
  it('should call function createExcerpt', async () => {
    createExcerpt(mock.content);
  });

  it('should call function createExcerpt if content is > 150 caracters', async () => {
    const contentSmaller =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has';

    createExcerpt(contentSmaller);
  });

  it('should call function createExcerptInPostItem', async () => {
    createExcerptInPostItem(mock.content);
  });

  it('should call function createExcerptInPostItem if content is > 150 caracters', async () => {
    const contentSmaller =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has';

    createExcerptInPostItem(contentSmaller);
  });
});

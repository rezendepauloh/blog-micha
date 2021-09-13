import { screen } from '@testing-library/react';
import { PostItem } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostItem />', () => {
  it('should render', () => {
    renderTheme(
      <PostItem
        id={mock.id}
        title={mock.title}
        slug={mock.slug}
        content={mock.content}
        created_at={mock.created_at}
        cover={mock.cover}
        author={mock.author}
        category={mock.category}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

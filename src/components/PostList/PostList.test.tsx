import { screen } from '@testing-library/react';
import { PostList } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostList />', () => {
  it('should render', () => {
    renderTheme(<PostList posts={mock.posts} title={mock.title} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);
  });
});

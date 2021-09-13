import { screen } from '@testing-library/react';
import { PostGrid } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid posts={mock.posts} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);
  });
});

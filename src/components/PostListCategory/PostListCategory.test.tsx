import { screen } from '@testing-library/react';
import { PostListCategory } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostListCategory />', () => {
  it('should render', () => {
    renderTheme(<PostListCategory {...mock} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
  });
});

import { screen } from '@testing-library/react';
import { PostListSideBar } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostListSideBar />', () => {
  it('should render', () => {
    renderTheme(<PostListSideBar {...mock} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
  });
});

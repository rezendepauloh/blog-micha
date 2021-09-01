import { screen } from '@testing-library/react';
import { PostList } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostList />', () => {
  it('should render', () => {
    renderTheme(<PostList {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

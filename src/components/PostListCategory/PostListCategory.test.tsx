import { screen } from '@testing-library/react';
import { PostListCategory } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostListCategory />', () => {
  it('should render', () => {
    renderTheme(<PostListCategory {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

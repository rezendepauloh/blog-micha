import { screen } from '@testing-library/react';
import { PostGrid } from '.';
import { renderTheme } from 'styles/render-theme';

import { mockWithTitle } from './mock';

describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid {...mockWithTitle} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

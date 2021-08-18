import { screen } from '@testing-library/react';
import { HomePostGrid } from '.';
import { renderTheme } from 'styles/render-theme';

import { mockWithTitle } from './mock';

describe('<HomePostGrid />', () => {
  it('should render', () => {
    renderTheme(<HomePostGrid {...mockWithTitle} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

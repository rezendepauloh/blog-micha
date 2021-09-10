import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { About } from '.';

import mock from './mock';

describe('<About />', () => {
  it('should render', () => {
    renderTheme(<About {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

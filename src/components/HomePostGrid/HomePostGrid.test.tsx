import { screen } from '@testing-library/react';
import { HomePostGrid } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<HomePostGrid />', () => {
  it('should render', () => {
    renderTheme(<HomePostGrid {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

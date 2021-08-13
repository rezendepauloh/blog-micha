import { screen } from '@testing-library/react';
import { HomeContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<HomeContent />', () => {
  it('should render', () => {
    renderTheme(<HomeContent {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
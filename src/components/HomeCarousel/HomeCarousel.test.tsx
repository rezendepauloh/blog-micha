import { screen } from '@testing-library/react';
import { HomeCarousel } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<HomeCarousel />', () => {
  it('should render', () => {
    renderTheme(<HomeCarousel carousel={mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

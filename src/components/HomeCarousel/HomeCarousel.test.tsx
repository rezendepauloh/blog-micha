import { screen } from '@testing-library/react';
import { HomeCarousel } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HomeCarousel />', () => {
  it('should render', () => {
    renderTheme(<HomeCarousel />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

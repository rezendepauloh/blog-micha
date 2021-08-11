import { screen } from '@testing-library/react';
import { HomeContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HomeContent />', () => {
  it('should render', () => {
    renderTheme(<HomeContent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

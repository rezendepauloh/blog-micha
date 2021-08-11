import { screen } from '@testing-library/react';
import { HomeSpecialties } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HomeSpecialties />', () => {
  it('should render', () => {
    renderTheme(<HomeSpecialties />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

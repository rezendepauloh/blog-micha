import { screen } from '@testing-library/react';
import { HomeSpecialties } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<HomeSpecialties />', () => {
  it('should render', () => {
    renderTheme(<HomeSpecialties {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

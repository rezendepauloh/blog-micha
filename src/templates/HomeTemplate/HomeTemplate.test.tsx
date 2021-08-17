import { screen } from '@testing-library/react';
import { HomeTemplate } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<HomeTemplate />', () => {
  it('should render', () => {
    renderTheme(<HomeTemplate {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

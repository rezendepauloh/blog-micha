import { screen } from '@testing-library/react';
import { HomePost } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<HomePost />', () => {
  it('should render', () => {
    renderTheme(<HomePost {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

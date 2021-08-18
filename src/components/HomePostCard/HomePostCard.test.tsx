import { screen } from '@testing-library/react';
import { HomePostCard } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<HomePostCard />', () => {
  it('should render', () => {
    renderTheme(<HomePostCard {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { PostsTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostsTemplate />', () => {
  it('should render', () => {
    renderTheme(<PostsTemplate {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { PostsTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import {
  mockPostsTemplateWithFooterImage,
  mockPostsTemplateWithoutFooterImage,
} from './mock';

describe('<PostsTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(<PostsTemplate {...mockPostsTemplateWithFooterImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render without Image Logo', () => {
    renderTheme(<PostsTemplate {...mockPostsTemplateWithoutFooterImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

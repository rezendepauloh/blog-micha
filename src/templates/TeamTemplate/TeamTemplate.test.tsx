import { screen } from '@testing-library/react';
import { TeamTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
} from './mock';

describe('<TeamTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(<TeamTemplate {...mockAboutTemplateWithImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render without Image Logo', () => {
    renderTheme(<TeamTemplate {...mockAboutTemplateWithoutImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

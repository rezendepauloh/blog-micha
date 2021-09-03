import { screen } from '@testing-library/react';
import { AboutTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
} from './mock';

describe('<AboutTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(<AboutTemplate {...mockAboutTemplateWithImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render without Image Logo', () => {
    renderTheme(<AboutTemplate {...mockAboutTemplateWithoutImage} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

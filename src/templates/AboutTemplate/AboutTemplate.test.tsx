import { screen } from '@testing-library/react';
import { AboutTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
} from './mock';

describe('<AboutTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock url="/sobre">
        <AboutTemplate
          about={mockAboutTemplateWithImage.about}
          base={mockAboutTemplateWithImage.base}
        />
      </RouterMock>,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock url="/sobre">
        <AboutTemplate
          about={mockAboutTemplateWithoutImage.about}
          base={mockAboutTemplateWithoutImage.base}
        />
      </RouterMock>,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);
  });
});

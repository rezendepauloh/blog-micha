import { screen } from '@testing-library/react';
import { HomeTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockHomeTemplateWithImage,
  mockHomeTemplateWithoutImage,
} from './mock';

describe('<HomeTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock>
        <HomeTemplate
          carousel={mockHomeTemplateWithImage.carousel}
          specialties={mockHomeTemplateWithImage.specialties}
          posts={mockHomeTemplateWithImage.posts}
          base={mockHomeTemplateWithImage.base}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(11);
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock>
        <HomeTemplate
          carousel={mockHomeTemplateWithoutImage.carousel}
          specialties={mockHomeTemplateWithoutImage.specialties}
          posts={mockHomeTemplateWithoutImage.posts}
          base={mockHomeTemplateWithoutImage.base}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(11);
  });
});

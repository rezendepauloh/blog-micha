import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import { mockBaseWithImage, mockBaseWithoutImage } from './mock';

describe('<Base />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock>
        <Base base={mockBaseWithImage.base}>Children</Base>
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock>
        <Base base={mockBaseWithoutImage.base}>Children</Base>
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
  });
});

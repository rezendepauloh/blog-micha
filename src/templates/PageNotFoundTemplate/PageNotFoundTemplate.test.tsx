import { screen } from '@testing-library/react';
import { PageNotFoundTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockPageNotFoundTemplateWithImage as mockWithImage,
  mockPageNotFoundTemplateWithoutImage as mockWithoutImage,
} from './mock';

describe('<PageNotFoundTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock url="/">
        <PageNotFoundTemplate
          base={mockWithImage.base}
          pageNotFound={mockWithImage.pageNotFound}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/">
        <PageNotFoundTemplate
          base={mockWithImage.base}
          pageNotFound={mockWithImage.pageNotFound}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock url="/">
        <PageNotFoundTemplate
          base={mockWithoutImage.base}
          pageNotFound={mockWithoutImage.pageNotFound}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/">
        <PageNotFoundTemplate
          base={mockWithoutImage.base}
          pageNotFound={mockWithoutImage.pageNotFound}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { ContactTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
} from './mock';

describe('<ContactTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock>
        <ContactTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock>
        <ContactTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock>
        <ContactTemplate base={mockAboutTemplateWithoutImage.base} />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock>
        <ContactTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

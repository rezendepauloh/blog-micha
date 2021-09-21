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
      <RouterMock url="/contato">
        <ContactTemplate
          base={mockAboutTemplateWithImage.base}
          contact={mockAboutTemplateWithImage.contact}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/contato">
        <ContactTemplate
          base={mockAboutTemplateWithImage.base}
          contact={mockAboutTemplateWithImage.contact}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock url="/contato">
        <ContactTemplate
          base={mockAboutTemplateWithoutImage.base}
          contact={mockAboutTemplateWithoutImage.contact}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/contato">
        <ContactTemplate
          base={mockAboutTemplateWithoutImage.base}
          contact={mockAboutTemplateWithoutImage.contact}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

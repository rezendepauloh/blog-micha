import { screen } from '@testing-library/react';
import { TeamTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
} from './mock';

describe('<ContactTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock url="/equipe">
        <TeamTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/equipe">
        <TeamTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock url="/equipe">
        <TeamTemplate base={mockAboutTemplateWithoutImage.base} />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/equipe">
        <TeamTemplate base={mockAboutTemplateWithImage.base} />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

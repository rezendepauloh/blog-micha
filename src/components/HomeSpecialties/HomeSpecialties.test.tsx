import { fireEvent, screen } from '@testing-library/react';
import { HomeSpecialties } from '.';
import { renderTheme } from 'styles/render-theme';

import { specialties as mock } from './mock';

describe('<HomeSpecialties />', () => {
  it('should render', () => {
    renderTheme(
      <HomeSpecialties
        title={mock.title}
        content={mock.content}
        linkSpecialty={mock.linkSpecialty}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render click in button and show modal', () => {
    renderTheme(
      <HomeSpecialties
        title={mock.title}
        content={mock.content}
        linkSpecialty={mock.linkSpecialty}
      />,
    );

    //Click on the first button
    const buttonTributario = screen.getByRole('button', {
      name: 'Direito Tributário',
    });
    fireEvent.click(buttonTributario);

    expect(
      screen.getByRole('dialog', { name: /Direito Tributário/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Direito Tributário/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);
  });
});

import { screen } from '@testing-library/react';
import { HomeCarousel } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<HomeCarousel />', () => {
  it('should render', () => {
    renderTheme(<HomeCarousel carousel={mock.carousel} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);

    //console.log(headings);

    expect(
      screen.getByRole('heading', { name: /Direito Civil/ }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Advocacia estratégica/ }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Atendimentos/ }),
    ).toBeInTheDocument();

    //Imagens
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);

    expect(images[0]).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629838945/carousel01_1c7dfc2624.jpg',
    );
    expect(images[0]).toHaveAttribute('alt', 'carousel01');

    expect(images[1]).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629839042/carousel02_01c081f89a.jpg',
    );
    expect(images[1]).toHaveAttribute('alt', 'carousel02');

    expect(images[2]).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629839092/carousel03_f3e28d28ae.jpg',
    );
    expect(images[2]).toHaveAttribute('alt', 'carousel03');
  });
});

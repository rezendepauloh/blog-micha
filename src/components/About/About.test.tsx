import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { About } from '.';

import mock from './mock';

describe('<About />', () => {
  it('should render component <About />', () => {
    renderTheme(<About {...mock} />);
    expect(screen.getByText('Sobre a Almeida & Mancini')).toBeInTheDocument();

    //Debug
    //screen.debug();

    //Heading
    expect(
      screen.getByRole('heading', { name: /Sobre a Almeida & Mancini/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Instagram/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Telefone/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Email/ })).toBeInTheDocument();

    //Imagens
    expect(
      screen.getByRole('img', { name: /Sobre a Almeida & Mancini/ }),
    ).toBeInTheDocument();

    const cover = screen.getByRole('img');
    expect(cover).toHaveAttribute('src', '/assets/images/about.jpg');
    expect(cover).toHaveAttribute('alt', 'Sobre a Almeida & Mancini');

    //Links
    expect(
      screen.getByRole('link', { name: 'Larissa Mancini' }),
    ).toHaveAttribute('href', 'https://www.instagram.com/larimancini.adv/');
    expect(
      screen.getByRole('link', { name: 'Larissa Mancini' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: 'Hellen Almeida' }),
    ).toHaveAttribute('href', 'https://www.instagram.com/hellenalmeida.adv/');
    expect(
      screen.getByRole('link', { name: 'Hellen Almeida' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: '(67) 99238-0886' }),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556792380886&text=Olá,%20Larissa%20Mancini',
    );
    expect(
      screen.getByRole('link', { name: '(67) 99238-0886' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: '(67) 99143-8422' }),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556791438422&text=Olá,%20Hellen%20Almeida',
    );
    expect(
      screen.getByRole('link', { name: '(67) 99143-8422' }),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByRole('link', { name: 'almeidaemancini@gmail.com' }),
    ).toHaveAttribute('href', 'mailto:almeidaemancini@gmail.com');
    expect(
      screen.getByRole('link', { name: 'almeidaemancini@gmail.com' }),
    ).toHaveAttribute('target', '_blank');
  });

  it('should render an alternative text on cover', () => {
    renderTheme(
      <About
        {...mock}
        cover={{
          id: '61255e5a23833c1f14915600',
          alternativeText: 'teste',
          srcImg: '/assets/images/about.jpg',
        }}
      />,
    );

    const cover = screen.getByRole('img');
    expect(cover).toHaveAttribute('src', '/assets/images/about.jpg');
    expect(cover).toHaveAttribute('alt', 'teste');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<About {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

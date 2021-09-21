import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { FooterGrid } from '.';

import { mockFooterWithImage, mockFooterWithoutImage } from './mock';

describe('<FooterGrid />', () => {
  it('should render a component <FooterGrid /> with a Logo', () => {
    renderTheme(
      <FooterGrid
        logoFooter={mockFooterWithImage.logoFooter}
        socialMediaFotter={mockFooterWithImage.socialMediaFotter}
        contactFooter={mockFooterWithImage.contactFooter}
      />,
    );

    //Debug
    //screen.debug();

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);

    //Heading
    expect(
      screen.getByRole('heading', { name: /Informações de contato/ }),
    ).toBeInTheDocument();

    //Imagens
    const cover = screen.getByRole('img');
    expect(cover).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629810879/logo_h_be529e7a63.svg',
    );
    expect(cover).toHaveAttribute('alt', 'Michely Segóvia');

    //Links
    const larissa = screen.getAllByText(/Larissa Mancini/i);
    expect(larissa[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/larimancini.adv/',
    );
    expect(larissa[0]).toHaveAttribute('target', '_blank');
    expect(larissa[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/larissa-mancini-a18587194/',
    );
    expect(larissa[1]).toHaveAttribute('target', '_blank');

    const hellen = screen.getAllByText(/Hellen Almeida/i);
    expect(hellen[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/hellenalmeida.adv/',
    );
    expect(hellen[0]).toHaveAttribute('target', '_blank');
    expect(hellen[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hellen-almeida-240a14205/',
    );
    expect(hellen[1]).toHaveAttribute('target', '_blank');

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

    expect(screen.getByRole('link', { name: 'Localização' })).toHaveAttribute(
      'href',
      'https://goo.gl/maps/f2kyjuzcaEW1jNaq7',
    );
    expect(screen.getByRole('link', { name: 'Localização' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render a component <FooterGrid /> without a Logo', () => {
    renderTheme(
      <FooterGrid
        logoFooter={mockFooterWithoutImage.logoFooter}
        socialMediaFotter={mockFooterWithoutImage.socialMediaFotter}
        contactFooter={mockFooterWithoutImage.contactFooter}
      />,
    );

    //Debug
    //screen.debug();

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);

    //Heading
    expect(
      screen.getByRole('heading', { name: /Informações de contato/ }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Michely Segóvia/ }),
    ).toBeInTheDocument();

    //Links
    const larissa = screen.getAllByText(/Larissa Mancini/i);
    expect(larissa[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/larimancini.adv/',
    );
    expect(larissa[0]).toHaveAttribute('target', '_blank');
    expect(larissa[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/larissa-mancini-a18587194/',
    );
    expect(larissa[1]).toHaveAttribute('target', '_blank');

    const hellen = screen.getAllByText(/Hellen Almeida/i);
    expect(hellen[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/hellenalmeida.adv/',
    );
    expect(hellen[0]).toHaveAttribute('target', '_blank');
    expect(hellen[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hellen-almeida-240a14205/',
    );
    expect(hellen[1]).toHaveAttribute('target', '_blank');

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

    expect(screen.getByRole('link', { name: 'Localização' })).toHaveAttribute(
      'href',
      'https://goo.gl/maps/f2kyjuzcaEW1jNaq7',
    );
    expect(screen.getByRole('link', { name: 'Localização' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot with Image', () => {
    const { container } = renderTheme(<FooterGrid {...mockFooterWithImage} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without Image', () => {
    const { container } = renderTheme(
      <FooterGrid {...mockFooterWithoutImage} />,
    );
    expect(container).toMatchSnapshot();
  });
});

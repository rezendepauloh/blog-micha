import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { FooterSocialMedia } from '.';

import mock from './mock';

describe('<FooterSocialMedia />', () => {
  it('should render a component <FooterSocialMedia />', () => {
    renderTheme(
      <FooterSocialMedia
        street={mock.street}
        number={mock.number}
        neighborhood={mock.neighborhood}
        city={mock.city}
        state={mock.state}
        cep={mock.cep}
        instagram={mock.instagram}
        linkedin={mock.linkedin}
      />,
    );

    //Debug
    //screen.debug();

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);

    //Paragraph
    // expect(
    //   screen.getByRole('p', {
    //     name: 'Rua do Catete, 435, Jardim Monte Líbano, Campo Grande - MS, CEP: 790041-70',
    //   }),
    // ).toBeInTheDocument();

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
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<FooterSocialMedia {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

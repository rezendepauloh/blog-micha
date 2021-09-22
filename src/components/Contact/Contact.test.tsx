import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderTheme } from 'styles/render-theme';

import { Contact } from '.';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import fetch from 'node-fetch';

import mock from './mock';

const handlers = [
  rest.post('/api/contact', async (req, res, ctx) => {
    const request = {
      name: 'Fulano',
      email: 'fulano@fulano.com',
      message: 'Loren ipsum dolor seat',
    };

    return res(ctx.delay(500), ctx.status(201), ctx.json(request));
  }),
];

const server = setupServer(...handlers);

describe('<Contact />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render component <Contact />', () => {
    renderTheme(
      <Contact
        name={mock.name}
        email={mock.email}
        message={mock.message}
        phone={mock.phone}
      />,
    );

    //Debug
    //screen.debug();

    // const images = screen.getAllByRole('img', { name: /title/i });
    // expect(images).toHaveLength(3);

    //Textbox
    expect(screen.getByRole('textbox', { name: 'Nome' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Mensagem' }),
    ).toBeInTheDocument();

    //Button
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();

    //Link
    expect(
      screen.getByText('Entre em contato com Larissa Mancini'),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556792380886&text=Olá,%20Larissa%20Mancini',
    );
    expect(
      screen.getByText('Entre em contato com Larissa Mancini'),
    ).toHaveAttribute('target', '_blank');

    expect(
      screen.getByText('Entre em contato com Hellen Almeida'),
    ).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=556791438422&text=Olá,%20Hellen%20Almeida',
    );
    expect(
      screen.getByText('Entre em contato com Hellen Almeida'),
    ).toHaveAttribute('target', '_blank');
  });

  it('should render click in inputs text and textarea', () => {
    renderTheme(
      <Contact
        name={mock.name}
        email={mock.email}
        message={mock.message}
        phone={mock.phone}
      />,
    );

    //Inputs
    const inputNome = screen.getByRole('textbox', { name: 'Nome' });
    const inputEmail = screen.getByRole('textbox', { name: 'Email' });
    const inputMensagem = screen.getByRole('textbox', { name: 'Mensagem' });

    //Click on the first input
    fireEvent.click(inputNome);
    userEvent.type(inputNome, 'Nome');
    userEvent.clear(inputNome);
    fireEvent.click(inputEmail);
    //expect(inputNome.value).toBe('Nome');

    //Click on the second input
    fireEvent.click(inputEmail);
    userEvent.type(inputEmail, 'Email');
    userEvent.clear(inputEmail);
    fireEvent.click(inputNome);
    //expect(inputEmail.value).toBe('Email');

    //Click on the third input
    fireEvent.click(inputMensagem);
    userEvent.type(inputMensagem, 'Mensagem');
    userEvent.clear(inputMensagem);
    fireEvent.click(inputNome);
    //expect(inputMensagem.value).toBe('Mensagem');
  });

  // it('should render click in button submit with text inputs is null', async () => {
  //   renderTheme(
  //     <Contact
  //       name={mock.name}
  //       email={mock.email}
  //       message={mock.message}
  //       phone={mock.phone}
  //     />,
  //   );

  //   // const noMorePosts = screen.getByText('Não existem posts =(');

  //   // await waitForElementToBeRemoved(noMorePosts);
  //   // screen.debug();

  //   //Click on button
  //   const inputSubmit = screen.getByRole('button', { name: 'Enviar' });
  //   fireEvent.click(inputSubmit);
  // });

  // it('fetch correctly', async () => {
  //   const response = await fetch('/api/contact');

  //   console.log(response);

  //   const data = await response.text();

  //   expect(data).not.toBe(null);
  // });
});

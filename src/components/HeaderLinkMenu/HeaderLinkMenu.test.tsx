import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderLinkMenu } from '.';

const mock = {
  id: '1',
  text: 'MenuLink',
  link: 'http://localhost/',
};

//Fazendo um "mock" do useRouter()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
export function mockNextUseRouter(pathname: string) {
  useRouter.mockImplementation(() => ({
    route: '',
    basePath: '',
    pathname,
    query: {},
    asPath: '',
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    isFallback: false,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  }));
}

describe('<HeaderLinkMenu />', () => {
  mockNextUseRouter('/');

  it('should render a link', () => {
    renderTheme(
      <HeaderLinkMenu id={mock.id} text={mock.text} link={mock.link} />,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(
      <HeaderLinkMenu
        id={mock.id}
        text={mock.text}
        link="/localhost"
        newTab={false}
      />,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <HeaderLinkMenu
        id={mock.id}
        text="Children"
        link={mock.link}
        newTab={true}
      />,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(
      <HeaderLinkMenu
        id={mock.id}
        text={mock.text}
        link={mock.link}
        newTab={false}
      />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #f5f5f6;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover {
        color: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      .c0.currentActive {
        color: #dc143c;
      }

      .c0.currentActive::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost/"
        target="_self"
      >
        MenuLink
      </a>
    `);
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderLinkMenu } from '.';
import RouterMock from 'utils/mockRouter';

const mock = {
  id: '1',
  text: 'MenuLink',
  link: 'http://localhost/',
};

describe('<HeaderLinkMenu />', () => {
  it('should render a link', () => {
    renderTheme(
      <RouterMock url={mock.link}>
        <HeaderLinkMenu id={mock.id} text={mock.text} link={mock.link} />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(
      <RouterMock>
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="/localhost"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a external link', () => {
    renderTheme(
      <RouterMock url="http://www.google.com.br/">
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="http://www.google.com.br/"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a category page', () => {
    renderTheme(
      <RouterMock url="/category/direito-empresarial">
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="/category/direito-empresarial"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a author page', () => {
    renderTheme(
      <RouterMock url="/author/michely-segovia">
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="/author/michely-segovia"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a post page', () => {
    renderTheme(
      <RouterMock url="/post/por-que-voce-deve-registrar-sua-marca/">
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="/post/por-que-voce-deve-registrar-sua-marca/"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a posts page', () => {
    renderTheme(
      <RouterMock url="/posts">
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link="/posts"
          newTab={false}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a index page', () => {
    renderTheme(
      <RouterMock url="/">
        <HeaderLinkMenu id={mock.id} text={mock.text} link="/" newTab={false} />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <RouterMock>
        <HeaderLinkMenu
          id={mock.id}
          text="Children"
          link={mock.link}
          newTab={true}
        />
      </RouterMock>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(
      <RouterMock>
        <HeaderLinkMenu
          id={mock.id}
          text={mock.text}
          link={mock.link}
          newTab={false}
        />
      </RouterMock>,
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

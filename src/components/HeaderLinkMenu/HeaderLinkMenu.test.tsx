import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { HeaderLinkMenu } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <HeaderLinkMenu link="http://localhost">Children</HeaderLinkMenu>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(<HeaderLinkMenu link="/localhost">Children</HeaderLinkMenu>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <HeaderLinkMenu link="http://localhost" newTab={true}>
        Children
      </HeaderLinkMenu>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open in a new tab', () => {
    const { container } = renderTheme(
      <HeaderLinkMenu link="http://localhost" newTab={false}>
        Children
      </HeaderLinkMenu>,
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

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});

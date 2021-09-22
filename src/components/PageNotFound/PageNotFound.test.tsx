import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { PageNotFound } from '.';

describe('<PageNotFound />', () => {
  it('should render a text', () => {
    renderTheme(<PageNotFound title="Erro 404" html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render a component without a title', () => {
    renderTheme(<PageNotFound title={undefined} html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render a component without a html', () => {
    renderTheme(<PageNotFound title="Erro 404" html={undefined} />);
    expect(screen.getByText('Erro 404')).toBeInTheDocument();
  });

  it('should render a component without a content', () => {
    renderTheme(<PageNotFound title={undefined} html={undefined} />);
    //expect(screen.getByText('')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <PageNotFound title="Erro 404" html={'<b>Children</b>'} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        color: #0A1128;
        font-size: 6.4rem;
        text-transform: uppercase;
      }

      .c0 {
        text-align: center;
        max-width: 58rem;
        margin: 0 auto;
      }

      .c2 {
        margin: 6.4rem 0;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 4.0rem;
        }
      }

      <div
        class="c0"
      >
        <h2
          class="c1"
        >
          Erro 404
        </h2>
        <div
          class="c2"
        >
          <b>
            Children
          </b>
        </div>
      </div>
    `);
  });
});

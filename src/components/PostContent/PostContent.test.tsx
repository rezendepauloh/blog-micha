import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { PostContent } from '.';

describe('<PostContent />', () => {
  it('should render a text', () => {
    renderTheme(<PostContent html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostContent html={'<b>Children</b>'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c0 p {
        margin: 2.4rem 0;
      }

      .c0 a,
      .c0 a:visited,
      .c0 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c0 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #AAAAAA;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c0 pre {
        background: #0A1128;
        padding: 2.4rem;
        font-family: monospace;
        color: #f5f5f6;
        margin: 2.4rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c0 pre code {
        color: inherit;
        background: inherit;
      }

      .c0 img {
        max-width: 100%;
      }

      .c0 .image {
        background: #AAAAAA;
        line-height: 0;
        margin: 2.4rem 0;
      }

      .c0 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c0 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem 0;
      }

      .c0 hr {
        border: none;
        border-bottom: 0.1rem solid #2d2d2d;
      }

      .c0 ul,
      .c0 ol {
        margin: 2.4rem 4.0rem;
      }

      .c0 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c0 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem 0;
      }

      .c0 table td,
      .c0 table th {
        padding: 1.6rem;
        border: 0.1rem solid #2d2d2d;
      }

      .c0 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #2d2d2d;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 2rem;
        }

        .c0 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      <div
        class="c0"
      >
        <b>
          Children
        </b>
      </div>
    `);
  });
});

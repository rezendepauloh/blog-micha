import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { PostArticleMeta } from '.';
import { PostArticleMetaProps } from './type';

import mock from './mock';

const props: PostArticleMetaProps = mock;

describe('<PostArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(
      <PostArticleMeta
        created_at={props.created_at}
        author={props.author}
        category={props.category}
      />,
    );

    expect(
      screen.getByRole('link', { name: 'Michely Segóvia' }),
    ).toHaveAttribute('href', '/author/michely-segovia');
    expect(
      screen.getByRole('link', { name: 'Direito Empresarial' }),
    ).toHaveAttribute('href', '/category/direito-empresarial');
  });

  it('should format date', () => {
    renderTheme(
      <PostArticleMeta
        created_at={props.created_at}
        author={props.author}
        category={props.category}
      />,
    );

    expect(screen.getByText('9 de setembro de 2021')).toHaveAttribute(
      'datetime',
      props.created_at,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <PostArticleMeta
        created_at={props.created_at}
        author={props.author}
        category={props.category}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with no author and categories', () => {
    const { container } = renderTheme(
      <PostArticleMeta {...props} author={undefined} category={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});

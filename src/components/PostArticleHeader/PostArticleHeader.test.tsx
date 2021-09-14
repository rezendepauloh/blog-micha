import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { PostArticleHeader } from '.';
import { PostArticleHeaderProps } from './type';

import mock from './mock';
import { formatDate } from 'utils/format-date';
import { createExcerpt } from 'utils/create-excerpt';

const props: PostArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(
      <PostArticleHeader
        id={props.id}
        title={props.title}
        content={props.content}
        cover={props.cover}
        author={props.author}
        category={props.category}
        created_at={props.created_at}
      />,
    );

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(createExcerpt(props.content))).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.created_at))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render img with a alt text', () => {
    renderTheme(
      <PostArticleHeader
        id={props.id}
        title={props.title}
        content={props.content}
        cover={{
          id: props.cover.id,
          alternativeText: 'Teste',
          srcImg: props.cover.srcImg,
        }}
        author={props.author}
        category={props.category}
        created_at={props.created_at}
      />,
    );

    expect(screen.getByRole('img', { name: 'Teste' })).toBeInTheDocument();
  });
});

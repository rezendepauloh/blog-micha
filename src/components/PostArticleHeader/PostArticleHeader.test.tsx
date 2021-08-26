import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { PostArticleHeader } from '.';
import { PostArticleHeaderProps } from './type';

import mock from './mock';
import { formatDate } from 'utils/format-date';

const props: PostArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(<PostArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.content)).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/react';
import { PostListSideBar } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostListSideBar />', () => {
  it('should render a full component', () => {
    renderTheme(
      <PostListSideBar
        categories={mock.categories}
        authors={mock.authors}
        posts={mock.posts}
      />,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
  });

  it('should render a component without categories', () => {
    renderTheme(
      <PostListSideBar
        categories={undefined}
        authors={mock.authors}
        posts={mock.posts}
      />,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
  });

  it('should render a component without authors', () => {
    renderTheme(
      <PostListSideBar
        categories={mock.categories}
        authors={undefined}
        posts={mock.posts}
      />,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
  });

  it('should render a component without posts', () => {
    renderTheme(
      <PostListSideBar
        categories={mock.categories}
        authors={mock.authors}
        posts={undefined}
      />,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);
  });
});

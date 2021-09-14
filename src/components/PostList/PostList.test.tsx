import { fireEvent, screen } from '@testing-library/react';
import { PostList } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

describe('<PostList />', () => {
  it('should render a component <PostList />', () => {
    renderTheme(<PostList posts={mock.posts} title={mock.title} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);
  });

  it('should render a component <PostList /> without a post', () => {
    renderTheme(<PostList posts={[]} title={mock.title} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
  });

  it('should render more posts by click on button', () => {
    renderTheme(<PostList posts={mock.posts} title={mock.title} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(4);

    expect(
      screen.getByRole('button', { name: 'Ver mais' }),
    ).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Ver mais' });
    fireEvent.click(button);

    expect(
      screen.getByRole('button', { name: 'Sem mais posts' }),
    ).toBeInTheDocument();
  });
});

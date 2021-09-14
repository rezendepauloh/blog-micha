import { screen } from '@testing-library/react';
import { PostCard } from '.';
import { renderTheme } from 'styles/render-theme';

import mock from './mock';

import { PostCardProps } from './type';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(
      <PostCard
        id={props.id}
        title={props.title}
        slug={props.slug}
        cover={props.cover}
        content={props.content}
        created_at={props.created_at}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render img with a alt text', () => {
    renderTheme(
      <PostCard
        id={props.id}
        title={props.title}
        slug={props.slug}
        cover={{
          id: props.cover.id,
          alternativeText: 'Teste',
          srcImg: props.cover.srcImg,
        }}
        content={props.content}
        created_at={props.created_at}
      />,
    );

    expect(screen.getByRole('img', { name: 'Teste' })).toBeInTheDocument();
  });
});

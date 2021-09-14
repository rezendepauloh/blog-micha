import { screen } from '@testing-library/react';
import { PostItem } from '.';
import { renderTheme } from 'styles/render-theme';

// import { createExcerptInPostItem } from 'utils/create-excerpt';

import { PostItemProps } from './type';

import mock from './mock';

const props: PostItemProps = mock;

describe('<PostItem />', () => {
  it('should render', () => {
    renderTheme(
      <PostItem
        id={props.id}
        title={props.title}
        slug={props.slug}
        content={props.content}
        created_at={props.created_at}
        cover={props.cover}
        author={props.author}
        category={props.category}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    // expect(screen.getByText(createExcerptInPostItem(mock.content))).toHaveStyle(
    //   {
    //     'font-size': '2.4rem',
    //   },
    // );
    // expect(
    //   screen.getByText(/É uma das etapas mais importantes/i),
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(createExcerptInPostItem(props.content)),
    // ).toBeInTheDocument();
  });

  it('should render img with a alt text', () => {
    renderTheme(
      <PostItem
        id={props.id}
        title={props.title}
        slug={props.slug}
        content={props.content}
        created_at={props.created_at}
        cover={{
          id: props.cover.id,
          alternativeText: 'Teste',
          srcImg: props.cover.srcImg,
        }}
        author={props.author}
        category={props.category}
      />,
    );

    expect(screen.getByRole('img', { name: 'Teste' })).toBeInTheDocument();
  });
});

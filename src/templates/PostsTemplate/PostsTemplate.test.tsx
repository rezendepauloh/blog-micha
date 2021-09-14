import { screen } from '@testing-library/react';
import { PostsTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import {
  mockPostsTemplateWithImage,
  mockPostsTemplateWithoutImage,
} from './mock';

//Fazendo um "mock" do useRouter()
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
export function mockNextUseRouter(pathname: string) {
  useRouter.mockImplementation(() => ({
    route: '',
    basePath: '',
    pathname,
    query: {},
    asPath: '',
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    isFallback: false,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  }));
}

describe('<PostsTemplate />', () => {
  mockNextUseRouter('/posts');
  it('should render with Image Logo', () => {
    renderTheme(
      <PostsTemplate
        posts={mockPostsTemplateWithImage.posts}
        base={mockPostsTemplateWithImage.base}
      />,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);

    //Snapshot
    const { container } = renderTheme(
      <PostsTemplate
        posts={mockPostsTemplateWithImage.posts}
        base={mockPostsTemplateWithImage.base}
      />,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <PostsTemplate
        posts={mockPostsTemplateWithoutImage.posts}
        base={mockPostsTemplateWithoutImage.base}
      />,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);

    //Snapshot
    const { container } = renderTheme(
      <PostsTemplate
        posts={mockPostsTemplateWithoutImage.posts}
        base={mockPostsTemplateWithoutImage.base}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

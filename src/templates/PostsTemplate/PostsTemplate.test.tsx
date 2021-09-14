import { screen } from '@testing-library/react';
import { PostsTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockPostsTemplateWithImage,
  mockPostsTemplateWithoutImage,
} from './mock';

describe('<PostsTemplate />', () => {
  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock>
        <PostsTemplate
          posts={mockPostsTemplateWithImage.posts}
          base={mockPostsTemplateWithImage.base}
        />
      </RouterMock>,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock>
        <PostsTemplate
          posts={mockPostsTemplateWithImage.posts}
          base={mockPostsTemplateWithImage.base}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock>
        <PostsTemplate
          posts={mockPostsTemplateWithoutImage.posts}
          base={mockPostsTemplateWithoutImage.base}
        />
      </RouterMock>,
    );
    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(8);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock>
        <PostsTemplate
          posts={mockPostsTemplateWithoutImage.posts}
          base={mockPostsTemplateWithoutImage.base}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

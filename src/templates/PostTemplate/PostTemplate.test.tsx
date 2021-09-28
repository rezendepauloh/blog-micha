import { screen } from '@testing-library/react';
import { PostTemplate } from '.';
import { renderTheme } from 'styles/render-theme';
import RouterMock from 'utils/mockRouter';

import {
  mockPostTemplateWithImage,
  mockPostTemplateWithoutImage,
} from './mock';

describe('<PostTemplate />', () => {
  //IntersectionObserver Mock
  //https://stackoverflow.com/questions/44249985/js-testing-code-that-uses-an-intersectionobserver
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should render with Image Logo', () => {
    renderTheme(
      <RouterMock url="/post">
        <PostTemplate
          post={mockPostTemplateWithImage.post}
          base={mockPostTemplateWithImage.base}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/post">
        <PostTemplate
          post={mockPostTemplateWithImage.post}
          base={mockPostTemplateWithImage.base}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(
      <RouterMock url="/post">
        <PostTemplate
          post={mockPostTemplateWithoutImage.post}
          base={mockPostTemplateWithoutImage.base}
        />
      </RouterMock>,
    );

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <RouterMock url="/post">
        <PostTemplate
          post={mockPostTemplateWithoutImage.post}
          base={mockPostTemplateWithoutImage.base}
        />
      </RouterMock>,
    );

    expect(container).toMatchSnapshot();
  });
});

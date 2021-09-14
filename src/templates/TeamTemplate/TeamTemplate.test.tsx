import { screen } from '@testing-library/react';
import { TeamTemplate } from '.';
import { renderTheme } from 'styles/render-theme';

import {
  mockAboutTemplateWithImage,
  mockAboutTemplateWithoutImage,
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

describe('<ContactTemplate />', () => {
  mockNextUseRouter('/equipe');

  it('should render with Image Logo', () => {
    renderTheme(<TeamTemplate base={mockAboutTemplateWithImage.base} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <TeamTemplate base={mockAboutTemplateWithImage.base} />,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(<TeamTemplate base={mockAboutTemplateWithoutImage.base} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <TeamTemplate base={mockAboutTemplateWithImage.base} />,
    );

    expect(container).toMatchSnapshot();
  });
});

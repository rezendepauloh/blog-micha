import { screen } from '@testing-library/react';
import { ContactTemplate } from '.';
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
  mockNextUseRouter('/contato');

  it('should render with Image Logo', () => {
    renderTheme(<ContactTemplate base={mockAboutTemplateWithImage.base} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <ContactTemplate base={mockAboutTemplateWithImage.base} />,
    );

    expect(container).toMatchSnapshot();
  });
  it('should render without Image Logo', () => {
    renderTheme(<ContactTemplate base={mockAboutTemplateWithoutImage.base} />);

    //Headings
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(5);

    //Snapshot
    const { container } = renderTheme(
      <ContactTemplate base={mockAboutTemplateWithImage.base} />,
    );

    expect(container).toMatchSnapshot();
  });
});

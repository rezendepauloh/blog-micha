import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags } from '.';

import { PostTagsProps } from './type';

import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should render two tags', () => {
    renderTheme(<PostTags tags={props.tags} />);

    //const images = screen.getAllByRole('img', { name: /title/i });
    //expect(images).toHaveLength(3);

    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);

    expect(screen.getByRole('link', { name: 'Empresa' })).toHaveAttribute(
      'href',
      '/tag/empresa',
    );

    expect(screen.getByRole('link', { name: 'Herança' })).toHaveAttribute(
      'href',
      '/tag/heranca',
    );
  });

  it('should should match snapshot', () => {
    const { container } = renderTheme(<PostTags tags={props.tags} />);

    expect(container).toMatchSnapshot();
  });

  it('should should match snapshot with no tags', () => {
    const { container } = renderTheme(<PostTags {...props} tags={undefined} />);

    expect(container).toMatchSnapshot();
  });
});

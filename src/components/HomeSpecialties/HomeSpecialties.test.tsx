import { screen } from '@testing-library/react';
import { HomeSpecialties } from '.';
import { renderTheme } from 'styles/render-theme';

import { specialties as mock } from './mock';

describe('<HomeSpecialties />', () => {
  it('should render', () => {
    renderTheme(
      <HomeSpecialties
        title={mock.title}
        content={mock.content}
        linkSpecialty={mock.linkSpecialty}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

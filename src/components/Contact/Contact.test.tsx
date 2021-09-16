// import { screen } from '@testing-library/react';
import { renderTheme } from 'styles/render-theme';
import { Contact } from '.';

import mock from './mock';

describe('<Contact />', () => {
  it('should render component <Contact />', () => {
    renderTheme(<Contact {...mock} />);

    //Debug
    //screen.debug();
  });
});

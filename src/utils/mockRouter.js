import { RouterContext } from 'next/dist/shared/lib/router-context';
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Router from 'next/router';

//Encontrado:
//https://gitmemory.com/issue/zeit/next.js/7479/568546815

function RouterMock({ children, url = '/' }) {
  const [pathname, setPathname] = useState(url);

  const mockRouter = {
    pathname,
    prefetch: async () => undefined,
    push: async (newPathname) => {
      action('Clicked link')(newPathname);
      setPathname(newPathname);
    },
  };

  Router.router = mockRouter;

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
}

RouterMock.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};

export default RouterMock;

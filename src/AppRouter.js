import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

// Components
import PrivateRoute from './auth/PrivateRoute';
import Menu from './components/Menu';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Character from './pages/Character';
import Characters from './pages/Characters';
import Home from './pages/Home';

const AppRouter = () => (
  <Router>
    <Fragment>
      <ScrollToTop />
      <Menu />
      <PrivateRoute exact path={routes.home.path()} component={Home} />
      <PrivateRoute exact path={routes.characters.path()} component={Characters} />
      <PrivateRoute exact path={routes.character.path(':characterKey')} component={Character} />
    </Fragment>
  </Router>
);

export default AppRouter;

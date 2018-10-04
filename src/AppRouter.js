import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import createRestrictedRoute from './auth/createRestrictedRoute';

// Components
import Menu from './components/Menu';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Groups from './pages/Groups';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const RestrictedRoute = createRestrictedRoute(SignIn);

const AppRouter = () => (
  <Router>
      <Fragment>
        <ScrollToTop />
        <Menu />
        <RestrictedRoute exact path={routes.home.path()} component={Home} />
        <RestrictedRoute exact path={routes.groups.path()} component={Groups} />
        <RestrictedRoute exact path={routes.group.path(':groupKey')} component={Home} />
      </Fragment>
  </Router>
);

export default AppRouter;

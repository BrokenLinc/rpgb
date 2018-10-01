import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import createRestrictedRoute from './auth/createRestrictedRoute';
import ScrollToTop from './components/ScrollToTop';
import paths from './paths';
import Menu from './components/Menu';
import Home from './pages/Home';
import Groups from './pages/Groups';
import SignIn from './pages/SignIn';

const RestrictedRoute = createRestrictedRoute(SignIn);

const AppRouter = () => (
  <Router>
    <div className="content-inner">
      <ScrollToTop />
      <Menu />
      <RestrictedRoute exact path={paths.home()} component={Home} />
      <RestrictedRoute exact path={paths.groups()} component={Groups} />
      <RestrictedRoute exact path={paths.group(':groupKey')} component={Home} />
    </div>
  </Router>
);

export default AppRouter;

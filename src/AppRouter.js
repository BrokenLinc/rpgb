import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import createPrivateRouteComponent from './auth/createPrivateRouteComponent';

// Components
import Menu from './components/Menu';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Characters from './pages/Characters';
import CharacterAdd from './pages/CharacterAdd';
import CharacterEdit from './pages/CharacterEdit';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const PrivateRoute = createPrivateRouteComponent(SignIn);

const AppRouter = () => (
  <Router>
    <Fragment>
      <ScrollToTop />
      <Menu />
      <PrivateRoute exact path={routes.home.path()} component={Home} />
      <PrivateRoute exact path={routes.characters.path()} component={Characters} />
      <PrivateRoute exact path={routes.characterAdd.path()} component={CharacterAdd} />
      <PrivateRoute exact path={routes.characterEdit.path(':characterKey')} component={CharacterEdit} />
    </Fragment>
  </Router>
);

export default AppRouter;

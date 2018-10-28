import React from 'react';
import { Route } from 'react-router-dom';
import  { branch, compose, renderComponent, renderNothing } from 'recompose';

import withUser from './withUser';

const withSignIn = (component, alternate) => compose(
  withUser,
  branch(({ user }) => user.isLoading, renderNothing),
  branch(({ user }) => user.email,
    renderComponent(component),
    renderComponent(alternate),
  ),
);

const createPrivateRouteComponent = (alternate) => ({ component, ...routeProps }) => (
  <Route {...routeProps} component={withSignIn(component, alternate)()} />
);

export default createPrivateRouteComponent;

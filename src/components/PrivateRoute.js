import React from 'react';
import { Route } from 'react-router-dom';

import withUser from '../hoc/withUser';
import SignIn from '../pages/SignIn';

const PrivateRoute = ({ component: Component, ...routeProps }) => (
  <Route
    {...routeProps}
    component={withUser(({ user, ...props }) => {
      if (user.isLoading) return null;
      return user.email ? <Component {...props} /> : <SignIn {...props} />;
    })}
  />
);

export default PrivateRoute;

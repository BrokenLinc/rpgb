import React, { Fragment } from 'react';

import withMessage from '../hoc/withMessage';
import ROUTE from '../routes';

const Home = ({ message }) => (
  <Fragment>
    <h1>{ROUTE.home.title}</h1>
    {message && <p>{ message }</p>}
  </Fragment>
);

export default withMessage(Home);

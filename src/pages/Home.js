import React, { Fragment } from 'react';

import withMessage from '../hoc/withMessage';

const Home = ({ message }) => (
  <Fragment>
    <h1>Home</h1>
    {message && <p>{ message }</p>}
  </Fragment>
);

export default withMessage(Home);

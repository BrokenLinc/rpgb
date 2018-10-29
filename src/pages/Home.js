import React, { Fragment } from 'react';
import { compose } from 'recompose';

import withNames from '../hoc/withNames';
import withMessage from '../hoc/withMessage';
import ROUTE from '../routes';
import Button from '../components/Button';

const Home = compose(
  withMessage,
  withNames(4),
)(({ message, names, getNames }) => (
  <Fragment>
    <h1>{ROUTE.home.title}</h1>
    {message && <p>{ message }</p>}
    {names && <p>Random names: { names.join(', ') }</p>}
    <Button onClick={getNames}>Get Names</Button>
  </Fragment>
));

export default Home;

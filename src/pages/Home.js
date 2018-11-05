import React, { Fragment } from 'react';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import withNames from '../hoc/withNames';
import withMessage from '../hoc/withMessage';
import ROUTE from '../routes';

const Home = compose(
  withMessage,
  withNames(4),
)(({ message, names, getNames }) => (
  <Fragment>
    <Typography component="h1" variant="h1" gutterBottom>{ROUTE.home.title}</Typography>
    {message && <Typography gutterBottom>{ message }</Typography>}
    {names && <Typography gutterBottom>Random names: { names.join(', ') }</Typography>}
    <Button onClick={getNames} variant="contained" color="primary">Get Names</Button>
  </Fragment>
));

export default Home;

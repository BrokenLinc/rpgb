import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import withFirestoreAddOrUpdateForm from '../hoc/withFirestoreAddOrUpdateForm';

export default compose(
  withStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 200,
    },
    textField: {
      marginBottom: theme.spacing.unit,
    },
  })),
  withFirestoreAddOrUpdateForm({
    collection: 'characters',
    fields: ['name'],
  }),
)(({ classes, data = {}, onSubmit }) => (
  <form onSubmit={onSubmit} className={classes.container}>
    <TextField
      label="Name"
      id="name"
      className={classes.textField}
      defaultValue={data.name}
    />
    <Button type="submit" variant="contained" color="primary">Save</Button>
  </form>
));

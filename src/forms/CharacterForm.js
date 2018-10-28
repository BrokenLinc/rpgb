import React from 'react';
import { compose } from 'recompose';

import withLoadingSpinner from '../hoc/withLoadingSpinner';
import withFirestoreAddOrUpdateForm from '../hoc/withFirestoreAddOrUpdateForm';
import Button from '../components/Button';

export default compose(
  withLoadingSpinner,
  withFirestoreAddOrUpdateForm({
    collection: 'characters',
    fields: ['name'],
  }),
)(({ data = {}, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="name" defaultValue={data.name} type="text" />
    <Button type="submit">Save</Button>
  </form>
));

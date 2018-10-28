import React from 'react';
import { compose } from 'recompose';

import withFirestoreAddOrUpdateForm from '../hoc/withFirestoreAddOrUpdateForm';
import Button from '../components/Button';

export default compose(
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

import React from 'react';
import { compose } from 'recompose';

import withFirestoreAddOrUpdateForm from '../hoc/withFirestoreAddOrUpdateForm';
import Button from '../components/Button';
import TextFormGroup from '../components/TextFormGroup';

export default compose(
  withFirestoreAddOrUpdateForm({
    collection: 'characters',
    fields: ['name'],
  }),
)(({ data = {}, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextFormGroup label="Name" name="name" defaultValue={data.name} />
    <Button type="submit">Save</Button>
  </form>
));

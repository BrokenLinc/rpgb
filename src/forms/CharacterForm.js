import React from 'react';
import { compose } from 'recompose';

import withLoadingSpinner from '../hoc/withLoadingSpinner';
import withUpdateSnapshotOnSubmit from '../hoc/withUpdateSnapshotOnSubmit';
import Button from '../components/Button';

const CharacterForm = ({ data, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <h1>{data.name || 'Untitled'}</h1>
    <input name="name" defaultValue={data.name} type="text" />
    <Button type="submit">Save</Button>
  </form>
);

export default compose(
  withLoadingSpinner,
  withUpdateSnapshotOnSubmit('name'),
)(CharacterForm);

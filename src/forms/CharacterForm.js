import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';

import withFirestoreAddOrUpdateForm from '../hoc/withFirestoreAddOrUpdateForm';
import Button from '../components/Button';
import TextFormGroup from '../components/TextFormGroup';
import { getFullName } from '../functions';

export default compose(
  withFirestoreAddOrUpdateForm({
    collection: 'characters',
    fields: ['name'],
  }),
  withProps({
    nameInput: React.createRef(),
  }),
  withHandlers(() => ({
    randomize: ({ nameInput }) => () => {
      getFullName().then(({ data }) => {
        nameInput.current.value = data;
      }).catch(({code, message, details}) => {
        // console.log(code, message, details);
      });
    },
  })),
)(({ data = {}, nameInput, onSubmit, randomize }) => (
  <form onSubmit={onSubmit}>
    <TextFormGroup
      label="Name"
      name="name"
      inputRef={nameInput}
      defaultValue={data.name}
      maxLength={20}
    />
    <Button onClick={randomize}>Randomize</Button>
    <Button type="submit">Save</Button>
  </form>
));

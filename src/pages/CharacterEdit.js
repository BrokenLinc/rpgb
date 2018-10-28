import React, { Fragment } from 'react';
import { FirestoreDocument } from 'react-firestore';
import { compose, renderComponent } from 'recompose';

import ROUTE from '../routes';
import withRouteParams from '../hoc/withRouteParams';
import withLoadingSpinner from '../hoc/withLoadingSpinner';
import CharacterForm from '../forms/CharacterForm';

const renderCharacterForm = compose(
  withLoadingSpinner,
  renderComponent(CharacterForm),
);

const CharacterEdit = compose(
  withRouteParams('characterKey'),
)(({ characterKey }) => (
  <Fragment>
    <h1>{ROUTE.characterEdit.title}</h1>
    <FirestoreDocument
      path={`characters/${characterKey}`}
      render={renderCharacterForm()}
    />
  </Fragment>
));

export default CharacterEdit;

import React, { Fragment } from 'react';

import ROUTE from '../routes';
import CharacterForm from '../forms/CharacterForm';

const CharacterAdd = () => (
  <Fragment>
    <h1>{ROUTE.characterAdd.title}</h1>
    <CharacterForm />
  </Fragment>
);

export default CharacterAdd;

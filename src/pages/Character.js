import React from 'react';
import { FirestoreDocument } from 'react-firestore';

import CharacterForm from '../forms/CharacterForm';

const Character = ({ match }) => (
  <FirestoreDocument
    path={`characters/${match.params.characterKey}`}
    render={(props) => <CharacterForm {...props}/>}
  />
);

export default Character;

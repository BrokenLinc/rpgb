import React from 'react';
import { FirestoreDocument } from 'react-firestore';

const renderCharacter = ({isLoading, data}) => {
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <h1>{data.name}</h1>
  );
};

const Characters = ({ match }) => (
  <FirestoreDocument
    path={`characters/${match.params.characterKey}`}
    render={renderCharacter}
  />
);

export default Characters;

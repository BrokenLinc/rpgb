import React, { Fragment} from 'react';
import { FirestoreCollection } from 'react-firestore';
import { Link } from 'react-router-dom';

import ROUTE from '../routes';
import withLoadingSpinner from '../hoc/withLoadingSpinner';

const CharacterList = withLoadingSpinner(({ isLoading, data }) => (
  <ul>
    {data.map(({ id, name }) => (
      <li key={id}>
        <Link to={ROUTE.character.path(id)}>{name}</Link>
      </li>
    ))}
  </ul>
));

const Characters = () => (
  <Fragment>
    <h1>Characters</h1>
    <FirestoreCollection
      path="characters"
      sort="name"
      render={(props) => <CharacterList {...props} />}
    />
  </Fragment>
);

export default Characters;

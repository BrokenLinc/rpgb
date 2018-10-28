import React, { Fragment} from 'react';
import { FirestoreCollection } from 'react-firestore';
import { Link } from 'react-router-dom';
import { compose, renderComponent } from 'recompose';

import ROUTE from '../routes';
import withLoadingSpinner from '../hoc/withLoadingSpinner';

const CharacterList = ({ isLoading, data }) => (
  <ul>
    {data.map(({ id, name }) => (
      <li key={id}>
        <Link to={ROUTE.characterEdit.path(id)}>{name}</Link>
      </li>
    ))}
  </ul>
);

const renderCharacterList = compose(
  withLoadingSpinner,
  renderComponent(CharacterList),
);

const Characters = () => (
  <Fragment>
    <h1>{ROUTE.characters.title}</h1>
    <FirestoreCollection
      path="characters"
      sort="name"
      render={renderCharacterList()}
    />
  </Fragment>
);

export default Characters;

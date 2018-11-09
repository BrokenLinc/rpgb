import React, { Fragment} from 'react';
import { FirestoreCollection } from 'react-firestore';
import { Link } from 'react-router-dom';
import { compose, renderComponent } from 'recompose';

import ROUTE from '../routes';
import withLoadingSpinner from '../hoc/withLoadingSpinner';

const CharacterList = ({ isLoading, data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {data.map(({ id, name }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>
            <Link to={ROUTE.characterEdit.path(id)}>Edit</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const renderCharacterList = compose(
  withLoadingSpinner,
  renderComponent(CharacterList),
)();

const Characters = () => (
  <Fragment>
    <h1>{ROUTE.characters.title}</h1>
    <FirestoreCollection
      path="characters"
      sort="name"
      render={renderCharacterList}
    />
  </Fragment>
);

export default Characters;

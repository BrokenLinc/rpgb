import React, {Component, Fragment} from 'react';
import { FirestoreCollection } from 'react-firestore';
import { Link } from 'react-router-dom';

import ROUTE from '../routes';

const renderGroupsList = ({ isLoading, data }) => {
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>
          <Link to={ROUTE.character.path(id)}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

class Characters extends Component {
  render() {
    return (
      <Fragment>
        <h1>Characters</h1>
        <FirestoreCollection
          path="characters"
          sort="name"
          render={renderGroupsList}
        />
      </Fragment>
    );
  }
}

export default Characters;

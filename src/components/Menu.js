import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

import { auth } from '../firebase';
import { mainMenu } from '../menus';
import withUser from '../auth/withUser';

const handleClickSignOut = () => auth.signOut();

const Menu = ({ user }) => (
  <Fragment>
    {user.isLoaded && (
      <ul>
        <li>Welcome, {user.displayName}</li>
        <li>Welcome, {user.uid}</li>
        <li><img width={80} src={user.photoURL} alt={user.displayName} /></li>
        {map(mainMenu.routes, ({ title, path}, index) => (
            <li key={index}><Link to={path()}>{title()}</Link></li>
        ))}
        <button onClick={handleClickSignOut}>Log out</button>
      </ul>
    )}
  </Fragment>
);

export default withUser(Menu);

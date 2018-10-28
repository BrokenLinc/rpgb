import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

import { auth } from '../firebase';
import { mainMenu } from '../menus';
import withUserOnly from '../auth/withUserOnly';
import Button from '../components/Button';

const handleClickSignOut = () => auth.signOut();

const Menu = withUserOnly(({ user }) => (
  <ul>
    <li>Welcome, {user.displayName}</li>
    <li>UID: {user.uid}</li>
    <li><img width={80} src={user.photoURL} alt={user.displayName} /></li>
    {map(mainMenu.routes, ({ title, path}, index) => (
        <li key={index}><Link to={path()}>{title}</Link></li>
    ))}
    <Button onClick={handleClickSignOut}>Log out</Button>
  </ul>
));

export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { renderComponent } from 'recompose';

import { auth } from '../firebase';
import { mainMenu } from '../menus';
import withUserOnly from '../auth/withUserOnly';

const handleClickSignOut = () => auth.signOut();

const renderLink = renderComponent(Link)();

const Menu = withUserOnly(({ user }) => (
  <List>
    <ListItem>
      <ListItemText
        primary={`Logged in as ${user.displayName}`}
        secondary={`UID: ${user.uid}`}
      />
    </ListItem>
    <ListItem><img width={80} src={user.photoURL} alt={user.displayName} /></ListItem>
    {map(mainMenu.routes, ({ title, path}, index) => (
        <ListItem key={index} button component={renderLink} to={path()}>
          <ListItemText primary={title} />
        </ListItem>
    ))}
    <ListItem button onClick={handleClickSignOut}>
      <ListItemText primary="Log out" />
    </ListItem>
  </List>
));

export default Menu;

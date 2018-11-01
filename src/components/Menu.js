import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import { renderComponent } from 'recompose';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { auth } from '../firebase';
import { mainMenu } from '../menus';
import withUserOnly from '../auth/withUserOnly';

const handleClickSignOut = () => auth.signOut();

const renderLink = renderComponent(Link)();

const Menu = withUserOnly(({ user }) => (
  <List>
    <ListItem>
      <Avatar alt={user.displayName} src={user.photoURL} />
      <ListItemText
        primary={`Logged in as ${user.displayName}`}
        secondary={`UID: ${user.uid}`}
      />
    </ListItem>
    <Divider />
    {map(mainMenu.routes, ({ title, path, icon }, index) => (
        <ListItem key={index} button component={renderLink} to={path()}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
    ))}
    <ListItem button onClick={handleClickSignOut}>
      <ListItemIcon><ExitToAppIcon /></ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </List>
));

export default Menu;

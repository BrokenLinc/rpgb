import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';

const ROUTES = {
  home: {
    title: 'Home',
    path: () => '/',
    icon: <HomeIcon />,
  },
  characters: {
    title: 'Characters',
    path: () => '/characters',
    icon: <GroupIcon />,
  },
  characterAdd: {
    title: 'Add Character',
    path: () => `/characters/add`,
    icon: <PersonAddIcon />,
  },
  characterEdit: {
    title: 'Edit Character',
    path: (key) => `/characters/${key}/edit`,
    icon: <EditIcon />,
  },
};

export default ROUTES;

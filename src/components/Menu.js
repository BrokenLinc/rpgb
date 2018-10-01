import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import paths from '../paths';
import Button from '../components/Button';

const handleClickSignOut = () => auth.signOut();

const Menu = ({ isUserLoaded, user }) => (
  <header className="header p-content">
    {isUserLoaded && (
      <ul>
        <li>Welcome, {user.displayName}</li>
        <li><Link to={paths.home()}>Home</Link></li>
        <li><Link to={paths.groups()}>Groups</Link></li>
        <Button onClick={handleClickSignOut}>Log out</Button>
      </ul>
    )}
  </header>
);

Menu.propTypes = {
  isUserLoaded: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(({ user }) => ({
  isUserLoaded: (!user.isLoading && !!user.email),
  user,
}))(Menu);

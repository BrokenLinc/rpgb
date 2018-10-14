/* Connects Rebase auth to Redux store */
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';

import { signedIn, signedOut } from './redux';

class AuthConnector extends Component {
  componentWillMount() {
    const { auth, signedIn, signedOut } = this.props;
    auth.onAuthStateChanged((user) => {
      if (user) {
        signedIn(user);
      } else {
        signedOut();
      }
    });
  }
  render() {
    return null;
  }
}

AuthConnector.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(
  null,
  {
    signedIn,
    signedOut,
  },
)(AuthConnector);

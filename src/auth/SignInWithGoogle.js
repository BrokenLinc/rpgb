import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class SignInWithGoogle extends Component {
  handleClick = () => {
    return this.props.auth.signInWithPopup(googleAuthProvider);
  };

  render() {
    return (
      <button {...this.props} onClick={this.handleClick} />
    );
  }
}

SignInWithGoogle.propTypes = {
  auth: PropTypes.shape({
    GoogleAuthProvider: PropTypes.func.isRequired,
  }).isRequired
};

SignInWithGoogle.defaultProps = {
  children: 'Sign In with Google',
  type: 'button',
};

export default SignInWithGoogle;

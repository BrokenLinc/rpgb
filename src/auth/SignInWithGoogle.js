import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class SignInWithGoogle extends Component {
  handleClick = () => {
    this.props.auth.signInWithPopup(googleAuthProvider);
  };

  render() {
    return (
      <button
        type="button"
        {...this.props.buttonProps}
        onClick={this.handleClick}
      >
        Sign In with Google
      </button>
    );
  }
}

SignInWithGoogle.propTypes = {
  auth: PropTypes.object.isRequired,
  buttonProps: PropTypes.object,
};

export default SignInWithGoogle;

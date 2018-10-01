import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class SignIn extends Component {
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

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  buttonProps: PropTypes.object,
};

export default SignIn;

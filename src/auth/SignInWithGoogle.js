import React, { Component } from 'react';
import firebase from 'firebase';

import { auth } from './config';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class SignInWithGoogle extends Component {
  handleClick = () => {
    return auth.signInWithPopup(googleAuthProvider);
  };

  render() {
    return (
      <button {...this.props} onClick={this.handleClick} />
    );
  }
}

SignInWithGoogle.defaultProps = {
  children: 'Sign In with Google',
  type: 'button',
};

export default SignInWithGoogle;

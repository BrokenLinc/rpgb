import React, { Fragment } from 'react';

import { auth } from '../firebase';
import SignInWithGoogle from '../auth/SignInWithGoogle';

const SignIn = () => (
  <Fragment>
    <h1>Sign In</h1>
    <SignInWithGoogle className="btn" auth={auth} />
  </Fragment>
);

export default SignIn;

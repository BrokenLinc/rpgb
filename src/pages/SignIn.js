import React from 'react';

import { auth } from '../firebase';
import SignInWithGoogle from '../auth/SignInWithGoogle';

const SignIn = () => (
  <div className="p-content">
    <h1>Sign In</h1>
    <SignInWithGoogle className="btn is-green is-outline" auth={auth} />
  </div>
);

export default SignIn;

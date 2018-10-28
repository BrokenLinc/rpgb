import { signedIn, signedOut } from './redux';

const connectAuthToStore = (auth, store) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(signedIn(user));
    } else {
      store.dispatch(signedOut());
    }
  });
};

export default connectAuthToStore;

import { connect } from 'react-redux';

import { USER_REDUX_STORE_KEY } from './config';

export default connect((state) => {
  const {
    displayName,
    email,
    isLoading,
    photoURL,
    uid,
  } = state[USER_REDUX_STORE_KEY];

  return {
    user: {
      isLoaded: (!isLoading && !!email),
      displayName,
      email,
      photoURL,
      uid,
    },
  };
});

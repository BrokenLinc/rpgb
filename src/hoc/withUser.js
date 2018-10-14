import { connect } from 'react-redux';

export default connect(({ user }) => {
  const {
    displayName,
    email,
    photoURL,
    uid,
  } = user;

  return {
    user: {
      isLoaded: (!user.isLoading && !!user.email),
      displayName,
      email,
      photoURL,
      uid,
    },
  };
});

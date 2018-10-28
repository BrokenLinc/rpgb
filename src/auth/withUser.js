import { connect } from 'react-redux';
import pick from 'lodash/pick';

import { USER_REDUX_STORE_KEY } from './config';

export default connect((state) => {
  const user = pick(state[USER_REDUX_STORE_KEY], [
    'displayName',
    'email',
    'isLoading',
    'photoURL',
    'uid',
  ]);

  user.isLoaded = !user.isLoading && user.email;

  return { user };
});

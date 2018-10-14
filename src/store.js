import { combineReducers, createStore } from 'redux';

import { USER_REDUX_STORE_KEY } from './auth/config';
import user from './auth/redux';

const reducer = combineReducers({
  [USER_REDUX_STORE_KEY]: user,
});

export default createStore(reducer);

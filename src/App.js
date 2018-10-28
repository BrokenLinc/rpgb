/* Compose Redux, Firestore, auth, and AppRouter */
import React from 'react';
import { Provider } from 'react-redux';
import { FirestoreProvider } from 'react-firestore';

import connectAuthToStore from './auth/connectAuthToStore';
import firebase, { auth } from './firebase';
import store from './store';
import AppRouter from './AppRouter';

connectAuthToStore(auth, store);

const App = () => (
  <Provider store={store}>
    <FirestoreProvider firebase={firebase}>
      <AppRouter />
    </FirestoreProvider>
  </Provider>
);

export default App;

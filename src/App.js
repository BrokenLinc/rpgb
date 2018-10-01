/* Compose Redux Provider, Firestore Provider, AuthConnector, and AppRouter */
import React from 'react';
import { Provider } from 'react-redux';
import { FirestoreProvider } from 'react-firestore';

import firebase, { auth } from './firebase';
import store from './store';
import AppRouter from './AppRouter';
import AuthConnector from './auth/AuthConnector';

const App = () => (
    <Provider store={store}>
        <FirestoreProvider firebase={firebase}>
            <AuthConnector auth={auth}>
                <AppRouter />
            </AuthConnector>
        </FirestoreProvider>
    </Provider>
);

export default App;
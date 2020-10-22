import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers'
import thunk from 'redux-thunk'

// do podlaczenia bazy do aplikacji
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from './firebase/config'

// do logowania
import { isLoaded } from "react-redux-firebase"
import { useSelector } from 'react-redux'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const store = createStore(reducers, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase })),
  reduxFirestore(firebase),
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,

}

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <p>Loading....</p>
    );
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <Router>
            <Switch>
              <Route path='/' exact component={App}></Route>
              <Route path='/dashboard' exact component={Dashboard}></Route>
            </Switch>
            </Router>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

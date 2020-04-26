import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_URL,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "reactclientpanel-ad545",
  storageBucket: "reactclientpanel-ad545.appspot.com",
  messagingSenderId: "1006880168780",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-W8J4314SLB",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rrfProps };

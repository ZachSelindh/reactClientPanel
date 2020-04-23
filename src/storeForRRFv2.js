import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from "redux-firestore";

//Custom reducers
// @todo

// Firebase config from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCMspBSF7xS_7A2N-MXNJGulwGBLyMtzfc",
  authDomain: "reactclientpanel-ad545.firebaseapp.com",
  databaseURL: "https://reactclientpanel-ad545.firebaseio.com",
  projectId: "reactclientpanel-ad545",
  storageBucket: "reactclientpanel-ad545.appspot.com",
  messagingSenderId: "1006880168780",
  appId: "1:1006880168780:web:2842459659df4b7018cde9",
  measurementId: "G-W8J4314SLB",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
// const firestore = firebase.firestore();

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create initial state
const initialState = {};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENDSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export { store, rrfProps };

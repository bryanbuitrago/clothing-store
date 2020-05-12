import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAv5JOKrQVfOU1LIWIK6e2RePKrPj3uPGI",
    authDomain: "clothing-store-db-a9b86.firebaseapp.com",
    databaseURL: "https://clothing-store-db-a9b86.firebaseio.com",
    projectId: "clothing-store-db-a9b86",
    storageBucket: "clothing-store-db-a9b86.appspot.com",
    messagingSenderId: "790471757978",
    appId: "1:790471757978:web:eabb091f1f5e2c50d8cf23",
    measurementId: "G-FVL4JTHB18"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log(`error creating user ${error.message}`); 
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
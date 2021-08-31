import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAM_nfVuD4y6qqJsc8CCbBqYZe9HbilinA",
  authDomain: "crown-db-14951.firebaseapp.com",
  projectId: "crown-db-14951",
  storageBucket: "crown-db-14951.appspot.com",
  messagingSenderId: "341606197040",
  appId: "1:341606197040:web:bde2273e29341e883c0af5",
  measurementId: "G-GX0ZLC2WYP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
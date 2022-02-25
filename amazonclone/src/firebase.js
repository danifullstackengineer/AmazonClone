// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvJl9hT1RrssI-2l4Jvn3ZauNhPasiPWw",
  authDomain: "clone-ccdba.firebaseapp.com",
  projectId: "clone-ccdba",
  storageBucket: "clone-ccdba.appspot.com",
  messagingSenderId: "786911348733",
  appId: "1:786911348733:web:465616c86862d64672fb94",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}